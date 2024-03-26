const menu =  document.querySelectorAll('#sub_header ul li');
const section =  document.querySelectorAll('.sec_content > section');

for(let m of menu){
  m.addEventListener('click',(e)=>{
    e.preventDefault();
    let targetId = m.querySelector('a').getAttribute('href');
    let targetSection = document.querySelector(targetId);
    let targetOST = targetSection.offsetTop;
    window.scrollTo({left:0, top: targetOST, behavior:'smooth' });
  });
}

// window.addEventListener('scroll',()=>{
//   section.forEach((item,idx)=>{
//     if(item.offsetTop <= window.scrollY){
//       for(let mm of menu){
//         mm.classList.remove('sHeaderActive');
//       }
//       menu[idx].classList.add('sHeaderActive');
//     }
//   })
// });
// const tabMenu = document.querySelectorAll('.tab-menu li');
const tabContent = document.querySelectorAll('#tab-content > div');
const highLight = document.querySelector('.sHeaderActive');
console.log(tabContent);

menu.forEach(function(item, idx){
	item.addEventListener('click', function(e){
		e.preventDefault();
		showContent(idx);
		moveHightlight(idx);
	});
});
function showContent(num){
	section.forEach(function(item){
		item.style.display = 'none';
	});
	section[num].style.display = 'block';
}
function moveHightlight(num){
	const newLeft = menu[num].offsetLeft;
	const newWidth = menu[num].offsetWidth;
	console.log(newWidth);
	highLight.style.left = newLeft + 'px';
	highLight.style.width = newWidth + 'px';
}