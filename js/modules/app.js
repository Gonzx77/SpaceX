export const getRockets = async() =>{
    const url = "https://api.spacexdata.com/v4/rockets";
const options = {
    method: 'GET'
};

let data = await fetch(url, options);
let res = data.json();
return res;
}