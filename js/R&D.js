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

window.addEventListener('scroll',()=>{
  section.forEach((item,idx)=>{
    if(item.offsetTop <= window.scrollY){
      for(let mm of menu){
        mm.classList.remove('sHeaderActive');
      }
      menu[idx].classList.add('sHeaderActive');
    }
  })
});