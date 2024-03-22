const mainMenu = document.querySelectorAll('.main_menu > li');
const header = document.querySelector('header');
const initHeight = header.offsetHeight;
let tallestHeight = 0;

for(let mm of mainMenu){
	let smHeight = mm.querySelector('.depth_2').offsetHeight;	

	if(smHeight > tallestHeight){
		tallestHeight = smHeight;
	}
	let headerHeight = tallestHeight + initHeight + 50;
	
	mm.addEventListener('mouseover',()=>{
		header.style.height = `${headerHeight}px`;
	});
	mm.addEventListener('mouseout',()=>{
		header.style.height = `${initHeight}px`;
	});	
}
$(document).ready(function() {
    $('.main_menu > li').click(function(e) {
      e.preventDefault();
  
      var submenu = $(this).find('.depth_3');
      if (submenu.length) { 
        submenu.slideToggle(); 
      }
    });
  });
  