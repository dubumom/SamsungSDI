const $tabMenu = $('#sub_header ul li');
const $tabContent = $('.sec_content > section');
const $highLight = $('.sHeaderActive');
const $subheader = $('main header')

$tabMenu.click(function(e){
	e.preventDefault();
	scrollToSection($(this).index());
});

$(window).scroll(function() {
	const scrollTop = $(window).scrollTop();
	if ($(window).width() > 768) { // 윈도우 사이즈가 768px 이상인 경우에만 실행
		$tabContent.each(function(idx) {
			const sectionTop = $(this).offset().top;
			if (scrollTop >= sectionTop - 5) {
				moveHighlight(idx);
			}
		});
	}
	if(scrollTop === $subheader.offset().top){
		
	}
});

function scrollToSection(num) {
	const targetSection = $tabContent.eq(num);
	const targetOST = targetSection.offset().top;
	$('html, body').animate({scrollTop: targetOST}, 'swing');
}

function moveHighlight(num) {
	const newTop = $tabMenu.eq(num).position().top;
	const newWidth = $tabMenu.eq(num).find('a').width() + 50;

	$highLight.css({
		'top': newTop + 'px',
		'width': newWidth + 'px',
	});
}