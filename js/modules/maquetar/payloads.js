import { getPayloads, getLaunch } from "../app.js";

export const Payloads_menu = async() =>{
    let container = document.querySelector(".navigationNumbersGrid");
    container.innerHTML = "";
    let crew = await getPayloads();
    let number = 1;

    let cont = crew.length;

    for (let i = 0; i < cont; i++){
        let plantilla = `
        <div onclick="setMenuPayloads(this)" id="${number}" class="navigationNumber">
            ${number}
        </div>`;

        number ++;
        container.innerHTML += plantilla;
    }
};

export const Payload = async(i) =>{
    let Payloads = await getPayloads();
    let Payload = Payloads[i];

    let type = Payload.type;
    let orbit = Payload.orbit;
    let namee = Payload.name;

    let customers = Payload.customers;
    let customersCantidad = Payload.customers.length;

    let nationalities = Payload.nationalities;
    let nationalitiesCantidad = Payload.nationalities.length;

    let mass_kg = Payload.mass_kg;
    let reference_system = Payload.reference_system;
    let regime = Payload.regime;

    let launchID = Payload.launch;
    let launch = await getLaunch(launchID);
    let img = launch.links.patch.large;
    

    let mGS1 = document.querySelector("#mGS1");
    let mGS2 = document.querySelector("#mGS2");
    let mGS3 = document.querySelector("#mGS3");

    mGS1.innerHTML = "";
    mGS2.innerHTML = "";
    mGS3.innerHTML = "";

    let capsuleImg = `<img class="rocketImg" src="storage/media/footer/starlink.png" referrerpolicy="no-referrer">`; 
    if (img){
        capsuleImg = `<img class="rocketImg" src="${img}" referrerpolicy="no-referrer">`; 
    } 

    let mGS1Element = "";
    for (let i = 0; i < customersCantidad; i++){
        let customerName = customers[i];

        mGS1Element += `
        <div class="iG1Element">
            <div class="iG1ElementImg">
                <img class="iG1Img" src="storage/media/images/point.png">
            </div>
            <div class="iG1ElementTitle">
                <p class="iG1Title">Customer #${i + 1}</p>
                <p class="iG1Text">${customerName}</p>
            </div>
        </div>`;
    };

    let mGS1Element2 = "";
    for (let i = 0; i < nationalitiesCantidad; i++){
        let nationaliti = nationalities[i];

        mGS1Element2 += `
        <div class="iG1Element">
            <div class="iG1ElementImg">
                <img class="iG1Img" src="storage/media/images/point.png">
            </div>
            <div class="iG1ElementTitle">
                <p class="iG1Title">Nationaliti #${i + 1}</p>
                <p class="iG1Text">${nationaliti}</p>
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
                <h1 id="mainTitle">${type} / ${namee}</h1>
            </div>
            <div id="infoCriclesGrid" class="mGS2Section">
                <div class="infoCirclesDiv">
                    <div class="circleDiv">
                        <p class="circeTitle">
                            <span id="circleTitleMargin">Total Customers</span>
                            <span class="circleInfo">${customersCantidad}</span>
                        </p>
                        <svg class="circleSvg">
                            <circle class="circle" stroke-dasharray="percent_sea_level} 100" r="80" cx="50%" cy="50%" pathlength="100"></circle>
                        </svg>
                    </div>
                </div>
                <div class="infoCirclesDiv">
                    <div class="circleDiv">
                        <p class="circeTitle">
                            <span id="circleTitleMargin">Total Nationalities</span>
                            <span class="circleInfo">${nationalitiesCantidad}</span>
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
                            <p class="infoFlexTitle">PAYLOAD INFORMATION</p>
                            <div class="line"></div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Name</p><p class="iFEText Right">${namee}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Type</p><p class="iFEText Right">${type}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Orbit</p><p class="iFEText Right">${orbit}</p>
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
                                <p class="iFEText Left">Launch</p><p onclick="openLaunchID('${launchID}')" class="iFEText Right2">Open</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Mass</p><p class="iFEText Right">${mass_kg} Kg</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">System</p><p class="iFEText Right">${reference_system}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Regime</p><p class="iFEText Right">${regime}</p>
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