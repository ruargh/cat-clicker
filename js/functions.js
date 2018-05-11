const cats = [
  { name: 'Scrappy', clicks: '1', img: '/img/cat1.jpg' },
  { name: 'Mr Mistoffelees', clicks: '2', img: '/img/cat2.jpg' },
  { name: 'Garfield', clicks: '3', img: '/img/cat3.jpg' },
  { name: 'Felix', clicks: '4', img: '/img/cat4.jpg' },
  { name: 'Sylvetor', clicks: '5', img: '/img/cat5.jpg' },
];

const counter = document.getElementById('counter');
function addClick(index) {
  cats[index].clicks += 1;
  counter.innerHTML = cats[index].clicks;
}

const el = document.getElementsByClassName('catList');
el[0].addEventListener('click', addClick(0), false);
el[1].addEventListener('click', addClick(1), false);
el[2].addEventListener('click', addClick(2), false);
el[3].addEventListener('click', addClick(3), false);
el[4].addEventListener('click', addClick(4), false);
