$( document ).ready(function() {
  var typewriterTitle = document.getElementById('typewriter-title');

  var typewriter = new Typewriter(typewriterTitle, {
    loop: false,
    cursor: ''
  });

  typewriter.typeString('KRABS')
    .pauseFor(300)
    .deleteChars(2)
    .pauseFor(200)
    .deleteChars(1)
    .typeString('EBScollective')
    .pauseFor(1000)
    .deleteChars(10)
    .pauseFor(200)
    .typeString('indu')
    .pauseFor(100)
    .typeString('stries')
    .start();

});
