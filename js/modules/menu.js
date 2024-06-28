export const menu = async() =>{
    let menuNumbers = document.querySelector(".navigationNumbersGrid");
    let hijos = menuNumbers.children;

    for (let i = 0; i < hijos.length; i++) {
        if (hijos[i].tagName.toLowerCase() === 'div') {
            hijos[i].style.backgroundColor = "";
        }
    }

    hijos[0].style.backgroundColor = "#c300ff";

};

export const changeMenu = async(id) =>{
    let menuNumbers = document.querySelector(".navigationNumbersGrid");
    let hijos = menuNumbers.children;

    for (let i = 0; i < hijos.length; i++) {
        if (hijos[i].id == id){
            hijos[i].style.backgroundColor = "#c300ff";
        }else{
            hijos[i].style.backgroundColor = "";
        }
    }
    
};