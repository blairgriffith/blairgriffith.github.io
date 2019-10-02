var projects = document.getElementsByClassName('detail')

console.log(projects.length)

function getBox() {
    var contentlist = [
        'This blogging website is designed around gardening. Users can select a category of plant to write a post about, and then write, edit, view, and delete posts.'
        ,
        'HeroMatch is an SPA web application designed to help new players choose characters in online video games that suit their experience and interests. Final project for WeCanCodeIt.'
        ,
        'Drip is a fictional coffee shop with a heavy metal theme. This application helps baristas at Drip manage the store\'s music collection.'
        ]
    var boxbg = document.getElementById('boxbg');
    var box = document.getElementById('box');
    var content = document.getElementById('content');
    return { content, boxbg, contentlist };
}


projects[0].addEventListener('click', function(){
    var { content, boxbg, contentlist } = getBox();
    content.innerText = contentlist[0]
    boxbg.style.display = 'block';
})

projects[1].addEventListener('click', function(){
    var {content, boxbg, contentlist } = getBox();
    content.innerText = contentlist[1]
    boxbg.style.display = 'block';
})
projects[2].addEventListener('click', function(){
    var {content, boxbg, contentlist } = getBox();
    content.innerText = contentlist[2]
    boxbg.style.display = 'block';
})

var button = document.querySelector('span')

button.onclick = function(event) {
    if (event.target == button) {
    boxbg.style.display = 'none';
    }
}

window.onclick = function(event) {
    if (event.target == boxbg) {
      boxbg.style.display = "none";
    }
}

