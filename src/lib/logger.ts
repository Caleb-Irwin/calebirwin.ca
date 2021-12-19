export const logger = async (
  message: string,
  metadata: Record<string, unknown>
): Promise<string> => {
  console.log('Logger: ', message, metadata);
  const res = await fetch('https://api.logflare.app/logs', {
    method: 'POST',
    headers: {
      'x-api-key': import.meta.env.VITE_LF_API_KEY as string,
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      source: import.meta.env.VITE_LF_SOURCE_TOKEN,
      log_entry: message,
      metadata
    })
  });
  return res.statusText;
};
