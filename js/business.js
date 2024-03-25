const slider = $('.slider');

$(document).on('click', activate);

function activate(e){
  const items = slider.find('.item');

  e.target.matches('.next') && slider.append(items.eq(0));
  e.target.matches('.prev') && slider.prepend(items.eq(items.length -1)); 
}
