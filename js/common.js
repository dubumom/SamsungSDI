const mainMenu = document.querySelectorAll('.main_menu');
const header = document.querySelector('header');
const initHeight = header.offsetHeight;
let tallestHeight = 0;

for(let mm of mainMenu){
	let smHeight = mm.querySelector('.depth_2').offsetHeight;	

	if(smHeight > tallestHeight){
		tallestHeight = smHeight;
	}
	let headerHeight = tallestHeight + initHeight + 100;
	
	mm.addEventListener('mouseover',()=>{
		header.style.height = `${headerHeight}px`;
	});
	mm.addEventListener('mouseout',()=>{
		header.style.height = `${initHeight}px`;
	});	
}
$(function(){
    $(".main_menu .depth_2").on("click", function(e) {

        let submenu = $(this).find(".depth_3");
        if (submenu.length) { 
            submenu.slideToggle();
        }
    });
});

