import { getLandpads } from "../app.js";

export const Landpad = async(i) =>{
    let Landpads = await getLandpads();
    let Landpad = Landpads[0];
    console.log(Landpad);

    let full_name = Landpad.full_name;
    let details = Landpad.details;

    let mGS1 = document.querySelector("#mGS1");
    let mGS2 = document.querySelector("#mGS2");
    let mGS3 = document.querySelector("#mGS3");

    mGS1.innerHTML = "";
    mGS2.innerHTML = "";
    mGS3.innerHTML = "";

    let capsuleImg = `<img class="rocketImg" src="storage/media/footer/rocket.svg" referrerpolicy="no-referrer">`; 

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

    let mGS1Element2 = `
        <div class="iG1Element">
            <div class="iG1ElementImg">
                <img class="iG1Img" src="storage/media/images/point.png">
            </div>
            <div class="iG1ElementTitle">
                <p class="iG1Title">0</p>
                <p class="iG1Text">0</p>
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
                            <span id="circleTitleMargin">Total Launches</span>
                            <span class="circleInfo">0</span>
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
                            <p class="infoFlexTitle">SHIP INFORMATION</p>
                            <div class="line"></div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Home Port</p><p class="iFEText Right">0</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Active</p><p class="iFEText Right">0</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">More Info</p><a href="" target="_blanck"><p class="iFEText Right2">Open</a></p>
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
                                <p class="iFEText Left">Name</p><p class="iFEText Right">0</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Type</p><p class="iFEText Right">0</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Mass</p><p class="iFEText Right">0 KG</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Legacy ID</p><p class="iFEText Right">0</p>
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