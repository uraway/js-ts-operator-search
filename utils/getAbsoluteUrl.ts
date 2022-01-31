import { IncomingMessage } from 'http'
export function getAbsoluteUrl(
  req: IncomingMessage,
  setLocalhost: string
): {
  protocol: string
  host: string | string[]
  origin: string
} {
  let protocol = 'https:'
  let host = req
    ? req.headers['x-forwarded-host'] || req.headers['host']
    : window.location.host
  if (host.indexOf('localhost') > -1) {
    if (setLocalhost) host = setLocalhost
    protocol = 'http:'
  }
  return {
    protocol: protocol,
    host: host,
    origin: protocol + '//' + host,
  }
}
