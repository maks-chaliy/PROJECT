
console.log('swiper');

const $slider = document.querySelector('.slider');

let slider = new Swiper($slider, {
	slideClass: 'slider__slide',
	wrapperClass: 'slider__wrapper',
	loop: true,
	navigation: {
		nextEl: '.slider__btn-next',
		prevEl: '.slider__btn-prev',
	},
	autoplay: {
		delay: 5000,
	},
	effect: 'fade',
});

