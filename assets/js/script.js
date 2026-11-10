/* 1. intercettare l'URL
2. confrontarlo con i link
4. aggiungere la classe active al link che corrisponde all'URL */

const actualURL = window.location.pathname.replace('/', '');
const links = document.querySelectorAll('nav a');

links.forEach((link) => {
	const thisHref = link.getAttribute('href');
	if (thisHref === actualURL) {
		link.classList.add('active');
	}
});
