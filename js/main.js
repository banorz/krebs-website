$( document ).ready(function() {
  var typewriterTitle = document.getElementById('typewriter-title');

  var typewriter = new Typewriter(typewriterTitle, {
    loop: false,
    cursor: ''
  });

  typewriter.typeString('KRABS')
    .pauseFor(1200)
    .deleteChars(2)
    .pauseFor(200)
    .deleteChars(1)
    .typeString('EBS')
    .pauseFor(1000)
    .typeString('indu')
    .pauseFor(100)
    .typeString('stries')
    .start();

});
