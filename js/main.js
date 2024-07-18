let nav
let navMobile
let navItems
let navBurgerBtn
let navBurgerIcon
let allNavMobileItems
let allNavDesktopItems
let sections

const main = () => {
	prepareDOMElements()
	prepareDOMEvents()
}

const prepareDOMElements = () => {
	nav = document.querySelector('.nav')
	navBurgerBtn = document.querySelector('.nav__burger-btn')
	navBurgerIcon = document.querySelector('.nav__burger-icon')
	navMobile = document.querySelector('.nav__items-mobile')
	allNavMobileItems = document.querySelectorAll('.nav__item-mobile')
	allNavDesktopItems = document.querySelectorAll('.nav__item-desktop')
	sections = document.querySelectorAll('.section')
}

const prepareDOMEvents = () => {
	navBurgerBtn.addEventListener('click', handleBurgerBtnClick)
	handleNavMobileItemClick()
	checkScrollSpy()
	window.addEventListener('resize', checkScrollSpy)
}

const handleBurgerBtnClick = () => {
	burgerIconChange()
	navMobile.classList.toggle('nav__items-mobile--active')
}

const burgerIconChange = () => {
	if (navBurgerIcon.getAttribute('src') == './img/icons/menu.svg') {
		navBurgerIcon.setAttribute('src', './img/icons/x.svg')
	} else {
		navBurgerIcon.setAttribute('src', './img/icons/menu.svg')
	}
}

const handleNavMobileItemClick = () => {
	allNavMobileItems.forEach(item => {
		item.addEventListener('click', () => {
			handleBurgerBtnClick()
		})
	})
}

const activeClassReset = () => {
	allNavDesktopItems.forEach(item => {
		item.classList.remove('nav__item-desktop--active')
	})
}

const checkScrollSpy = () => {
	if (window.innerWidth >= 992) {
		window.addEventListener('scroll', scrollSpyHandle)
	} else {
		window.removeEventListener('scroll', scrollSpyHandle)
	}
}

const scrollSpyHandle = () => {
		for (let i = 0; i < sections.length; i++) {
			activeClassReset()
			if (nav.offsetTop + nav.offsetHeight <= sections[i].offsetTop) {
				allNavDesktopItems[i].classList.add('nav__item-desktop--active')
				return
			}
		}
		allNavDesktopItems[sections.length].classList.add('nav__item-desktop--active')
}

// SWIPER

const swiper = new Swiper('.swiper', {
	direction: 'horizontal',
	loop: true,
	autoplay: {
		delay: 7000,
		pauseOnMouseEnter: true,
	},

	pagination: {
		el: '.swiper-pagination',
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})

document.addEventListener('DOMContentLoaded', main)
