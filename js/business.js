let wrapper = $('.slidewrapper'),
  slideContainer = wrapper.find('.slide-container'),
  slideWidth = 200,
  slideGap = 20,
  controlBtn = $('.controls button'),
  currentIdx = 1,
  slides = $('.slide'),
  totalIdx = $('.slide').length,
  currentIdxElement = $('.current-idx'),
  totalIdxElement = $('.total-idx'),
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
  // pag.text(slides.eq().index() + 1);
  // controlBtn.click((e)=>{
  //   console.log($(e.target).eq().index())
  //   let slides = slideContainer.find('.slide');
  //   e.target.matches('.next img') && slideContainer.append(slides.eq(0));
  //   pag.text($(e.target).eq(0).index() + 1);
  //   e.target.matches('.prev img') && slideContainer.prepend(slides.eq(slides.length -1)); 

  // });
  // pag.text(currentIdx);

  // // 이전/다음 버튼 클릭 이벤트 핸들러
  // controlBtn.click((e) => {
  //   let slides = slideContainer.find('.slide');
  //   if ($(e.target).hasClass('next')) {
  //     slideContainer.append(slides.eq(0));
  //     currentIdx = (currentIdx % totalIdx) + 1;
  //   }
  //   if ($(e.target).hasClass('prev')) {
  //     slideContainer.prepend(slides.eq(slides.length - 1));
  //     currentIdx = (currentIdx - 2 + totalIdx) % totalIdx + 1;
  //   }
  //   // 페이지 번호 업데이트
  //   pag.text(currentIdx);
  // });