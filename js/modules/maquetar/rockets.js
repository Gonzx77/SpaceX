import { getRockets } from "../app.js"

export const Rockets_menu = async() =>{
    let container = document.querySelector(".navigationNumbersGrid");
    container.innerHTML = "";
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
        <div onclick="setMenu(this)" id="${number}" class="navigationNumber">
            ${number}
        </div>`;

        number ++;
        container.innerHTML += plantilla;
    }
};

export const Rocket = async(i) =>{
    let rockets = await getRockets();
    let rocket = rockets[i];

    let infoGalery1 = document.querySelector(".infoGalery1");
    let mGS2 = document.querySelector("#mGS2");
    let mGS3 = document.querySelector("#mGS3");

    infoGalery1.innerHTML = "";
    mGS2.innerHTML = "";
    mGS3.innerHTML = "";

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
    if (material == null){
        material = 0;
    }
    let engines_type = rocket.engines.type;
    let engines_version = rocket.engines.version;
    let engine_loss_max = rocket.engines.engine_loss_max;
    if (engine_loss_max == null){
        engine_loss_max = 0;
    }
    let layout = rocket.engines.layout;
    if (layout == null){
        layout = 0;
    }
    
    let enginesNumber = rocket.engines.number;
    let massKg = rocket.mass.kg;
    let massKgPercent = (massKg / 2000000) * 100;
    let massLb = rocket.mass.lb;

    let heightMeters = rocket.height.meters;
    let heightMetersPercent = (heightMeters / 200) * 100;
    let heightFeets = rocket.height.feet;
    let diameterMeters = rocket.diameter.meters;
    let diameterMetersPercent = (diameterMeters / 20) * 100;
    let diameterFeets = rocket.diameter.feet;


    let shieldHtml = "";
    if (rocket.second_stage.payloads.composite_fairing){
        let shieldDiameterMeters = rocket.second_stage.payloads.composite_fairing.diameter.meters;
        if (shieldDiameterMeters == null){
            shieldDiameterMeters = 0;
        }
        let shieldDiameterMetersPercent = (shieldDiameterMeters / 10) * 100;
        let shieldDiameterFeets = rocket.second_stage.payloads.composite_fairing.diameter.feet;
        if (shieldDiameterFeets == null){
            shieldDiameterFeets = 0;
        }
        let shieldHeihghtMeters = rocket.second_stage.payloads.composite_fairing.height.meters;
        if (shieldHeihghtMeters == null){
            shieldHeihghtMeters = 0;
        }
        let shieldHeihghtMetersPercent = (shieldHeihghtMeters / 20) * 100;
        let shieldHeightFeets = rocket.second_stage.payloads.composite_fairing.height.feet;
        if (shieldHeightFeets == null){
            shieldHeightFeets = 0;
        }
        shieldHtml = `
        <div class="iG2Element">
        <div class="iG2ElementSection">
            <p class="iG2ElementText">Diameter rocket shield:</p>
        </div>
        <div class="iG2ElementSection">
            <p class="iG2ElementText">${shieldDiameterMeters} M</p>
        </div>
        <div class="iG2ElementSection">
            <div class="bar"><div class="barProgress" style="width: ${shieldDiameterMetersPercent}%"></div></div>
        </div>
        <div class="iG2ElementSection">
            <p class="iG2ElementText">${shieldDiameterFeets} F</p>
        </div>
    </div>
    <div class="iG2Element">
        <div class="iG2ElementSection">
            <p class="iG2ElementText">Heihgt Rocket Shield:</p>
        </div>
        <div class="iG2ElementSection">
            <p class="iG2ElementText">${shieldHeihghtMeters} M</p>
        </div>
        <div class="iG2ElementSection">
            <div class="bar"><div class="barProgress" style="width: ${shieldHeihghtMetersPercent}%"></div></div>
        </div>
        <div class="iG2ElementSection">
            <p class="iG2ElementText">${shieldHeightFeets} F</p>
        </div>
    </div>`;
    };



    let thrust_sea_level_kN = rocket.engines.thrust_sea_level.kN;
    let thrust_sea_level_lbf = rocket.engines.thrust_sea_level.lbf;
    let percent_sea_level = (thrust_sea_level_kN / 1000) * 100;


    let thrust_vacuum_kN = rocket.engines.thrust_vacuum.kN;
    let thrust_vacuum_lbf = rocket.engines.thrust_vacuum.lbf;
    let thrust_vacuum = (thrust_vacuum_kN / 1000) * 100;

    let payload_weights = rocket.payload_weights;
    let payload_weightsCantidad = rocket.payload_weights.length;
    let payload_weightsCantidadHtml = "";
    for (let key in payload_weights){
        let name = rocket.payload_weights[key].name;
        let kg = rocket.payload_weights[key].kg;
        let kgPercent = (kg / 200000) * 100;
        let lb = rocket.payload_weights[key].lb;
        payload_weightsCantidadHtml += `
        <div class="iG2Element">
            <div class="iG2ElementSection">
                <p class="iG2ElementText">${name}</p>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">${kg} kg</p>
            </div>
            <div class="iG2ElementSection">
                <div class="bar"><div style="width: ${kgPercent}%" class="barProgress"></div></div>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">${lb} lb</p>
            </div>
        </div>`;
    };
    


    let propellants = rocket.engines;
    let propellansContador = 0;
    let propellantsKeys = [];
    let propellantsHtml = "";
    for (let key in propellants){
        if (key.startsWith("propellant")){
            let content = rocket.engines[key];
            propellansContador++;
            propellantsKeys.push(key);
            propellantsHtml += `
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
                            <span class="circleInfo">${percent_sea_level} %</span>
                            <span class="circleInfo">${thrust_sea_level_kN} kN</span>
                            <span class="circleInfo">${thrust_sea_level_lbf} Lbf</span>
                        </p>
                        <svg class="circleSvg">
                            <circle class="circle" stroke-dasharray="${percent_sea_level} 100" r="80" cx="50%" cy="50%" pathlength="100"></circle>
                        </svg>
                    </div>
                </div>
                <div class="infoCirclesDiv">
                    <div class="circleDiv">
                        <p class="circeTitle">
                            <span id="circleTitleMargin">Speed in space</span>
                            <span class="circleInfo">${thrust_vacuum} %</span>
                            <span class="circleInfo">${thrust_vacuum_kN} kN</span>
                            <span class="circleInfo">${thrust_vacuum_lbf} Lbf</span>
                        </p>
                        <svg class="circleSvg">
                            <circle class="circle" stroke-dasharray="${thrust_vacuum} 100" r="80" cx="50%" cy="50%" pathlength="100"></circle>
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
                                <p class="iFEText Left">Type</p><p class="iFEText Right">${engines_type} ${engines_version}</p>
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
                            ${propellantsHtml}
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
                <p class="iG2ElementText">${massKg} kg</p>
            </div>
            <div class="iG2ElementSection">
                <div class="bar"><div class="barProgress" style="width: ${massKgPercent}%"></div></div>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">${massLb} lb</p>
            </div>
        </div>
        
        ${payload_weightsCantidadHtml}
        
        <div class="iG2Element">
            <div class="iG2ElementSection">
                <p class="iG2ElementText">Rocket Height:</p>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">${heightMeters} M</p>
            </div>
            <div class="iG2ElementSection">
                <div class="bar"><div class="barProgress" style="width: ${heightMetersPercent}%"></div></div>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">${heightFeets} F</p>
            </div>
        </div>

        <div class="iG2Element">
            <div class="iG2ElementSection">
                <p class="iG2ElementText">Rocket diameter:</p>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">${diameterMeters} M</p>
            </div>
            <div class="iG2ElementSection">
                <div class="bar"><div class="barProgress" style="width: ${diameterMetersPercent}%"></div></div>
            </div>
            <div class="iG2ElementSection">
                <p class="iG2ElementText">${diameterFeets} F</p>
            </div>
        </div>

        ${shieldHtml}

    </div>
    <div id="navigationNumbersCenter" class="mGS3Section">
        <div class="navigationNumbersDiv">
            <div class="navigationNumbersGrid">

            </div>
        </div>
    </div>`;

    mGS3.innerHTML = plantilla3;
}