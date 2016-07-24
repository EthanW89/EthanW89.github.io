$( document ).ready(function() {

  function makeTarget() {
    var $target = $('<div class="target"></div>');
    $('body').append($target);


// this set interval/randomizer function is based on the duckhunt exercise taking into account
// the size of the target too keep it on the page
  setInterval(function() {
    $target.css("top", Math.random() * (window.innerHeight-115));
    $target.css("left", Math.random() * (window.innerWidth-120));
  }, 1500)

var hit=0
i = 0; i<10; i++
  $target.on('click', function(){
  $target.toggleClass('spinner spinner2')
  $('.scoreBoard').text(hit += i)
})



}
makeTarget()

$('container').on('click', function(){
  window.alert("GAME OVER!");
})


});


