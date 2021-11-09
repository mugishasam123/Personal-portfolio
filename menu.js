const hamb = document.querySelector('.hamburger');

const closebtn = document.querySelector('.close');

const first = document.querySelector('#intro');

const menu = document.querySelector('.nav-menu');

const link1 = document.querySelector('.nav1');

const link2 = document.querySelector('.nav2');

const link3 = document.querySelector('.nav3');

hamb.addEventListener('click', () => {
 first.style.display = 'none';
 menu.style.display = 'flex';

});

closebtn.addEventListener('click', () => {
   first.style.display = 'flex';
   menu.style.display = 'none';
  
  });

  link1.addEventListener('click', () => {
   first.style.display = 'flex';
   menu.style.display = 'none';
  });

  link2.addEventListener('click', () => {
   first.style.display = 'flex';
   menu.style.display = 'none';

  });

  link3.addEventListener('click', () => {
   first.style.display = 'flex';
   menu.style.display = 'none';
  });
