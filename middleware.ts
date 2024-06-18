export default function middleware(request) {
  const modifiedUrl = new URL(request.url);
  const route = modifiedUrl.pathname;

  if (route === '/demo') {
    modifiedUrl.pathname = '/';
    const newRequest = new Request(modifiedUrl, request);
    return fetch(newRequest);
  }

  return fetch(request);
}