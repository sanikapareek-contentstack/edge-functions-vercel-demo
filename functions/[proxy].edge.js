export default async function handler(req, context) {
  const modifiedUrl = new URL(req.url);
  const route = modifiedUrl.pathname;

  if (route === '/demo') {
    modifiedUrl.pathname = '/';
    return Response.redirect(modifiedUrl, 301)
  }

  return fetch(req);
}