import { getRockets } from "../app.js"



export const Rockets_menu = async() =>{
    let container = document.querySelector(".navigationNumbersGrid");
    let rockets = await getRockets();
    let number = 1;

    let cont = 0;
    if (rockets.length > 12){
        cont = 12;
    }else{
        cont = rockets.length;
    }

    for (let i = 0; i < cont; i++){
        let plantilla = `
        <div class="navigationNumber">
            ${number}
        </div>`;

        number ++;
        container.innerHTML += plantilla;
    }
};