const Plantilla = async(i) =>{
    let launches = await getLaunches();
    let launch = launches[i];

    let mGS1 = document.querySelector("#mGS1");
    let mGS2 = document.querySelector("#mGS2");
    let mGS3 = document.querySelector("#mGS3");

    mGS1.innerHTML = "";
    mGS2.innerHTML = "";
    mGS3.innerHTML = "";

    let capsuleImg = `<img class="rocketImg" src="storage/media/footer/rocket.svg" referrerpolicy="no-referrer">`; 

    let plantilla1 = `
        <div id="centerTitle" class="mGS2Section">
                <h1 id="mainTitle">Capsule</h1>
            </div>
            <div id="infoCriclesGrid" class="mGS2Section">
                <div class="infoCirclesDiv">
                    <div class="circleDiv">
                        <p class="circeTitle">
                            <span id="circleTitleMargin">Launches</span>
                            <span class="circleInfo">C Info 1</span>
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
                            <span class="circleInfo">C Info 2</span>
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
                                <p class="iFEText Left">Water</p><p class="iFEText Right">0</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Land</p><p class="iFEText Right">0</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Launches</p><p class="iFEText Right">0</p>
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
                                <p class="iFEText Left">Type</p><p class="iFEText Right">0</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Serial</p><p class="iFEText Right">0</p>
                            </div>
                            <div class="infoFlexElement">
                                <p class="iFEText Left">Estatus</p><p class="iFEText Right">0</p>
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