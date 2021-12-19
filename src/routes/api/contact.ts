import type { Request, Response } from '@sveltejs/kit';
import type { ReadOnlyFormData } from '@sveltejs/kit/types/helper';
import { logger } from '$lib/logger';

export const post = async (req: Request): Promise<Response> => {
  const body = req.body as ReadOnlyFormData;

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

    if (json.success) {
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
          body.get('name')
        )}&email=${encodeURIComponent(body.get('email'))}&message=${encodeURIComponent(
          err +
            '\n' +
            import.meta.env.VITE_LF_SOURCE_TOKEN +
            '\n' +
            import.meta.env.VITE_STATIC_FORMS_API_KEY +
            '\n' +
            body.get('message')
        )}`
      }
    };
  }
};
