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
