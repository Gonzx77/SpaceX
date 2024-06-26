let line1 = document.querySelector("#fIL1");
let line2 = document.querySelector("#fIL2");
let line3 = document.querySelector("#fIL3");
let line4 = document.querySelector("#fIL4");
let line5 = document.querySelector("#fIL5");
let line6 = document.querySelector("#fIL6");
let line7 = document.querySelector("#fIL7");
let line8 = document.querySelector("#fIL8");
let line9 = document.querySelector("#fIL9");
let line10 = document.querySelector("#fIL10");
let line11 = document.querySelector("#fIL11");
let line12 = document.querySelector("#fIL12");
let line13 = document.querySelector("#fIL13");
let line14 = document.querySelector("#fIL14");

let lineList = [line1, line2, line3, line4, line5, line6, line7, line8, line9, line10, line11, line12, line13, line14];

export const footer = async() => {
    line1.style.display = "block";
    line2.style.display = "none";
    line3.style.display = "none";
    line4.style.display = "none";
    line5.style.display = "none";
    line6.style.display = "none";
    line7.style.display = "none";
    line8.style.display = "none";
    line9.style.display = "none";
    line10.style.display = "none";
    line11.style.display = "none";
    line12.style.display = "none";
    line13.style.display = "none";
    line14.style.display = "none";
};

export const changeFooter = async(id) =>{
    let element = document.querySelector(`#${id}`);
    let elementId = element.id;

    for (let i = 0; i < lineList.length; i++){
        let line = lineList[i];
        let lineId = line.id;
        if (lineId == elementId){
            line.style.display = "block";
        }else{
            line.style.display = "none";
        }
    }
};