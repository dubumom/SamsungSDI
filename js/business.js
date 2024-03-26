let wrapper = $('.slidewrapper'),
  slideContainer = wrapper.find('.slide-container'),
  slideWidth = 200,
  slideGap = 20,
  controlBtn = $('.controls button'),
  currentIdx = 1;
  slides = $('.slide');
  totalIdx = $('.slide').length;
  currentIdxElement = $('.current-idx');
  totalIdxElement = $('.total-idx');

  



  
  controlBtn.click((e)=>{
    let slides = slideContainer.find('.slide');
    e.target.matches('.next img') && slideContainer.append(slides.eq(0));
    
    e.target.matches('.prev img') && slideContainer.prepend(slides.eq(slides.length -1)); 

  })
