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

  pag.text(slides.eq().index() + 1);
  controlBtn.click((e)=>{
    console.log($(e.target).eq().index())
    let slides = slideContainer.find('.slide');
    e.target.matches('.next img') && slideContainer.append(slides.eq(0));
    pag.text($(e.target).eq(0).index() + 1);
    e.target.matches('.prev img') && slideContainer.prepend(slides.eq(slides.length -1)); 

  });
