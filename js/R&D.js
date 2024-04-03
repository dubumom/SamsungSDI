const $tabMenu = $('#sub_header ul li');
const $tabContent = $('.sec_content > section');
const $highLight = $('.sHeaderActive');
const $subheader = $('main header');

$tabMenu.click(function(e){
	e.preventDefault();
	scrollToSection($(this).index());
});
$(window).scroll(function() {
	const scrollTop = $(window).scrollTop();
	if ($(window).width() > 768) {
		$tabContent.each(function(idx) {
			const sectionTop = $(this).offset().top - 200;
			if (scrollTop >= sectionTop - 5) {
				moveHighlight(idx);
			}
		});
	} else {
		$tabContent.each(function(idx) {
			const sectionTop = $(this).offset().top - 200;
			if (scrollTop >= sectionTop - 5) {
				$tabMenu.removeClass('active');
				$tabMenu.eq(idx).addClass('active');
			}
		});
	}
});

if($(window).width()<=768){
	if ($(window).scrollTop() <= 430) {
		$subheader.addClass('rndActive');
	} else {
		$subheader.removeClass('rndActive');
	}
}
console.log($(window).scrollTop());
function scrollToSection(num) {
	const targetSection = $tabContent.eq(num) -1;
	const targetOST = targetSection.offset().top;
	$('html, body').animate({scrollTop: targetOST});
}
function moveHighlight(num) {
	const newTop = $tabMenu.eq(num).position().top;
	const newWidth = $tabMenu.eq(num).find('a').width() + 50;
	$highLight.css({
		'top': newTop + 'px',
		'width': newWidth + 'px',
	});
}