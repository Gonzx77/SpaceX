import { footer, changeFooter } from "./modules/footer.js";
import { menu, changeMenu } from "./modules/menu.js";

import { Rockets_menu, Rocket, RocketID } from "./modules/maquetar/rockets.js";
import { Cpasules_menu, Capsule } from "./modules/maquetar/capsule.js";
import { Launches_menu, Launch, LaunchID } from "./modules/maquetar/launch.js";
import { Crew_menu, Crew } from "./modules/maquetar/crew.js";
import { Ships_menu, Ship } from "./modules/maquetar/ships.js";

await footer();
await Rocket(0);
await Rockets_menu();
await menu();

const openRocketID = async(id) =>{
    await RocketID(id);
};
document.openRocketID = openRocketID;
const openLaunchID = async(id) =>{
    await LaunchID(id);
};
document.openLaunchID = openLaunchID;

let container = document.querySelector("#actualInfoText");
container.innerHTML = "Rockets";

const actualInfo = async(text) =>{
    let container = document.querySelector("#actualInfoText");
    container.innerHTML = text;
};

const setFooter = async(element) => {
    let padre = element;
    let hijo = padre.children[1];
    let id = hijo.id;

    await changeFooter(id);
};

const setMenuRocket = async(element) =>{
    let id = element.id;

    await Rocket(id - 1);
    await Rockets_menu();
    await changeMenu(id);
};
document.setMenuRocket = setMenuRocket;

const openRockets = async(element) =>{

    await setFooter(element);
    await Rocket(0);
    await Rockets_menu();
    await menu();
    await actualInfo("Rockets");
};
document.openRockets = openRockets;





const openCapsulas = async(element)=>{

    await setFooter(element);
    await Capsule(0)
    await Cpasules_menu();
    await menu();
    await actualInfo("Capsules");
};
document.openCapsulas = openCapsulas;

const setMenuCapsule = async(element) =>{
    let id = element.id;

    await Capsule(id - 1);
    await Cpasules_menu();
    await changeMenu(id);
};
document.setMenuCapsule = setMenuCapsule;





const openLaunches = async(element)=>{

    await setFooter(element);
    await Launch(0);
    await Launches_menu();
    await menu();
    await actualInfo("Launches");

};
document.openLaunches = openLaunches;

const setMenuLaunches = async(element) =>{
    let id = element.id;

    await Launch(id - 1);
    await Launches_menu();
    await changeMenu(id);
};
document.setMenuLaunches = setMenuLaunches;





const openCrew = async(element)=>{

    await setFooter(element);
    await Crew(0);
    await Crew_menu();
    await menu();
    await actualInfo("Crew");

};
document.openCrew = openCrew;

const setMenuCrew = async(element) =>{
    let id = element.id;

    await Crew(id - 1);
    await Crew_menu();
    await changeMenu(id);
};
document.setMenuCrew = setMenuCrew;





const openShip = async(element)=>{

    await setFooter(element);
    await Ship(0);
    await Ships_menu();
    await menu();
    await actualInfo("Ships");

};
document.openShip = openShip;

const setMenuShip = async(element) =>{
    let id = element.id;

    await Ship(id - 1);
    await Ships_menu();
    await changeMenu(id);
};
document.setMenuShip = setMenuShip;







document.addEventListener("mousemove", function(event) {
    var logo = document.querySelector("#backgroundImd");
    let galaxyImg = document.querySelector("#galaxyImg");
    let infinite = document.querySelector("#infinite");

    var mouseX = event.clientX;
    var mouseY = event.clientY;

    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    var centerX = windowWidth / 2;
    var centerY = windowHeight / 2;

    var distanceFromCenterX = centerX - mouseX;
    var distanceFromCenterY = centerY - mouseY;

    var maxOffset = 10;
    var offsetX = (distanceFromCenterX / centerX) * maxOffset;
    var offsetY = (distanceFromCenterY / centerY) * maxOffset;
    var offsetX2 = offsetX - (offsetX * 2);
    var offsetY2 = offsetY - (offsetY * 2);

    logo.style.transform = "translate(" + offsetX + "px, " + offsetY + "px)";
    galaxyImg.style.transform = "translate(" + offsetX2 + "px, " + offsetY2 + "px)";
    infinite.style.transform = "translate(" + offsetX2 + "px, " + offsetY2 + "px) rotate(20deg)";
});