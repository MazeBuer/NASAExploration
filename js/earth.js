const panels = document.querySelectorAll('.panel')

function toggleOpen() {
    this.classList.toggle('open')
}

//need to add if statement because there are mulitple transition events (text increase and flex-grow - panel increaese). So if property includes flex we will toggle it

function toggleActive(e) {
    if(e.propertyName.includes('flex')) {
        this.classList.toggle('open-active')
    }
}

panels.forEach(panel => panel.addEventListener('click',toggleOpen)) //to expand each panel on click
panels.forEach(panel => panel.addEventListener('transitionend',toggleActive))

































