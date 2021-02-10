let tabBody = document.querySelectorAll('.tab-body');
let tab = document.querySelectorAll('.tab');

init(1);

tab.forEach(function (elem) {
   elem.onclick = showTabs;
});

function init(quantity) {
   for (let i = quantity; i< tabBody.length; i++) {
      tabBody[i].style.display = 'none';
   }
}

function showTabs() {
   let data = this.getAttribute('data');
   init(0);
   // document.querySelector('.tab-body[data="'+data+'"]').style.display = 'block'; // ECMAScript 5 syntax
   document.querySelector(`.tab-body[data="${data}"]`).style.display = 'block';
   for (i = 0; i < tab.length; i++) {
      tab[i].classList.remove('active');
   }
   this.classList.add('active');
}