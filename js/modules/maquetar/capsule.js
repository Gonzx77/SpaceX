import { getCapsules } from "../app.js";
import { getLaunch } from "../app.js";

export const Cpasules_menu = async() =>{
    let container = document.querySelector(".navigationNumbersGrid");
    container.innerHTML = "";
    let capsules = await getCapsules();
    let number = 1;

    let cont = capsules.length;

    for (let i = 0; i < cont; i++){
        let plantilla = `
        <div onclick="setMenuCapsule(this)" id="${number}" class="navigationNumber">
            ${number}
        </div>`;

        number ++;
        container.innerHTML += plantilla;
    }
};

export const Capsule = async(i) =>{
    let capsules = await getCapsules();
    let capsule = capsules[i];

    let mGS1 = document.querySelector("#mGS1");
    let mGS2 = document.querySelector("#mGS2");
    let mGS3 = document.querySelector("#mGS3");

    mGS1.innerHTML = "";
    mGS2.innerHTML = "";
    mGS3.innerHTML = "";

    let type = capsule.type;
    let serial = capsule.serial;
    let status = capsule.status;
    let water_landings = capsule.water_landings;
    let land_landings = capsule.land_landings;
    let launches = capsule.launches;

    let launchesCantidad = 0;
    let capsuleImg = "";
    if (launches[0]){
        launchesCantidad = launches.length;
        for (let i = 0; i < launchesCantidad; i++){
            let launch = await getLaunch(launches[i]);
            let img = launch.links.patch.large;
            capsuleImg += `
            <img class="rocketImg" src="${img}" referrerpolicy="no-referrer">`; 
        };
    }else{
        capsuleImg = `<img class="rocketImg" src="storage/media/footer/launch.png" referrerpolicy="no-referrer">`; 
    }

    let plantilla1 = `
        <div id="centerTitle" class="mGS2Section">
                <h1 id="mainTitle">${type} ${serial}</h1>
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
                            <span id="circleTitleMargin">Reuse count</span>
                            <span class="circleInfo">0</span>
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
                            <p class="infoFlexTitle">LANDINGS INFORMATION</p>
                            <div class="line"></div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Water</p><p class="iFEText Right">${water_landings}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Land</p><p class="iFEText Right">${land_landings}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Launches</p><p class="iFEText Right">${launchesCantidad}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="imagesGaleryCenter" class="mGS2SGGridSection">
                    <div class="imagesGalery">
                        ${capsuleImg}
                    </div>
                    <p id="allLaunches">All Launches</p>
                </div>
                <div class="mGS2SGGridSection">
                    <div class="mGS2SGGSDiv">

                    </div>
                    <div class="mGS2SGGSDiv">
                        <div class="infoFlex">
                            <p class="infoFlexTitle">CAPSULE INFORMATION</p>
                            <div class="line"></div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Type</p><p class="iFEText Right">${type}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Serial</p><p class="iFEText Right">${serial}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Estatus</p><p class="iFEText Right">${status}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mGS2Section">

            </div>
    `;
    let plantilla2 = `
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

    mGS2.innerHTML = plantilla1;
    mGS3.innerHTML = plantilla2;
};