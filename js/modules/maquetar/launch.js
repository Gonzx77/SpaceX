import { getLaunches, getRocket, getLaunch } from "../app.js";


export const Launches_menu = async() =>{
    let container = document.querySelector(".navigationNumbersGrid");
    container.innerHTML = "";
    let launches = await getLaunches();
    let number = 1;

    let cont = launches.length;

    for (let i = 0; i < cont; i++){
        let plantilla = `
        <div onclick="setMenuLaunches(this)" id="${number}" class="navigationNumber">
            ${number}
        </div>`;

        number ++;
        container.innerHTML += plantilla;
    }
};

export const Launch = async(i) =>{
    let launches = await getLaunches();
    let launch = launches[i];
    let launchRocketID = launch.rocket;
    let rocket = await getRocket(launchRocketID);

    let failures = launch.failures;
    let failuresCantidad = launch.failures.length;

    let imageUrl = launch.links.patch.large;
    let htmlImages = "";

    if (imageUrl) {
        htmlImages = `
            <img class="rocketImg" src="${imageUrl}" referrerpolicy="no-referrer">`;
    }else{
        htmlImages = `<img class="rocketImg" src="storage/media/footer/launch.png" referrerpolicy="no-referrer">`;
    }




    let namee = launch.name;
    let details = launch.details;


    let rocketNamee = rocket.name;
    let rocketType = rocket.type;
    let rocketWikipedia = rocket.wikipedia;


    let mGS1Element = "";
    if (failures[0]){
        for (let i = 0; i < failuresCantidad; i++){
            let failure = failures[i];

            let altitude = failure.altitude;
            let time = failure.time;
            let reason = failure.reason;

            mGS1Element += `
                <div class="iG1Element">
                    <div class="iG1ElementImg">
                        <img class="iG1Img" src="storage/media/images/point.png">
                    </div>
                    <div class="iG1ElementTitle">
                        <p class="iG1Title">Failure #${i + 1}</p>
                        <p class="iG1Text">Time: ${time}</p>
                        <br>
                        <p class="iG1Text">Altitude: ${altitude}</p>
                        <br>
                        <p class="iG1Text">Reason: ${reason}</p>
                    </div>
                </div>`;
        }
    };

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
                        ${mGS1Element}
            </div>
        </div>
        `;
    mGS1.innerHTML = plantilla1;

    let plantilla2 = `
                <div id="centerTitle" class="mGS2Section">
                <h1 id="mainTitle">${namee}</h1>
            </div>
            <div id="infoCriclesGrid" class="mGS2Section">
                <div class="infoCirclesDiv">
                    <div class="circleDiv">
                        <p class="circeTitle">
                            <span id="circleTitleMargin">Total Failures</span>
                            <span class="circleInfo">${failuresCantidad}</span>
                        </p>
                        <svg class="circleSvg">
                            <circle class="circle" stroke-dasharray="101 100" r="80" cx="50%" cy="50%" pathlength="100"></circle>
                        </svg>
                    </div>
                </div>
                <div class="infoCirclesDiv">
                    <div class="circleDiv">
                        <p class="circeTitle">
                            <span id="circleTitleMargin">Launch Rocket</span>
                            <span class="circleInfo">${rocketNamee}</span>
                            <span class="circleInfo2" onclick="openRocketID('${launchRocketID}')">Open Rocket</span>
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
                            <p class="infoFlexTitle">LAUNCH INFORMATION</p>
                            <div class="line"></div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Name</p><p class="iFEText Right">${namee}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Details</p><p class="iFEText Right">${details}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="imagesGaleryCenter" class="mGS2SGGridSection">
                    <div class="imagesGalery">
                        ${htmlImages}
                    </div>
                </div>
                <div class="mGS2SGGridSection">
                    <div class="mGS2SGGSDiv">

                    </div>
                    <div class="mGS2SGGSDiv">
                        <div class="infoFlex">
                            <p class="infoFlexTitle">ROCKET INFORMATION</p>
                            <div class="line"></div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Name</p><p class="iFEText Right">${rocketNamee}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Type</p><p class="iFEText Right">${rocketType}</p>
                            </div>
                            <div class="infoFlexElement">
                                <a href="${rocketWikipedia}" target="_blank"><p class="iFEText Left">Wikipedia</p><p class="iFEText Right2">Open</p></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mGS2Section">

        </div>`;
    mGS2.innerHTML = plantilla2;

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

    mGS3.innerHTML = plantilla3;
}

export const LaunchID = async(id) =>{
    let launch = await getLaunch(id);
    let launchRocketID = launch.rocket;
    let rocket = await getRocket(launchRocketID);

    let failures = launch.failures;
    let failuresCantidad = launch.failures.length;

    let imageUrl = launch.links.patch.large;
    let htmlImages = "";

    if (imageUrl) {
        htmlImages = `
            <img class="rocketImg" src="${imageUrl}" referrerpolicy="no-referrer">`;
    }else{
        htmlImages = `<img class="rocketImg" src="storage/media/footer/launch.png" referrerpolicy="no-referrer">`;
    }




    let namee = launch.name;
    let details = launch.details;


    let rocketNamee = rocket.name;
    let rocketType = rocket.type;
    let rocketWikipedia = rocket.wikipedia;


    let mGS1Element = "";
    if (failures[0]){
        for (let i = 0; i < failuresCantidad; i++){
            let failure = failures[i];

            let altitude = failure.altitude;
            let time = failure.time;
            let reason = failure.reason;

            mGS1Element += `
                <div class="iG1Element">
                    <div class="iG1ElementImg">
                        <img class="iG1Img" src="storage/media/images/point.png">
                    </div>
                    <div class="iG1ElementTitle">
                        <p class="iG1Title">Failure #${i + 1}</p>
                        <p class="iG1Text">Time: ${time}</p>
                        <br>
                        <p class="iG1Text">Altitude: ${altitude}</p>
                        <br>
                        <p class="iG1Text">Reason: ${reason}</p>
                    </div>
                </div>`;
        }
    };

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
                        ${mGS1Element}
            </div>
        </div>
        `;
    mGS1.innerHTML = plantilla1;

    let plantilla2 = `
                <div id="centerTitle" class="mGS2Section">
                <h1 id="mainTitle">${namee}</h1>
            </div>
            <div id="infoCriclesGrid" class="mGS2Section">
                <div class="infoCirclesDiv">
                    <div class="circleDiv">
                        <p class="circeTitle">
                            <span id="circleTitleMargin">Total Failures</span>
                            <span class="circleInfo">${failuresCantidad}</span>
                        </p>
                        <svg class="circleSvg">
                            <circle class="circle" stroke-dasharray="101 100" r="80" cx="50%" cy="50%" pathlength="100"></circle>
                        </svg>
                    </div>
                </div>
                <div class="infoCirclesDiv">
                    <div class="circleDiv">
                        <p class="circeTitle">
                            <span id="circleTitleMargin">Launch Rocket</span>
                            <span class="circleInfo">${rocketNamee}</span>
                            <span class="circleInfo2" onclick="openRocketID('${launchRocketID}')">Open Rocket</span>
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
                            <p class="infoFlexTitle">LAUNCH INFORMATION</p>
                            <div class="line"></div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Name</p><p class="iFEText Right">${namee}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Details</p><p class="iFEText Right">${details}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="imagesGaleryCenter" class="mGS2SGGridSection">
                    <div class="imagesGalery">
                        ${htmlImages}
                    </div>
                </div>
                <div class="mGS2SGGridSection">
                    <div class="mGS2SGGSDiv">

                    </div>
                    <div class="mGS2SGGSDiv">
                        <div class="infoFlex">
                            <p class="infoFlexTitle">ROCKET INFORMATION</p>
                            <div class="line"></div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Name</p><p class="iFEText Right">${rocketNamee}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Type</p><p class="iFEText Right">${rocketType}</p>
                            </div>
                            <div class="infoFlexElement">
                                <a href="${rocketWikipedia}" target="_blank"><p class="iFEText Left">Wikipedia</p><p class="iFEText Right2">Open</p></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mGS2Section">

        </div>`;
    mGS2.innerHTML = plantilla2;

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

    mGS3.innerHTML = plantilla3;
}