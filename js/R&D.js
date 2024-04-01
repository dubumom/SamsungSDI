/*
const $tabMenu = $('#sub_header ul li');
const $tabContent = $('.sec_content > section');
const $highLight = $('.sHeaderActive');

$tabMenu.each(function(idx) {
	$(this).click(function(e) {
		e.preventDefault();
		scrollToSection(idx);
		moveHighlight(idx);
	});
});

$(window).scroll(function() {
	const scrollTop = $(window).scrollTop();
	$tabContent.each(function(idx) {
		if ($(this).offset().top <= scrollTop) {
			moveHighlight(idx);
		}
	});
});

function scrollToSection(num) {
	const targetSection = $tabContent.eq(num);
	const targetOST = targetSection.offset().top;
	$('html, body').animate({scrollTop: targetOST}, 'slow');
}

function moveHighlight(num) {
	const newTop = $tabMenu.eq(num).position().top;
	$highLight.css({
		'top': newTop + 'px',
	});
}
*/
const $tabMenu = $('#sub_header ul li');
const $tabContent = $('.sec_content > section');
const $highLight = $('.sHeaderActive');

$tabMenu.each(function(idx) {
	$(this).click(function(e) {
		e.preventDefault();
		scrollToSection(idx);
		moveHighlight(idx);
	});
});

$(window).scroll(function() {
	const scrollTop = $(window).scrollTop();
	$tabContent.each(function(idx) {
		const sectionTop = $(this).offset().top;
		const sectionBottom = sectionTop + $(this).outerHeight();
		if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
			moveHighlight(idx);
		}
	});
});

function scrollToSection(num) {
	const targetSection = $tabContent.eq(num);
	const targetOST = targetSection.offset().top;
	$('html, body').stop().animate({scrollTop: targetOST}, 'slow');
}

function moveHighlight(num) {
	const newTop = $tabMenu.eq(num).position().top;
	$highLight.css({
		'top': newTop + 'px',
	});
}