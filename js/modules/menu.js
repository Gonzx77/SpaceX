export const menu = async() =>{
    let menuNumbers = document.querySelector(".navigationNumbersGrid");
    var hijos = menuNumbers.children;

    for (let i = 0; i < hijos.length; i++) {
        if (hijos[i].tagName.toLowerCase() === 'div') {
            hijos[i].style.backgroundColor = "";
        }
    }

    hijos[0].style.backgroundColor = "#16182E";

};

export const changeMenu = async(id) =>{
    let menuNumbers = document.querySelector(".navigationNumbersGrid");
    var hijos = menuNumbers.children;

    for (let i = 0; i < hijos.length; i++) {
        if (hijos[i].id == id){
            hijos[i].style.backgroundColor = "#16182E";
        }else{
            hijos[i].style.backgroundColor = "";
        }
    }
    
};