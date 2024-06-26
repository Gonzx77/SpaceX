import { footer, changeFooter } from "./modules/footer.js";
footer();


const setFooter = async(element) => {
    let padre = element;
    let hijo = padre.children[1];
    let id = hijo.id;

    await changeFooter(id);
};
document.setFooter = setFooter;