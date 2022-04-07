
console.log('swiper');

const $slider = document.querySelector('.slider');

let mySlider = new Swiper($slider, {
	slideClass: 'slider__slide',
	wrapperClass: 'slider__wrapper',
	loop: true,
	slidesPerView: 1,
	navigation: {
		nextEl: '.slider__btn--next',
		prevEl: '.slider__btn--prev',
	},
	// Responsive breakpoints
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 10
		},
		// when window width is >= 480px
		768: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		// when window width is >= 640px
		1024: {
			slidesPerView: 3,
			spaceBetween: 50
		}
	},

})
