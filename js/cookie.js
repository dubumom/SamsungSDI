
/* ---------- modal : cookie ---------- */

const modal = document.querySelector('.modal');
const input = modal.querySelector('input[type="checkbox"]');
const modal_close =modal.querySelector('.modal_close');


modal_close.addEventListener('click',(e)=>{
e.preventDefault();
// console.log(in5660put.checked);
if(input.checked){
//쿠키생성
setCookie('Portfolio','samsung', 1);
}else{
//쿠키삭제
delCookie('Portfolio');
}
modal.classList.add('hide');
});
function setCookie(name, val, day){
let date = new Date();
date.setDate(date.getDate()+day);
document.cookie = `${name}=${val};Expires=${date}`;
}
function delCookie(name){
let date = new Date();
date.setDate(date.getDate()-1);
document.cookie = `${name}='';Expires=${date}`;
}

function checkCookie(name){
let cookieArr = document.cookie.split(';');
let visited = false;

for(let cookie of cookieArr){
  if(cookie.indexOf(name) > -1) {
	visited = true;
  }
}
if(visited) {
  modal.classList.add('hide');
} else {
  modal.classList.remove('hide');
}
}
checkCookie('samsung');

