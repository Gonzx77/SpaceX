import { getCrews, getLaunch, getRocket } from "../app.js";

export const Crew_menu = async() =>{
    let container = document.querySelector(".navigationNumbersGrid");
    container.innerHTML = "";
    let crew = await getCrews();
    let number = 1;

    let cont = crew.length;

    for (let i = 0; i < cont; i++){
        let plantilla = `
        <div onclick="setMenuCrew(this)" id="${number}" class="navigationNumber">
            ${number}
        </div>`;

        number ++;
        container.innerHTML += plantilla;
    }
};

export const Crew = async(i) =>{
    let crew = await getCrews();
    let member = crew[i];


    let namee = member.name;
    let agency = member.agency;
    let status = member.status;
    let launchesCantidad = member.launches.length;
    let wikipedia = member.wikipedia;
    let img = member.image;

    let launchID = member.launches[0];
    let launch = await getLaunch(launchID);

    let launchName = launch.name;

    let rocketID = launch.rocket;


    let mGS1 = document.querySelector("#mGS1");
    let mGS2 = document.querySelector("#mGS2");
    let mGS3 = document.querySelector("#mGS3");

    mGS1.innerHTML = "";
    mGS2.innerHTML = "";
    mGS3.innerHTML = "";

    let capsuleImg = `<img class="rocketImg" src="${img}" referrerpolicy="no-referrer">`; 

    let mGS1Element = `
    <div class="iG1Element">
        <div class="iG1ElementImg">
            <img class="iG1Img" src="storage/media/images/point.png">
        </div>
        <div class="iG1ElementTitle">
            <p class="iG1Title">Launch #1</p>
            <p class="iG1Text">Name: ${launchName}</p>
            <br>
            <p class="iG1Text">Launch: <span onclick="openLaunchID('${launchID}')" class="openBtn">Open</span></p>
            <br>
            <p class="iG1Text">Rocket: <span onclick="openRocketID('${rocketID}')" class="openBtn">Open</span></p>
        </div>
    </div>`;

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
                <h1 id="mainTitle">${namee}</h1>
            </div>
            <div id="infoCriclesGrid" class="mGS2Section">
                <div class="infoCirclesDiv">
                    <div class="circleDiv">
                        <p class="circeTitle">
                            <span id="circleTitleMargin">Launches</span>
                            <span class="circleInfo">${launchesCantidad}</span>
                        </p>
                        <svg class="circleSvg">
                            <circle class="circle" stroke-dasharray="percent_sea_level} 100" r="80" cx="50%" cy="50%" pathlength="100"></circle>
                        </svg>
                    </div>
                </div>
                <div class="infoCirclesDiv">
                    <div class="circleDiv">
                        <p class="circeTitle">
                            <span id="circleTitleMargin">Status</span>
                            <span class="circleInfo">${status}</span>
                        </p>
                        <svg class="circleSvg">
                            <circle class="circle" stroke-dasharray="thrust_vacuum} 100" r="80" cx="50%" cy="50%" pathlength="100"></circle>
                        </svg>
                    </div>
                </div>
            </div>
            <div id="mGS2SGrid" class="mGS2Section">
                <div class="mGS2SGGridSection">
                    <div class="mGS2SGGSDiv">

                    </div>
                    <div class="mGS2SGGSDiv">
                        <div class="infoFlex">
                            <p class="infoFlexTitle">MEMBER INFORMATION</p>
                            <div class="line"></div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Name</p><p class="iFEText Right">${namee}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Agency</p><p class="iFEText Right">${agency}</p>
                            </div>
                            <div class="infoFlexElement">
                                <a href="${wikipedia}" target="_blank"><p class="iFEText Left">Wikipedia</p><p class="iFEText Right2">Open</p></a>
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

                    </div>
                </div>
            </div>
            <div class="mGS2Section">

            </div>
    `;
    let plantilla3 = `
    <div class="mGS3Section"></div>
    <div id="flexRight" class="mGS3Section">

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
};