const hamburgerContainer = document.querySelector('.drop-down')
const hamburgerBtn = document.querySelector('.drop-down-btn')

const hbToggle = () => {
    if (hamburgerContainer.style.display === 'flex') {
        hamburgerContainer.style.setProperty('display', 'none')
    } else {
        hamburgerContainer.style.setProperty('display', 'flex')
    }
}

document.addEventListener('click', hbToggle)