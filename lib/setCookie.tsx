const setCookie = (name, value, expiresIn = 24 * 60 * 60 * 1000) => {
  let expires = ""
  const date = new Date()
  date.setTime(date.getTime() + expiresIn)
  expires = `; expires=${date.toUTCString()}`
  document.cookie = `${name}=${value || ""}${expires}; path=/`
}

export default setCookie
