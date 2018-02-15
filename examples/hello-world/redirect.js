export default function redirect (res, path) {
  if (res) {
    res.writeHead(302, { Location: path })
    res.end()
  } else {
    window.location = path
  }
  return { redirecting: true }
}
