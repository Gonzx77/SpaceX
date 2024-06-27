import { getRockets } from "../app.js"

export const Rockets_menu = async() =>{
    let container = document.querySelector(".navigationNumbersGrid");
    let rockets = await getRockets();
    let number = 1;

    let cont = 0;
    if (rockets.length > 12){
        cont = 12;
    }else{
        cont = rockets.length;
    }

    for (let i = 0; i < cont; i++){
        let plantilla = `
        <div class="navigationNumber">
            ${number}
        </div>`;

        number ++;
        container.innerHTML += plantilla;
    }
};

export const Rocket = async() =>{
    let rockets = await getRockets();
    let rocket = rockets[0];
    console.log(rocket);

    let infoGalery1 = document.querySelector(".infoGalery1");
    let mGS2 = document.querySelector("#mGS2");
    let mGS3 = document.querySelector("#mGS3");

    let country = rocket.country;
    let description = rocket.description;
    let cost_per_launch = rocket.cost_per_launch;
    let first_flight = rocket.first_flight;
    let wikipedia = rocket.wikipedia;
    let namee = rocket.name;
    let type = rocket.type;
    let active = rocket.active;
    let stages = rocket.stages;
    let landing_legs = rocket.landing_legs.number;
    let material = rocket.landing_legs.material;
    let engines_type = rocket.engines.type;
    let engine_loss_max = rocket.engines.engine_loss_max;
    let layout = rocket.engines.layout;
    let enginesNumber = rocket.engines.number;


    let thrust_sea_level_kN = rocket.engines.thrust_sea_level.kN;
    let thrust_sea_level_lbf = rocket.engines.thrust_sea_level.lbf;
    let thrust_vacuum_kN = rocket.engines.thrust_vacuum.kN;
    let thrust_vacuum_lbf = rocket.engines.thrust_vacuum.lbf;


    let propellants = rocket.engines;
    let propellansContador = 0;
    let keys = [];
    let htmlKeys = "";
    for (let key in propellants){
        if (key.startsWith("propellant")){
            let content = rocket.engines[key];
            propellansContador++;
            keys.push(key);
            htmlKeys += `
            <div class="infoFlexElement">
                <p class="iFEText Left">Stage ${propellansContador} fuel</p><p class="iFEText Right">${content}</p>
            </div>`; 
        }
    };

    let flickr_images = rocket.flickr_images;
    let flickr_imagesContador = flickr_images.length;
    let htmlImages = "";
    for (let i = 0; i < flickr_imagesContador; i++){
        let img = flickr_images[i];
        htmlImages += `
        <img class="rocketImg" src="${img}" referrerpolicy="no-referrer">`; 
    };


    let plantilla1 = `
    <div class="iG1Element">
                    <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/media/images/point.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">${country}</p>
                            <p class="iG1Text">${description}</p>
                        </div>
                    </div>
                    <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/media/images/point.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">The estimated cost per rocket launch</p>
                            <p class="iG1Text">${cost_per_launch}</p>
                        </div>
                    </div>
                    <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/media/images/point.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">The date of the first flight of the rocket</p>
                            <p class="iG1Text">${first_flight}</p>
                        </div>
                    </div>
                    <div class="iG1Element">
                        <div class="iG1ElementImg">
                            <img class="iG1Img" src="storage/media/images/point.png">
                        </div>
                        <div class="iG1ElementTitle">
                            <p class="iG1Title">Read more about the rocket</p>
                            <a href="${wikipedia}" target="_blank" class="iG1Text">Wikipedia</a>
                        </div>
                    </div>`;

    infoGalery1.innerHTML = plantilla1;

    let plantilla2 = `
                <div id="centerTitle" class="mGS2Section">
                <h1 id="mainTitle">${namee}</h1>
            </div>
            <div id="infoCriclesGrid" class="mGS2Section">
                <div class="infoCirclesDiv">
                    <div class="circleDiv">
                        <p class="circeTitle">
                            <span id="circleTitleMargin">Atmospheric acceleration</span>
                            <span class="circleInfo">0 %</span>
                            <span class="circleInfo">${thrust_sea_level_kN} kN</span>
                            <span class="circleInfo">${thrust_sea_level_lbf} Lbf</span>
                        </p>
                        <svg class="circleSvg">
                            <circle class="circle" r="80" cx="50%" cy="50%" pathlength="100"></circle>
                        </svg>
                    </div>
                </div>
                <div class="infoCirclesDiv">
                    <div class="circleDiv">
                        <p class="circeTitle">
                            <span id="circleTitleMargin">Speed in space</span>
                            <span class="circleInfo">0 %</span>
                            <span class="circleInfo">${thrust_vacuum_kN} kN</span>
                            <span class="circleInfo">${thrust_vacuum_lbf} Lbf</span>
                        </p>
                        <svg class="circleSvg">
                            <circle class="circle" r="80" cx="50%" cy="50%" pathlength="100"></circle>
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
                            <p class="infoFlexTitle">INFORMATION ROCKET</p>
                            <div class="line"></div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Type</p><p class="iFEText Right">${type}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Rocket in service</p><p class="iFEText Right">${active}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Number of stages</p><p class="iFEText Right">${stages}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Number of propellans</p><p class="iFEText Right">${propellansContador}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Landing legs</p><p class="iFEText Right">${landing_legs}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Leg material</p><p class="iFEText Right">${material}</p>
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
                            <p class="infoFlexTitle">ENGINE INFORMATION</p>
                            <div class="line"></div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Type</p><p class="iFEText Right">${engines_type}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Maximum power loss</p><p class="iFEText Right">${engine_loss_max}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Engine availability</p><p class="iFEText Right">${layout}</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Number of engines</p><p class="iFEText Right">${enginesNumber}</p>
                            </div>
                            ${htmlKeys}
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

        <div class="iG2Element">
            <div class="iG2ElementSection">
                <p class="iG2ElementText">Rocket Weight:</p>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">0 kg</p>
            </div>
            <div class="iG2ElementSection">
                <div class="bar"><div class="barProgress"></div></div>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">0 lb</p>
            </div>
        </div>
        
        <div class="iG2Element">
            <div class="iG2ElementSection">
                <p class="iG2ElementText">Low Earth Orbit:</p>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">0 kg</p>
            </div>
            <div class="iG2ElementSection">
                <div class="bar"><div class="barProgress"></div></div>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">0 lb</p>
            </div>
        </div>
        
        <div class="iG2Element">
            <div class="iG2ElementSection">
                <p class="iG2ElementText">Geosynchronous Transfer Orbit:</p>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">0 M</p>
            </div>
            <div class="iG2ElementSection">
                <div class="bar"><div class="barProgress"></div></div>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">0 F</p>
            </div>
        </div>
        
        <div class="iG2Element">
            <div class="iG2ElementSection">
                <p class="iG2ElementText">Mars Orbit:</p>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">0 M</p>
            </div>
            <div class="iG2ElementSection">
                <div class="bar"><div class="barProgress"></div></div>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">0 F</p>
            </div>
        </div>
        
        <div class="iG2Element">
            <div class="iG2ElementSection">
                <p class="iG2ElementText">Pluto Orbit:</p>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">0 M</p>
            </div>
            <div class="iG2ElementSection">
                <div class="bar"><div class="barProgress"></div></div>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">0 F</p>
            </div>
        </div>
        
        <div class="iG2Element">
            <div class="iG2ElementSection">
                <p class="iG2ElementText">Rocket Height:</p>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">0 M</p>
            </div>
            <div class="iG2ElementSection">
                <div class="bar"><div class="barProgress"></div></div>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">0 F</p>
            </div>
        </div>

        <div class="iG2Element">
            <div class="iG2ElementSection">
                <p class="iG2ElementText">Rocket diameter:</p>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">0 M</p>
            </div>
            <div class="iG2ElementSection">
                <div class="bar"><div class="barProgress"></div></div>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">0 F</p>
            </div>
        </div>

        <div class="iG2Element">
            <div class="iG2ElementSection">
                <p class="iG2ElementText">Diameter rocket shield:</p>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">0 M</p>
            </div>
            <div class="iG2ElementSection">
                <div class="bar"><div class="barProgress"></div></div>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">0 F</p>
            </div>
        </div>
                <div class="iG2Element">
            <div class="iG2ElementSection">
                <p class="iG2ElementText">Heihgt Rocket Shield:</p>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">0 M</p>
            </div>
            <div class="iG2ElementSection">
                <div class="bar"><div class="barProgress"></div></div>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">0 F</p>
            </div>
        </div>

        <div class="iG2Element">
            <div class="iG2ElementSection">
                <p class="iG2ElementText">Heihgt Rocket Shield:</p>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">0 M</p>
            </div>
            <div class="iG2ElementSection">
                <div class="bar"><div class="barProgress"></div></div>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">0 F</p>
            </div>
        </div>

    </div>
    <div id="navigationNumbersCenter" class="mGS3Section">
        <div class="navigationNumbersDiv">
            <div class="navigationNumbersGrid">

            </div>
        </div>
    </div>`;

    mGS3.innerHTML = plantilla3;
}