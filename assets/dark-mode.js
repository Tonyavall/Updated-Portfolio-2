let body = document.querySelector('body')
let darkBtn = document.querySelector('.dark-mode')
let navbar = document.querySelector('.navbar')

let darkMode = true

let getCurrentMode = () => {
    darkMode = JSON.parse(localStorage.getItem('darkMode'))
    
    if (darkMode) {
        body.setAttribute('id', 'dark')
        navbar.setAttribute('id', 'dark')
    } else {
        body.setAttribute('id', 'light')
        navbar.setAttribute('id', 'light')
    }
}

getCurrentMode()

darkBtn.addEventListener('click', () => {
    if (darkMode) {
        body.setAttribute('id', 'light')
        navbar.setAttribute('id', 'light')
        darkMode = false
        JSON.stringify(localStorage.setItem('darkMode', darkMode))
    } else {
        body.setAttribute('id', 'dark')
        navbar.setAttribute('id', 'dark')
        darkMode = true
        JSON.stringify(localStorage.setItem('darkMode', darkMode))
    }
})