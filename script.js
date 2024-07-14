const humburger = document.querySelector('.humburger');
const navMenu = document.querySelector('.nav-menu');
const navlinkEls = document.querySelectorAll('.nav-link');
humburger.addEventListener ("click",() => {
  humburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click',() => {
  humburger.classList.remove('active');
  navMenu.classList.remove('active');
}));
  
navlinkEls.forEach((navlinkEl)=>{
  navlinkEl.addEventListener('click',() => {
    document.querySelector('.borders')?.classList.remove('borders');
    navlinkEl.classList.add('borders');

  })
})


