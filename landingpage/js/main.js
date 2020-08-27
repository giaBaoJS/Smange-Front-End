//scroll to top
const btnScroll = document.querySelector('#scroll-to-top');
const bannerSection = document.querySelector('.banner');
const bannerHeight = bannerSection.offsetHeight;
const body = document.body;
const scrollToContentBtn = document.querySelector('.banner__icon');
const header = document.querySelector('.header');
const headerBg = document.querySelector('.header .bg');

function scrollToTop() {
	const t = document.documentElement.scrollTop || body.scrollTop;
	if (t >= bannerHeight) {
		body.scrollTo(0, t - t);
	}
}

function showBtnScrollTop() {
	const t = document.documentElement.scrollTop || document.body.scrollTop;
	if (t < bannerHeight) {
		btnScroll.classList.remove('show');
	} else {
		btnScroll.classList.add('show');
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
	body.scrollTo(0, t - t + bannerHeight);
}

scrollToContentBtn.addEventListener('click', scrollToContent);
