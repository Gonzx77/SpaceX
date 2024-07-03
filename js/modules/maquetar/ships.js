import { getShips } from "../app.js";
import { getLaunch } from "../app.js";

let loadingdiv = document.querySelector("#loadingDiv");
loadingdiv.style.display = "block";

export const Ships_menu = async() =>{
    let container = document.querySelector(".navigationNumbersGrid");
    container.innerHTML = "";
    let crew = await getShips();
    let number = 1;

    let cont = crew.length;

    for (let i = 0; i < cont; i++){
        let plantilla = `
        <div onclick="setMenuShip(this)" id="${number}" class="navigationNumber">
            ${number}
        </div>`;

        number ++;
        container.innerHTML += plantilla;
    }
};

export const Ship = async(i) =>{
    loadingdiv.style.display = "block";
    let Ships = await getShips();
    let Ship = Ships[i];

    let shipImg = Ship.image;
    let namee = Ship.name;
    let type = Ship.type;
    let massKg = Ship.mass_kg;
    let legacy_id = Ship.legacy_id;
    let home_port = Ship.home_port;
    let active = Ship.active;
    let info = Ship.link;


    let launches = Ship.launches;
    let launchCantidad = Ship.launches.length;

    let roles = Ship.roles;
    let rolesCantidad = Ship.roles.length;

    let mGS1 = document.querySelector("#mGS1");
    let mGS2 = document.querySelector("#mGS2");
    let mGS3 = document.querySelector("#mGS3");

    mGS1.innerHTML = "";
    mGS2.innerHTML = "";
    mGS3.innerHTML = "";

    let capsuleImg = `<img class="rocketImg" src="storage/media/footer/ship.png" referrerpolicy="no-referrer">`; 
    if (shipImg){
        capsuleImg = `<img class="rocketImg" src="${shipImg}" referrerpolicy="no-referrer">`; 
    } 

    let mGS1Element = "";
    for (let i = 0; i < launchCantidad; i++){
        let launchID = launches[i];
        let launch = await getLaunch(launchID);

        let launchName = launch.name;
        let rocketID = launch.rocket;

        mGS1Element += `
        <div class="iG1Element">
            <div class="iG1ElementImg">
                <img class="iG1Img" src="storage/media/images/point.png">
            </div>
            <div class="iG1ElementTitle">
                <p class="iG1Title">Launch #${i + 1}</p>
                <p class="iG1Text">Name: ${launchName}</p>
                <br>
                <p class="iG1Text">Launch: <span onclick="openLaunchID('${launchID}')" class="openBtn">Open</span></p>
                <br>
                <p class="iG1Text">Rocket: <span onclick="openRocketID('${rocketID}')" class="openBtn">Open</span></p>
            </div>
        </div>`;
    };

    let mGS1Element2 = "";
    for (let i = 0; i < rolesCantidad; i++){
        let role = roles[i];

        mGS1Element2 += `
        <div class="iG1Element">
            <div class="iG1ElementImg">
                <img class="iG1Img" src="storage/media/images/point.png">
            </div>
            <div class="iG1ElementTitle">
                <p class="iG1Title">Role #${i + 1}</p>
                <p class="iG1Text">${role}</p>
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
                <h1 id="mainTitle">${type} ${namee}</h1>
            </div>
            <div id="infoCriclesGrid" class="mGS2Section">
                <div class="infoCirclesDiv">
                    <div class="circleDiv">
                        <p class="circeTitle">
                            <span id="circleTitleMargin">Total Launches</span>
                            <span class="circleInfo">${launchCantidad}</span>
                        </p>
                        <svg class="circleSvg">
                            <circle class="circle" stroke-dasharray="percent_sea_level} 100" r="80" cx="50%" cy="50%" pathlength="100"></circle>
                        </svg>
                    </div>
                </div>
                <div class="infoCirclesDiv">
                    <div class="circleDiv">
                        <p class="circeTitle">
                            <span id="circleTitleMargin">Total Roles</span>
                            <span class="circleInfo">${rolesCantidad}</span>
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
                            <p class="infoFlexTitle">SHIP INFORMATION</p>
                            <div class="line"></div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Home Port</p><p class="iFEText Right">${home_port}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Active</p><p class="iFEText Right">${active}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">More Info</p><a class="moreInfoText2" href="${info}" target="_blanck"><p class="iFEText Right2">Open</a></p>
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
                            <p class="infoFlexTitle">SHIP INFORMATION</p>
                            <div class="line"></div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Name</p><p class="iFEText Right">${namee}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Type</p><p class="iFEText Right">${type}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Mass</p><p class="iFEText Right">${massKg} KG</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Legacy ID</p><p class="iFEText Right">${legacy_id}</p>
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