let wrapper = $('.slidewrapper'),
  slideContainer = wrapper.find('.slide-container'),
  currentIdx = 1,
  slides = $('.slide'),
  totalIdx = $('.slide').length,
  pag = $(".pagination").find("span");
  
  console.log(slides.eq(0).index())

  pag.text(currentIdx + ' / ' + totalIdx);

  $('.next').click(function() {
    let slides = slideContainer.find('.slide');
    slideContainer.append(slides.eq(0));
    currentIdx = (currentIdx % totalIdx) + 1;
    pag.text(currentIdx + ' / ' + totalIdx);
  });

  $('.prev').click(function() {
    let slides = slideContainer.find('.slide');
    slideContainer.prepend(slides.eq(slides.length - 1));
    currentIdx = (currentIdx - 2 + totalIdx) % totalIdx + 1;
    pag.text(currentIdx + ' / ' + totalIdx);
  });
