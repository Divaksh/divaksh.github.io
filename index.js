//TypeJS

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  // var css = document.createElement("style");
  // css.type = "text/css";
  // css.innerHTML = ".txt-rotate > .wrap { border-right: 0 solid #666 }";
  // document.body.appendChild(css);

  // Menu JS
  var hamMenu = document.querySelector('.ham-menu');

  hamMenu.addEventListener('click', function(){
    hamMenu.classList.toggle('open');
  })

};







// var hamMenu = document.querySelector('.ham-menu');
// var dropMenu = document.querySelector('.drop-menu');
// var dropMenuList = document.querySelectorAll('.drop-menu div');
// var dropMenuListText = document.querySelectorAll('.drop-menu div a');
//
// hamMenu.addEventListener('click',() => {
//   console.log('fsdgd');
//   dropMenu.classList.toggle('drop-down');
//   hamMenu.children[0].classList.toggle('top');
//   hamMenu.children[1].classList.toggle('mid');
//   hamMenu.children[2].classList.toggle('bottom');
// });
//
// dropMenuList.forEach(li => {
//
//     li.addEventListener('mouseover', (e) => {
//     li.style.backgroundImage = "linear-gradient(to right,#EBF5F8,#58A29F)";
//     li.children[0].style.color = "white";
//   });
//
//     li.addEventListener('mouseleave', (e) => {
//     li.style.backgroundImage = "linear-gradient(to right,#EBF5F8,#EBF5F8)";
//     li.children[0].style.color = "#58A29F";
//   });
//
// });
