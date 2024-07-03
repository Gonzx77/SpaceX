import { getStarlinks } from "../app.js";
import { getLaunch } from "../app.js";

let loadingdiv = document.querySelector("#loadingDiv");

export const Starlinks_menu = async() =>{
    let container = document.querySelector(".navigationNumbersGrid");
    container.innerHTML = "";
    let crew = await getStarlinks();
    let number = 1;

    let cont = crew.length;

    for (let i = 0; i < cont; i++){
        let plantilla = `
        <div onclick="setMenuStarlink(this)" id="${number}" class="navigationNumber">
            ${number}
        </div>`;

        number ++;
        container.innerHTML += plantilla;
    }
};

export const Starlink = async(i) =>{
    loadingdiv.style.display = "block";
    let Starlinks = await getStarlinks();
    let Starlink = Starlinks[i];

    let version = Starlink.version;
    let OBJECT_NAME = Starlink.spaceTrack.OBJECT_NAME;
    let CENTER_NAME = Starlink.spaceTrack.CENTER_NAME;
    let DECAY_DATE = Starlink.spaceTrack.DECAY_DATE;
    let launchID = Starlink.launch;

    let launch = await getLaunch(launchID);
    let launchName = launch.name;
    let rocketID = launch.rocket;
    let flight_number = launch.flight_number;

    let mGS1Element2 = "";

    let img = launch.links.flickr.original;
    let imgCantidad = launch.links.flickr.original.length;

    let capsuleImg = "";

    if (img[0]){
        for (let i = 0; i < imgCantidad; i++){
            capsuleImg += `<img class="rocketImg" src="${img[i]}" referrerpolicy="no-referrer">`;
        }
    }else{
        capsuleImg = `<img class="rocketImg" src="storage/media/footer/starlink.png" referrerpolicy="no-referrer">`;
    }


    let mGS1 = document.querySelector("#mGS1");
    let mGS2 = document.querySelector("#mGS2");
    let mGS3 = document.querySelector("#mGS3");

    mGS1.innerHTML = "";
    mGS2.innerHTML = "";
    mGS3.innerHTML = "";

    let plantilla1 = `
        <div class="mGS1Section"></div>
        <div class="mGS1Section">
            <div class="infoGalery1">

            </div>
        </div>
    `;

    let plantilla2 = `
        <div id="centerTitle" class="mGS2Section">
                <h1 id="mainTitle">${OBJECT_NAME}</h1>
            </div>
            <div id="infoCriclesGrid" class="mGS2Section">
                <div class="infoCirclesDiv">
                    <div class="circleDiv">
                        <p class="circeTitle">
                            <span id="circleTitleMargin">Center Name</span>
                            <span class="circleInfo">${CENTER_NAME}</span>
                        </p>
                        <svg class="circleSvg">
                            <circle class="circle" stroke-dasharray="101 100" r="80" cx="50%" cy="50%" pathlength="100"></circle>
                        </svg>
                    </div>
                </div>
                <div class="infoCirclesDiv">
                    <div class="circleDiv">
                        <p class="circeTitle">
                            <span id="circleTitleMargin">Date</span>
                            <span class="circleInfo">${DECAY_DATE}</span>
                        </p>
                        <svg class="circleSvg">
                            <circle class="circle" stroke-dasharray="101 100" r="80" cx="50%" cy="50%" pathlength="100"></circle>
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
                            <p class="infoFlexTitle">STARLINK INFORMATION</p>
                            <div class="line"></div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Version</p><p class="iFEText Right">${version}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Name</p><p class="iFEText Right">${OBJECT_NAME}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Launch</p><p onclick="openLaunchID('${launchID}')" class="iFEText Right2">Open</p>
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
                            <p class="infoFlexTitle">LAUNCH INFORMATION</p>
                            <div class="line"></div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Name</p><p class="iFEText Right">${launchName}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Flight Number</p><p class="iFEText Right">${flight_number}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Rocket</p><p onclick="openRocketID('${rocketID}')" class="iFEText Right2">Open</p>
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