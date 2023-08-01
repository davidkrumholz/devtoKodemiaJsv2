// userAPI
const saveUser = async (userObject) => {
    let response = await fetch(
      "https://equipo3js-f94ab-default-rtdb.firebaseio.com/users/.json",
      { method: "POST", body: JSON.stringify(userObject) }
    );
  
    let data = await response.json();
    return data;
  };

  export {saveUser}