
var currentImg = 'img197.jpg'
var nextImg = 'img197.jpg'
var slideStatus = 'IDLE';
function onSlideProjectorClick(){
  slide_switchToNextSlide()
}

function slide_switchToNextSlide(){
  $('.slide-img').attr('src','img/img_trans.jpg');
  slideStatus='TRANS'
  window.setTimeout(slide_completeTransition,1000)
}
function slide_completeTransition(){
  $('.slide-img').attr('src','img/img197.jpg');
  slideStatus='IDLE'
}
