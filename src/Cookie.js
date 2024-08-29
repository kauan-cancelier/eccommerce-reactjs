function getCookie(name) {
    const value = ` ${document.cookie}`
    const parts = value.split(` ${name}=`)
    if (parts.length === 2) return parts.pop().split('').shift()
}

const TOKEN_JWT = getCookie('jwt-token')
export default TOKEN_JWT