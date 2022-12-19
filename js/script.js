const swiper = new Swiper(".swiper", {
	slidesPerView: 1,
	spaceBetween: 33,
	slidesPerGroup: 1,
	loop: true,
	loopFillGroupWithBlank: true,
	pagination: {
		el: ".swiper-pagination",
	},

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 2,
		},
		850: {
			spaceBetween: 20,
			slidesPerView: 3,
		},
		1200: {
			spaceBetween: 30,
			slidesPerView: 4,
		},
		1395: {
			spaceBetween: 30,
			slidesPerView: 5,
			slidesToShow: 1,
		}
	}
});




const menuBtn = document.querySelector('.header__burger');
const menulist = document.querySelector('.header__list');
const menuLinks = document.querySelectorAll('.header__link');

menuBtn.addEventListener('click', () => {
	menulist.classList.toggle('active');
	document.body.classList.toggle('lock');
	menuBtn.classList.toggle('active');
})

menuLinks.forEach(link => {
	link.addEventListener('click', () => {
		menulist.classList.remove('active');
		menuBtn.classList.remove('active');
		document.body.classList.remove('lock');
	});
});