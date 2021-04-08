var app = document.getElementById('newsong-title');
var musictitle = config.newsong.title

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter
    .typeString(musictitle)
    .pauseFor(3500)
    .deleteAll()
    .start();