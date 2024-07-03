import { getDragons } from "../app.js";

let loadingdiv = document.querySelector("#loadingDiv");
loadingdiv.style.display = "block";

export const Dragons_menu = async() =>{
    let container = document.querySelector(".navigationNumbersGrid");
    container.innerHTML = "";
    let crew = await getDragons();
    let number = 1;

    let cont = crew.length;

    for (let i = 0; i < cont; i++){
        let plantilla = `
        <div onclick="setMenuDragon(this)" id="${number}" class="navigationNumber">
            ${number}
        </div>`;

        number ++;
        container.innerHTML += plantilla;
    }
};

export const Dragon = async(i) =>{
    loadingdiv.style.display = "block";
    let Dragons = await getDragons();
    let Dragon = Dragons[i];

    let namee = Dragon.name;
    let type = Dragon.type;
    let active = Dragon.active;
    let dry_mass_kg = Dragon.dry_mass_kg;
    let dry_mass_lb = Dragon.dry_mass_lb;
    let orbit_duration_yr = Dragon.orbit_duration_yr;
    let wikipedia = Dragon.wikipedia;
    let launch_payload_mass_kg = Dragon.launch_payload_mass.kg;
    let launch_payload_mass_lb = Dragon.launch_payload_mass.lb;
    let launch_payload_vol_feet = Dragon.launch_payload_vol.cubic_feet;
    let launch_payload_vol_meters = Dragon.launch_payload_vol.cubic_meters;
    let crew_capacity = Dragon.crew_capacity;
    let first_flight = Dragon.first_flight;
    let description = Dragon.description;

    let dev_partner = Dragon.heat_shield.dev_partner;
    let material = Dragon.heat_shield.material;
    let size_meters = Dragon.heat_shield.size_meters;
    let temp_degrees = Dragon.heat_shield.temp_degrees;

    let thrusters = Dragon.thrusters;
    let thrustersCantidad = Dragon.thrusters.length;

    let mGS1 = document.querySelector("#mGS1");
    let mGS2 = document.querySelector("#mGS2");
    let mGS3 = document.querySelector("#mGS3");

    mGS1.innerHTML = "";
    mGS2.innerHTML = "";
    mGS3.innerHTML = "";

    let images = Dragon.flickr_images;
    let imagesCantidad = Dragon.flickr_images.length;
    let capsuleImg = "";
    if (images[0]){
        for (let i = 0; i < imagesCantidad; i++){
            capsuleImg = `<img class="rocketImg" src="${images[i]}" referrerpolicy="no-referrer">`; 
        } 
    }else{
        capsuleImg = `<img class="rocketImg" src="storage/media/footer/dragon.png" referrerpolicy="no-referrer">`; 
    }

    let mGS1Element = "";
    for (let i = 0; i < thrustersCantidad; i++){
        let thruster = thrusters[i];
        let type = thruster.type;
        let amount = thruster.amount;
        let kN = thruster.thrust.kN;

        mGS1Element += `
        <div class="iG1Element">
            <div class="iG1ElementImg">
                <img class="iG1Img" src="storage/media/images/point.png">
            </div>
            <div class="iG1ElementTitle">
                <p class="iG1Title">Thruster #${i + 1}</p>
                <p class="iG1Text">Type: ${type}<p>
                <br>
                <p class="iG1Text">Amount: ${amount}<p>
                <br>
                <p class="iG1Text">kN: ${kN}<p>
                <br>
                <p class="iG1Text">Amount: ${amount}<p>
            </div>
        </div>`;
    };

    let mGS1Element2 = `
        <div class="iG1Element">
            <div class="iG1ElementImg">
                <img class="iG1Img" src="storage/media/images/point.png">
            </div>
            <div class="iG1ElementTitle">
                <p class="iG1Title">Crew Capacity</p>
                <p class="iG1Text">${crew_capacity}</p>
            </div>
        </div>
        <div class="iG1Element">
            <div class="iG1ElementImg">
                <img class="iG1Img" src="storage/media/images/point.png">
            </div>
            <div class="iG1ElementTitle">
                <p class="iG1Title">First Flight</p>
                <p class="iG1Text">${first_flight}</p>
            </div>
        </div>
        <div class="iG1Element">
            <div class="iG1ElementImg">
                <img class="iG1Img" src="storage/media/images/point.png">
            </div>
            <div class="iG1ElementTitle">
                <p class="iG1Title">Heat Shield</p>
                <p class="iG1Text">Dev Partner: ${dev_partner}</p>
                <p class="iG1Text">Material: ${material}</p>
                <p class="iG1Text">Size (M): ${size_meters}</p>
                <p class="iG1Text">Temp Degrees: ${temp_degrees}</p>
            </div>
        </div>
        <div class="iG1Element">
            <div class="iG1ElementImg">
                <img class="iG1Img" src="storage/media/images/point.png">
            </div>
            <div class="iG1ElementTitle">
                <p class="iG1Title">Description</p>
                <p class="iG1Text">${description}</p>
            </div>
        </div>
        `


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
                            <span id="circleTitleMargin">Total Thrusters</span>
                            <span class="circleInfo">${thrustersCantidad}</span>
                        </p>
                        <svg class="circleSvg">
                            <circle class="circle" stroke-dasharray="percent_sea_level} 100" r="80" cx="50%" cy="50%" pathlength="100"></circle>
                        </svg>
                    </div>
                </div>
                <div class="infoCirclesDiv">
                    <div class="circleDiv">
                        <p class="circeTitle">
                            <span id="circleTitleMargin">Active</span>
                            <span class="circleInfo">${active}</span>
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
                            <p class="infoFlexTitle">DRAGON INFORMATION</p>
                            <div class="line"></div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Type</p><p class="iFEText Right">${type}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Mass (KG)</p><p class="iFEText Right">${dry_mass_kg}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Mass (LB)</p><p class="iFEText Right">${dry_mass_lb}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Orbit Duration</p><p class="iFEText Right">${orbit_duration_yr}</p>
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
                            <p class="infoFlexTitle">LAUNCH PAYLOAD INFORMATION</p>
                            <div class="line"></div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Mass (KG)</p><p class="iFEText Right">${launch_payload_mass_kg}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Mass (LB)</p><p class="iFEText Right">${launch_payload_mass_lb}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Vol (FEETS)</p><p class="iFEText Right">${launch_payload_vol_feet}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Vol (METERS)</p><p class="iFEText Right">${launch_payload_vol_meters}</p>
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