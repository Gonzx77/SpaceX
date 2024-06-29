import { footer, changeFooter } from "./modules/footer.js";
import { menu, changeMenu } from "./modules/menu.js";
import { Rockets_menu, Rocket } from "./modules/maquetar/rockets.js";
import { Cpasules_menu, Capsule } from "./modules/maquetar/capsule.js";
import { getRockets } from "./modules/app.js";

await footer();
await Rocket(0);
await Rockets_menu();
await menu();
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
    let id = element.id;

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