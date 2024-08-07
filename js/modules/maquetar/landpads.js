import { getLandpads } from "../app.js";

let loadingdiv = document.querySelector("#loadingDiv");

export const Landpads_menu = async() =>{
    let container = document.querySelector(".navigationNumbersGrid");
    container.innerHTML = "";
    let crew = await getLandpads();
    let number = 1;

    let cont = crew.length;

    for (let i = 0; i < cont; i++){
        let plantilla = `
        <div onclick="setMenuLandpad(this)" id="${number}" class="navigationNumber">
            ${number}
        </div>`;

        number ++;
        container.innerHTML += plantilla;
    }
};

export const Landpad = async(i) =>{
    loadingdiv.style.display = "block";
    let Landpads = await getLandpads();
    let Landpad = Landpads[i];

    let full_name = Landpad.full_name;
    let details = Landpad.details;
    let region = Landpad.region;
    let status = Landpad.status;
    let namee = Landpad.name;
    let type = Landpad.type;
    let wikipedia = Landpad.wikipedia;
    let latitude = Landpad.latitude;
    let longitude = Landpad.longitude;
    let locality = Landpad.locality;
    let landing_attempts = Landpad.landing_attempts;

    let launchesCantidad = Landpad.launches.length;
    let launches = Landpad.launches;

    let mGS1Element2 = "";
    for (let i = 0; i < launchesCantidad; i++){
        let launch = launches[i];
        mGS1Element2 += `
        <div class="iG1Element">
            <div class="iG1ElementImg">
                <img class="iG1Img" src="storage/media/images/point.png">
            </div>
            <div class="iG1ElementTitle">
                <p class="iG1Title">Launch #${i + 1}</p>
                <p class="iG1Text"><span class="openBtn" onclick="openLaunchID('${launch}')">Open</span></p>
            </div>
        </div>`;
    };

    let imagesCantidad = Landpad.images.large.length;
    let images = Landpad.images.large;

    let capsuleImg = "";

    if (images[0]){
        for (let i = 0; i < imagesCantidad; i++){
            capsuleImg += `<img class="rocketImg" src="${images[i]}" referrerpolicy="no-referrer">`;
        }
    }else{
        capsuleImg = `<img class="rocketImg" src="storage/media/footer/land.png" referrerpolicy="no-referrer">`;
    }


    let mGS1 = document.querySelector("#mGS1");
    let mGS2 = document.querySelector("#mGS2");
    let mGS3 = document.querySelector("#mGS3");

    mGS1.innerHTML = "";
    mGS2.innerHTML = "";
    mGS3.innerHTML = "";

    let mGS1Element = `
    <div class="iG1Element">
        <div class="iG1ElementImg">
            <img class="iG1Img" src="storage/media/images/point.png">
        </div>
        <div class="iG1ElementTitle">
            <p class="iG1Title">Details</p>
            <br>
            <p class="iG1Text">${details}</p>
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
                <h1 id="mainTitle">${full_name}</h1>
            </div>
            <div id="infoCriclesGrid" class="mGS2Section">
                <div class="infoCirclesDiv">
                    <div class="circleDiv">
                        <p class="circeTitle">
                            <span id="circleTitleMargin">${region}</span>
                            <span class="circleInfo">${status}</span>
                        </p>
                        <svg class="circleSvg">
                            <circle class="circle" stroke-dasharray="percent_sea_level} 100" r="80" cx="50%" cy="50%" pathlength="100"></circle>
                        </svg>
                    </div>
                </div>
                <div class="infoCirclesDiv">
                    <div class="circleDiv">
                        <p class="circeTitle">
                            <span id="circleTitleMargin">Total Launches</span>
                            <span class="circleInfo">${launchesCantidad}</span>
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
                            <p class="infoFlexTitle">LANDPAD INFORMATION</p>
                            <div class="line"></div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Name</p><p class="iFEText Right">${namee}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Type</p><p class="iFEText Right">${type}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Locality</p><p class="iFEText Right">${locality}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Wikipedia</p><a class="moreInfoText2" href="${wikipedia}" target="_blanck"><p class="iFEText Right2">Open</a></p>
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
                            <p class="infoFlexTitle">POSITION INFORMATION</p>
                            <div class="line"></div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Altitude</p><p class="iFEText Right">${longitude}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Latitude</p><p class="iFEText Right">${latitude}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">landing Attempts</p><p class="iFEText Right">${landing_attempts}</p>
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