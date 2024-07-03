import { footer, changeFooter } from "./modules/footer.js";
import { menu, changeMenu } from "./modules/menu.js";

import { Rockets_menu, Rocket, RocketID } from "./modules/maquetar/rockets.js";
import { Cpasules_menu, Capsule } from "./modules/maquetar/capsule.js";
import { Launches_menu, Launch, LaunchID } from "./modules/maquetar/launch.js";
import { Crew_menu, Crew } from "./modules/maquetar/crew.js";
import { Ships_menu, Ship } from "./modules/maquetar/ships.js";
import { Landpads_menu, Landpad } from "./modules/maquetar/landpads.js";
import { Roadster } from "./modules/maquetar/roadsters.js";
import { Starlinks_menu, Starlink } from "./modules/maquetar/starlinks.js";
import { Payloads_menu, Payload } from "./modules/maquetar/payloads.js";
import { Launchpads_menu, Launchpad } from "./modules/maquetar/launchpads.js"
import { Historys_menu, History } from "./modules/maquetar/history.js";
import { Dragons_menu, Dragon } from "./modules/maquetar/dragons.js";

await footer();
await Rocket(0);
await Rockets_menu();
await menu();

let loadingdiv = document.querySelector("#loadingDiv");
loadingdiv.style.display = "none";

let container = document.querySelector("#actualInfoText");
container.innerHTML = "Rockets";

const openRocketID = async(id) =>{
    await RocketID(id);
};
document.openRocketID = openRocketID;
const openLaunchID = async(id) =>{
    await LaunchID(id);
};
document.openLaunchID = openLaunchID;

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





const openLandpad = async(element)=>{

    await setFooter(element);
    await Landpad(0);
    await Landpads_menu();
    await menu();
    await actualInfo("Landpads");

};
document.openLandpad = openLandpad;

const setMenuLandpad = async(element) =>{
    let id = element.id;

    await Landpad(id - 1);
    await Landpads_menu();
    await changeMenu(id);
};
document.setMenuLandpad = setMenuLandpad;





const openRoadster = async(element)=>{

    await setFooter(element);
    await Roadster();
    await actualInfo("Roadster");

};
document.openRoadster = openRoadster;





const openStarlink = async(element)=>{

    await setFooter(element);
    await Starlink(0);
    await Starlinks_menu();
    await menu();
    await actualInfo("Starlinks");

};
document.openStarlink = openStarlink;

const setMenuStarlink = async(element) =>{
    let id = element.id;

    await Starlink(id - 1);
    await Starlinks_menu();
    await changeMenu(id);
};
document.setMenuStarlink = setMenuStarlink;





const openPayload = async(element)=>{

    await setFooter(element);
    await Payload(0);
    await Payloads_menu();
    await menu();
    await actualInfo("Payloads");

};
document.openPayload = openPayload;

const setMenuPayloads = async(element) =>{
    let id = element.id;

    await Payload(id - 1);
    await Payloads_menu();
    await changeMenu(id);
};
document.setMenuPayloads = setMenuPayloads;





const openLaunchpad = async(element)=>{

    await setFooter(element);
    await Launchpad(0);
    await Launchpads_menu();
    await menu();
    await actualInfo("Launchpads");

};
document.openLaunchpad = openLaunchpad;

const setMenuLaunchpad = async(element) =>{
    let id = element.id;

    await Launchpad(id - 1);
    await Launchpads_menu();
    await changeMenu(id);
};
document.setMenuLaunchpad = setMenuLaunchpad;





const openHistory = async(element)=>{

    await setFooter(element);
    await History(0);
    await Historys_menu();
    await menu();
    await actualInfo("Histories");

};
document.openHistory = openHistory;

const setMenuHistory = async(element) =>{
    let id = element.id;

    await History(id - 1);
    await Historys_menu();
    await changeMenu(id);
};
document.setMenuHistory = setMenuHistory;





const openDragon = async(element)=>{

    await setFooter(element);
    await Dragon(0);
    await Dragons_menu();
    await menu();
    await actualInfo("Dragons");

};
document.openDragon = openDragon;

const setMenuDragon = async(element) =>{
    let id = element.id;

    await Dragon(id - 1);
    await Dragons_menu();
    await changeMenu(id);
};
document.setMenuDragon = setMenuDragon;







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