import { getLaunchpads, getLaunch, getRocket } from "../app.js";

export const Launchpads_menu = async() =>{
    let container = document.querySelector(".navigationNumbersGrid");
    container.innerHTML = "";
    let crew = await getLaunchpads();
    let number = 1;

    let cont = crew.length;

    for (let i = 0; i < cont; i++){
        let plantilla = `
        <div onclick="setMenuLaunchpad(this)" id="${number}" class="navigationNumber">
            ${number}
        </div>`;

        number ++;
        container.innerHTML += plantilla;
    }
};

export const Launchpad = async(i) =>{
    let Launchpads = await getLaunchpads();
    let Launchpad = Launchpads[i];



    let namee = Launchpad.name;
    let locality = Launchpad.locality;
    let region = Launchpad.region;
    let details = Launchpad.details;


    let mGS1 = document.querySelector("#mGS1");
    let mGS2 = document.querySelector("#mGS2");
    let mGS3 = document.querySelector("#mGS3");

    mGS1.innerHTML = "";
    mGS2.innerHTML = "";
    mGS3.innerHTML = "";

    let images = Launchpad.images.large;
    let imagesCantidad = Launchpad.images.large.length;

    let capsuleImg = "";
    if (images[0]){
        for (let i = 0; i < imagesCantidad; i++){
            capsuleImg += `<img class="rocketImg" src="${images[i]}" referrerpolicy="no-referrer">`; 
        } 
    }else{
        capsuleImg = `<img class="rocketImg" src="storage/media/footer/launchpad.png" referrerpolicy="no-referrer">`; 
    }

    let launches = Launchpad.launches;
    let launchesCantidad = Launchpad.launches.length;

    let mGS1Element = "";
    for (let i = 0; i < launchesCantidad; i++){
        let launchID = launches[i];
        let launch = await getLaunch(launchID);
        let launchName = launch.name;

        mGS1Element += `
        <div class="iG1Element">
            <div class="iG1ElementImg">
                <img class="iG1Img" src="storage/media/images/point.png">
            </div>
            <div class="iG1ElementTitle">
                <p class="iG1Title">Launch #${i + 1}</p>
                <p class="iG1Text">Name: ${launchName}</p>
                <br>
                <p class="iG1Text"><span onclick="openLaunchID('${launchID}')" class="openBtn">Open</span></p>
            </div>
        </div>`;
    };

    let rockets = Launchpad.rockets;
    let rocketsCantidad = Launchpad.rockets.length;

    let mGS1Element2 = "";
    for (let i = 0; i < rocketsCantidad; i++){
        let rocketID = rockets[i];
        let rocket = await getRocket(rocketID);
        let rocketName = rocket.name;

        mGS1Element2 += `
        <div class="iG1Element">
            <div class="iG1ElementImg">
                <img class="iG1Img" src="storage/media/images/point.png">
            </div>
            <div class="iG1ElementTitle">
                <p class="iG1Title">Rocket #${i + 1}</p>
                <p class="iG1Text">Name: ${rocketName}</p>
                <br>
                <p class="iG1Text"><span onclick="openRocketID('${rocketID}')" class="openBtn">Open</span></p>
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
                <h1 id="mainTitle">${namee}</h1>
            </div>
            <div id="infoCriclesGrid" class="mGS2Section">
                <div class="infoCirclesDiv">
                    <div class="circleDiv">
                        <p class="circeTitle">
                            <span id="circleTitleMargin">Total Launches</span>
                            <span class="circleInfo">${launchesCantidad}</span>
                        </p>
                        <svg class="circleSvg">
                            <circle class="circle" stroke-dasharray="101 100" r="80" cx="50%" cy="50%" pathlength="100"></circle>
                        </svg>
                    </div>
                </div>
                <div class="infoCirclesDiv">
                    <div class="circleDiv">
                        <p class="circeTitle">
                            <span id="circleTitleMargin">Total Rockets</span>
                            <span class="circleInfo">${rocketsCantidad}</span>
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
                            <p class="infoFlexTitle">LAUNCHPAD INFORMATION</p>
                            <div class="line"></div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Name</p><p class="iFEText Right">${namee}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Region</p><p class="iFEText Right">${region}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Locality</p><p class="iFEText Right">${locality}</p>
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
                            <p class="infoFlexTitle">LAUNCHPAD DETAILS</p>
                            <div class="line"></div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">${details}</p>
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
};