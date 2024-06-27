import { footer, changeFooter } from "./modules/footer.js";
import { Rockets_menu, Rocket } from "./modules/maquetar/rockets.js";
import { getRockets } from "./modules/app.js";

await footer();
await Rocket();
await Rockets_menu();

const setFooter = async(element) => {
    let padre = element;
    let hijo = padre.children[1];
    let id = hijo.id;

    await changeFooter(id);
};
document.setFooter = setFooter;