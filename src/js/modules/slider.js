
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


const $sliderPopular = document.querySelector('.slider-popular');

let sliderPopular = new Swiper($sliderPopular, {
	slideClass: 'slider-popular__slide',
	wrapperClass: 'slider-popular__wrapper',
	loop: true,
	slidesPerView: 3,
	spaceBetween: 10,
});
