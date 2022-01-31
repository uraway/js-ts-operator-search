import { IncomingMessage } from 'http'
export function getAbsoluteUrl(
  setLocalhost: string,
  req?: IncomingMessage
): {
  origin: string
} {
  let protocol = 'https:'
  let host = req
    ? req.headers['x-forwarded-host'] || req.headers['host']
    : window.location.host
  if (host && host.indexOf('localhost') > -1) {
    if (setLocalhost) host = setLocalhost
    protocol = 'http:'
  }
  return {
    origin: protocol + '//' + host,
  }
}
