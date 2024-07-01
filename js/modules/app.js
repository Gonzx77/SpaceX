export const getRockets = async() =>{
    const url = "https://api.spacexdata.com/v4/rockets";
    const options = {
    method: 'GET'
};

let data = await fetch(url, options);
let res = data.json();
return res;
}

export const getCapsules = async() =>{
    const url = "https://api.spacexdata.com/v4/capsules";
    const options = {
    method: 'GET'
};

let data = await fetch(url, options);
let res = data.json();
return res;
}


export const getLaunches = async(id) =>{
    const url = "https://api.spacexdata.com/v4/launches";
    const options = {
    method: 'GET'
};

let data = await fetch(url, options);
let res = data.json();
return res;
}

export const getCrews = async(id) =>{
    const url = "https://api.spacexdata.com/v4/crew";
    const options = {
    method: 'GET'
};

let data = await fetch(url, options);
let res = data.json();
return res;
}

export const getShips = async(id) =>{
    const url = "https://api.spacexdata.com/v4/ships";
    const options = {
    method: 'GET'
};

let data = await fetch(url, options);
let res = data.json();
return res;
}


export const getLaunch = async(id) =>{
    const url = `https://api.spacexdata.com/v4/launches/${id}`;
    const options = {
    method: 'GET'
};

let data = await fetch(url, options);
let res = data.json();
return res;
}

export const getRocket = async(id) =>{
    const url = `https://api.spacexdata.com/v4/rockets/${id}`;
    const options = {
    method: 'GET'
};

let data = await fetch(url, options);
let res = data.json();
return res;
}