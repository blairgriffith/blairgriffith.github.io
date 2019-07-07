var projects = document.getElementsByClassName('detail')

console.log(projects.length)

function getBox() {
    var contentlist = [
        'Virtual Pet is a console-based application that simulates a simple pet shelter. The user can add pets of two types (organic or robotic), each of which has a set of stats that correspond to its wellbeing. Users can then care for the pets in a variety of ways, affecting the stats of one or multiple pets.'
        ,
        'University Clinic Hospital is a console-based application that simulates a simple hospital staff and patient manager. The user can pay employees, choose medical employees to perform patient-related tasks, and list all employees or patients.'
        ,
        'Code Business Site is a single-page website utilizing HTML, CSS, Grid, and Flexbox to display a information for a fictional tech company.'
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

