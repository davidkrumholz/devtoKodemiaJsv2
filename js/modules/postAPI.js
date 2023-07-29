//Post API

const BASE_URL = "https://equipo3js-f94ab-default-rtdb.firebaseio.com"

const getAllPosts = async () => {
    let response = await fetch(`${BASE_URL}/posts/.json`);
    let data = response.json();
    return data;
}

export { getAllPosts }