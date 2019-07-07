var projects = document.getElementsByClassName('detail')

function getBox() {
    var boxbg = document.getElementById('boxbg');
    var box = document.getElementById('box');
    var content = box.querySelector('p');
    return { content, boxbg };
}

projects[0].addEventListener('click', function(){
    var { content, boxbg } = getBox();
    content.innerText = 'Virtual Pet is a console-based application that simulates a simple pet shelter. The user can add pets of two types (organic or robotic), each of which has a set of stats that correspond to its wellbeing. Users can then care for the pets in a variety of ways, affecting the stats of one or multiple pets.'

    boxbg.style.display = 'block';
})

projects[1].addEventListener('click', function(){
    var {content, boxbg} = getBox();
    content.innerText = 'University Clinic Hospital is a console-based application that simulates a simple hospital staff and patient manager. The user can pay employees, choose medical employees to perform patient-related tasks, and list all employees or patients.'

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

