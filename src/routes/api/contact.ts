import type { RequestHandler } from '@sveltejs/kit';
import { logger } from '$lib/logger';

export const post: RequestHandler = async ({ request }) => {
  const body = await request.formData();

  try {
    const contact = {
      name: body.get('name'),
      email: body.get('email'),
      subject: 'StaticForms - Contact Form (calebirwin.ca)',
      honeypot: '', // if any value received in this field, form submission will be ignored.
      message: body.get('message'),
      replyTo: '@', // this will set replyTo of email to email address entered in the form
      accessKey: import.meta.env.VITE_STATIC_FORMS_API_KEY // get your access key from https://www.staticforms.xyz
    };

    logger('Form Submission!', contact);

    const res = await fetch('https://api.staticforms.xyz/submit', {
      method: 'POST',
      body: JSON.stringify(contact),
      headers: { 'Content-Type': 'application/json' }
    });

    const json = await res.json();

    if (json.success || res.status === 200) {
      return {
        status: 302,
        headers: {
          location: '/contact?submitted'
        }
      };
    } else {
      throw Error('Failed! (static form submission)\n' + JSON.stringify(json));
    }
  } catch (err) {
    console.log(err);
    return {
      status: 302,
      headers: {
        location: `/contact?failed&name=${encodeURIComponent(
          body.get('name') as string
        )}&email=${encodeURIComponent(body.get('email') as string)}&message=${encodeURIComponent(
          body.get('message') as string
        )}`
      }
    };
  }
};
