import { getCapsules } from "../app.js";

export const Capsule = async() =>{
    let capsules = await getCapsules();
    console.log(capsules);

    let mGS1 = document.querySelector("#mGS1");
    let mGS2 = document.querySelector("#mGS2");
    let mGS3 = document.querySelector("#mGS3");

    mGS1.innerHTML = "";
    mGS2.innerHTML = "";
    mGS3.innerHTML = "";
};