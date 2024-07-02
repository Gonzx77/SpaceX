import { getRoadster } from "../app.js";

export const Roadster = async() =>{
    let Roadster = await getRoadster();

    let namee = Roadster.name;
    let speed_kph = Roadster.speed_kph;
    speed_kph = Math.round(speed_kph);
    let speed_percent = ((speed_kph / 20000) * 100);
    speed_percent = Math.round(speed_percent);

    let mars_distance_km = Roadster.mars_distance_km;
    mars_distance_km = Math.round(mars_distance_km);
    let mars_distance_km_percent = ((mars_distance_km / 1000000000) * 100);
    mars_distance_km_percent = Math.round(mars_distance_km_percent);

    let norad_id = Roadster.norad_id;
    let orbit_type = Roadster.orbit_type;
    let wikipedia = Roadster.wikipedia;
    let launch_date_utc = Roadster.launch_date_utc;
    let launch_mass_kg = Roadster.launch_mass_kg;


    let mGS1Element2 = "";
    for (let i = 0; i < 0; i++){
        mGS1Element2 += `
        <div class="iG1Element">
            <div class="iG1ElementImg">
                <img class="iG1Img" src="storage/media/images/point.png">
            </div>
            <div class="iG1ElementTitle">
                <p class="iG1Title">Launch #0</p>
                <p class="iG1Text"><span class="openBtn" onclick="openLaunchID('')">Open</span></p>
            </div>
        </div>`;
    };

    let imgCantidad = Roadster.flickr_images.length;
    let img = Roadster.flickr_images;
    let period_days = Roadster.period_days;
    period_days = Math.round(period_days);

    let capsuleImg = "";
    if (img[0]){
        for (let i = 0; i < imgCantidad; i++){
            capsuleImg += `<img class="rocketImg" src="${img[i]}" referrerpolicy="no-referrer">`;
        }
    }


    let mGS1 = document.querySelector("#mGS1");
    let mGS2 = document.querySelector("#mGS2");
    let mGS3 = document.querySelector("#mGS3");

    mGS1.innerHTML = "";
    mGS2.innerHTML = "";
    mGS3.innerHTML = "";

    let mGS1Element = "";

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
                            <span id="circleTitleMargin">Speed</span>
                            <span class="circleInfo">${speed_kph} Km/h</span>
                            <span class="circleInfo">${speed_percent} %</span>
                        </p>
                        <svg class="circleSvg">
                            <circle class="circle" stroke-dasharray="${speed_percent} 100" r="80" cx="50%" cy="50%" pathlength="100"></circle>
                        </svg>
                    </div>
                </div>
                <div class="infoCirclesDiv">
                    <div class="circleDiv">
                        <p class="circeTitle">
                            <span id="circleTitleMargin">Mars Distance</span>
                            <span class="circleInfo">${mars_distance_km} Km</span>
                            <span class="circleInfo">${mars_distance_km_percent} %</span>
                        </p>
                        <svg class="circleSvg">
                            <circle class="circle" stroke-dasharray="${mars_distance_km_percent} 100" r="80" cx="50%" cy="50%" pathlength="100"></circle>
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
                            <p class="infoFlexTitle">ROADSTER INFORMATION</p>
                            <div class="line"></div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Name</p><p class="iFEText Right">${namee}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">ID</p><p class="iFEText Right">${norad_id}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Orbit Type</p><p class="iFEText Right">${orbit_type}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Wikipedia</p><a href="${wikipedia}" target="_blanck"><p class="iFEText Right2">Open</a></p>
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
                                <p class="iFEText Left">Date</p><p class="iFEText Right">${launch_date_utc}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Mass</p><p class="iFEText Right">${launch_mass_kg} Kg</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Period Days</p><p class="iFEText Right">${period_days}</p>
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