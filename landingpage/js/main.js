const btnScroll = document.querySelector('#scroll-to-top');
const bannerSection = document.querySelector('.banner');
const bannerHeight = bannerSection.offsetHeight;
const body = document.body;
const scrollToContentBtn = document.querySelector('.banner__icon');
const header = document.querySelector('.header');
const headerBg = document.querySelector('.header .bg');

//scroll to top
function runScroll() {
	function scrollToTop() {
		const t = document.documentElement.scrollTop || body.scrollTop;
		if (t >= bannerHeight - 100) {
			body.scrollTo(0, t - t);
		}
	}

	function showBtnScrollTop() {
		const t = document.documentElement.scrollTop || document.body.scrollTop;
		if (t > bannerHeight - 100) {
			btnScroll.classList.add('show');
		} else {
			btnScroll.classList.remove('show');
		}
		if (t > 1) {
			header.classList.add('--scroll');
			headerBg.classList.add('--scroll');
		} else {
			header.classList.remove('--scroll');
			headerBg.classList.remove('--scroll');
		}
	}

	btnScroll.addEventListener('click', scrollToTop);
	body.addEventListener('scroll', showBtnScrollTop);

	function scrollToContent() {
		const t = document.documentElement.scrollTop || document.body.scrollTop;
		body.scrollTo(0, t - t + bannerHeight - 72);
	}

	scrollToContentBtn.addEventListener('click', scrollToContent);
}

//slide banner
function runSlideBanner() {
	const imgs = ['slide1.jpg', 'slide2.jpg', 'slide3.jpg'];
	const startInterval = true;
	const time = 6000;
	let slideInterval;
	let current = 0;

	function nextSlide() {
		if (current >= imgs.length - 1) {
			current = -1;
		}
		bannerSection.style.backgroundImage = `url('../../landingpage/imgs/slides/${
			imgs[current + 1]
		}')`;
		current++;
	}

	if (startInterval) {
		slideInterval = setInterval(nextSlide, time);
	}
}

runScroll();
runSlideBanner();

var mySwiper = new Swiper('.swiper-container', {
	slidesPerView: 1,
	spaceBetween: 20,

	// Optional parameters
	direction: 'horizontal',
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	breakpoints: {
		768: {
			slidesPerView: 2,
			spaceBetween: 100,
		},
	},
});

const gList = document.querySelectorAll('.percent__progress');
gList.forEach((x) => {
	var circle = new ProgressBar.Circle(x, {
		color: '#32e0c4',
		easing: 'linear',
		strokeWidth: '3',
		duration: 2000,
		text: {
			value: '0%',
		},
		step: function (state, circle) {
			var value = Math.round(circle.value() * 100);
			if (value === 0) {
				circle.setText('');
			} else {
				circle.setText(value + '%');
			}
		},
	});
	const endVl = x.dataset.pc / 100;

	circle.animate(endVl);
});
