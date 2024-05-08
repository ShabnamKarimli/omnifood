const bar=document.querySelector('.fa-bars');
const cross= document.querySelector('#hdcross');
const headerbar=document.querySelector('.header-bar');
const head=document.querySelector('.head');


bar.addEventListener('click',function(){
headerbar.style.display='block';
head.style.display='none';
cross.style.display='block';

})
cross.addEventListener('click',function(){
    headerbar.style.display='none';
    head.style.display='flex';
    cross.style.display='none';
    
    
})



const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;






