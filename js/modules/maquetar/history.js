import { getHistory } from "../app.js";

let loadingdiv = document.querySelector("#loadingDiv");
loadingdiv.style.display = "block";

export const Historys_menu = async() =>{
    let container = document.querySelector(".navigationNumbersGrid");
    container.innerHTML = "";
    let crew = await getHistory();
    let number = 1;

    let cont = crew.length;

    for (let i = 0; i < cont; i++){
        let plantilla = `
        <div onclick="setMenuHistory(this)" id="${number}" class="navigationNumber">
            ${number}
        </div>`;

        number ++;
        container.innerHTML += plantilla;
    }
};

export const History = async(i) =>{
    loadingdiv.style.display = "block";
    let Historys = await getHistory();
    let History = Historys[i];


    let title = History.title;
    let details = History.details;
    let event_date_unix = History.event_date_unix;
    let event_date_utc = History.event_date_utc;
    let article = History.links.article;


    let mGS1 = document.querySelector("#mGS1");
    let mGS2 = document.querySelector("#mGS2");
    let mGS3 = document.querySelector("#mGS3");

    mGS1.innerHTML = "";
    mGS2.innerHTML = "";
    mGS3.innerHTML = "";

    let capsuleImg = `<img class="rocketImg2" src="storage/media/footer/history.png" referrerpolicy="no-referrer">`; 

    let mGS1Element = "";
    for (let i = 0; i < 0; i++){

        mGS1Element += `
        <div class="iG1Element">
            <div class="iG1ElementImg">
                <img class="iG1Img" src="storage/media/images/point.png">
            </div>
            <div class="iG1ElementTitle">
                <p class="iG1Title">Launch #0</p>
                <p class="iG1Text">Name: 0</p>
                <br>
                <p class="iG1Text">Launch: <span onclick="openLaunchID('0')" class="openBtn">Open</span></p>
                <br>
                <p class="iG1Text">Rocket: <span onclick="openRocketID('0')" class="openBtn">Open</span></p>
            </div>
        </div>`;
    };

    let mGS1Element2 = "";
    for (let i = 0; i < 0; i++){

        mGS1Element2 += `
        <div class="iG1Element">
            <div class="iG1ElementImg">
                <img class="iG1Img" src="storage/media/images/point.png">
            </div>
            <div class="iG1ElementTitle">
                <p class="iG1Title">Role #0</p>
                <p class="iG1Text">0</p>
            </div>
        </div>`
    };


    let plantilla1 = `
        <div class="mGS1Section"></div>
        <div class="mGS1Section">
            <div class="infoGalery1">
                        ${mGS1Element}
            </div>
        </div>
        `;

    let plantilla2 = `
        <div id="centerTitle" class="mGS2Section">
                <h1 id="mainTitle">${title}</h1>
                    <div class="moreInfoDiv"><a class="moreInfoText" href="${article}" target="_blank">OPEN</a></div>
            </div>
            <div id="infoCriclesGrid" class="mGS2Section">
                
            </div>
            <div id="mGS2SGrid" class="mGS2Section">
                <div class="mGS2SGGridSection">
                    <div class="mGS2SGGSDiv">

                    </div>
                    <div class="mGS2SGGSDiv">
                        <div class="infoFlex">
                            <p class="infoFlexTitle">DETAILS</p>
                            <div class="line"></div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">${details}</p><p class="iFEText Right"></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="imagesGaleryCenter" class="mGS2SGGridSection">
                    <div class="imagesGalery">
                        ${capsuleImg}
                    </div>
                </div>
                <div class="mGS2SGGridSection">
                    <div class="mGS2SGGSDiv">

                    </div>
                    <div class="mGS2SGGSDiv">
                        <div class="infoFlex">
                            <p class="infoFlexTitle">HISTORY INFORMATION</p>
                            <div class="line"></div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Event Date UNIX</p><p class="iFEText Right">${event_date_unix}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Event Date UTC</p><p class="iFEText Right">${event_date_utc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mGS2Section">

            </div>
    `;
    let plantilla3 = `
    <div class="mGS3Section"></div>
    <div id="flexRight" class="mGS3Section">
                        ${mGS1Element2}
    </div>
    <div id="navigationNumbersCenter" class="mGS3Section">
        <div class="navigationNumbersDiv">
            <div class="navigationNumbersGrid">

            </div>
        </div>
    </div>
        `;

    mGS1.innerHTML = plantilla1;
    mGS2.innerHTML = plantilla2;
    mGS3.innerHTML = plantilla3;
    loadingdiv.style.display = "none";
};