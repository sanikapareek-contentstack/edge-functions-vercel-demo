export default async function handler(req, context) {
  const modifiedUrl = new URL(req.url);
  const route = modifiedUrl.pathname;

  if (route === '/demo') {
    modifiedUrl.pathname = '/';
    const newRequest = new Request(modifiedUrl, req);
    return fetch(newRequest);
  }

  return fetch(req);
}