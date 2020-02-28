const eventsPath = "../../../pages/events.html"
const projectsPath = "../../../pages/projects.html"
const usersPath = "../../../pages/user.html"

function load(){
    document.getElementById("tabs").innerHTML=`
        <div class="tab" onclick="location.href='`+ eventsPath +`'"><a>EVENTOS</a></div>
        <div class="tab" onclick="location.href='`+ projectsPath +`'"><a>PROYECTOS</a></div>
        <div class="tab" onclick="location.href='`+ usersPath +`'"><a>USUARIOS</a></div>
        <div class="hamburguer" onclick="toggleMenu(this, submenu)">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
        </div>`;
    document.getElementById("menu").innerHTML=`
        <div id="submenu" class="submenu">
            <div class="sub-list" onclick="location.href='`+ eventsPath +`'"><a>EVENTOS</a></div>
            <div class="sub-list" onclick="location.href='`+ projectsPath +`'"><a>PROYECTOS</a></div>
            <div class="sub-list" onclick="location.href='`+ usersPath +`'"><a>USUARIOS</a></div>
        </div>`;
    document.getElementById("footer").innerHTML=`
        <div id="footer">
            <p>Contacto: cdi-l@uam.es</p>
        </div>`;
}

function toggleMenu(x, y) {
    x.classList.toggle("ham-active");
    y.classList.toggle("sub-active");
}

function toggleForms(x, y){
    document.getElementById(x).style.display="flex";
    document.getElementById(y).style.display="none";
}