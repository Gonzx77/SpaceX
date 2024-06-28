import { footer, changeFooter } from "./modules/footer.js";
import { menu, changeMenu } from "./modules/menu.js";
import { Rockets_menu, Rocket } from "./modules/maquetar/rockets.js";
import { Cpasules_menu, Capsule } from "./modules/maquetar/capsule.js";
import { getRockets } from "./modules/app.js";

await footer();
await Rocket(0);
await Rockets_menu();
await menu();

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
};
document.openRockets = openRockets;





const openCapsulas = async(element)=>{
    let id = element.id;

    await setFooter(element);
    await Capsule(0)
    await Cpasules_menu();
    await menu();
};
document.openCapsulas = openCapsulas;

const setMenuCapsule = async(element) =>{
    let id = element.id;

    await Capsule(id - 1);
    await Cpasules_menu();
    await changeMenu(id);
};
document.setMenuCapsule = setMenuCapsule;