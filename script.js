$( document ).ready(function() {
//make the target
  function makeTarget() {
    var $target = $('<div class="target"></div>');
    $('body').append($target);


// this set interval/randomizer function is based on the duckhunt exercise taking into account
// the size of the target too keep it on the page

  setInterval(function() {
    $target.css("top", Math.random() * (window.innerHeight-115));
    $target.css("left", Math.random() * (window.innerWidth-120));
  }, 1500 )

//this is a click function to interact with the target, animating it recording hits
//as well as making the gunshot sound
var hit=0
var sound = $("#shot")[0];
i = 0; i<10; i++
  $target.on('click', function(){
  sound.play();
  $target.toggleClass("spinner spinner2")
  $('.scoreBoard').text(hit += i)
  //found out about code line below from here https://api.jquery.com/event.stoppropagation/
  event.stopPropagation();
})

}

//this is the start button, I made it disapear once clicked, the makeTarget function is
//inside the function, starting the game once clicked
$('button').on('click', function(){
  $('button').hide();
  makeTarget();
  event.stopPropagation();
})

//this is the gameover function, when anyting outside of the target div is clicked
//the bullet miss sound will be played, you will be prompted and the page will reload
var sound = $("#miss")[0];
$('html').on('click', function(){
  miss.play();
  var endPrompt=prompt("GAME OVER! What is your name?");
  alert("Nice Shooting, " + endPrompt + "!");
  location.reload();
})

});


