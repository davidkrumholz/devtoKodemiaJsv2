// createpost js
const URL = "https://equipo3js-f94ab-default-rtdb.firebaseio.com/posts/.json";
let user = localStorage.getItem("user");
let userName = user.split("@");
const publishBtn = document.querySelector("#save_btn");
console.log(publishBtn);
publishBtn.addEventListener("click", async (event) => {
  event.preventDefault();

  console.log("button clicked");

  // Get post data from input fields and Quill editor
  let urlPostImg = document.querySelector("#url_post_img").value;
  let postTitle = document.querySelector("#input_post_title").value;
  let postTags = document.querySelector("input[name='tags']").value;
  let postBody = document.getElementById("description").value
  //const postTimeToRead = Math.ceil(quill.getText().length / 1500);

  // Additional post data
  const postAuthor = userName[0]; // Replace with the actual author's name or ID
  let postComments = []; // Initialize comments as an empty array
  //const createdDate = new Date().toISOString(); // Get the current date as the createdDate
  let postDescription = postBody; // Replace with the actual post description
  let postRating = Math.floor(Math.random() * 6);
  let postRelevant = document.querySelector("#relevantCheckbox").checked; // Obtiene el estado del checkbox

  for (let i = 0; i < 5; i++) {
    postComments.push("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Enim ut sem viverra aliquet eget sit amet tellus cras. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo.</p>");
  }

  let postCreatedDate = Date.now();
  console.log(postTags)
  // Construct the post data object
  const postData = {
    author: postAuthor,
    image: urlPostImg,
    title: postTitle,
    tags: postTags,
    //postBody: postBody,
    //postTimeToRead: postTimeToRead,
    comments: postComments.length,
    comentsData: postComments,
    createdDate: postCreatedDate,
    description: postDescription,
    rating: postRating,
    relevant: postRelevant,
  };

  // Send the post data to the server (Firebase Realtime Database) using a POST request
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error("Failed to create the post.");
    }

    const jsonData = await response.json();
    console.log(jsonData);
    // Check if the post was successfully created
    if (jsonData && jsonData.name) {
      alert("Post successfully created!");
      window.location.href = "../index.html"; // Redirect to the home page or a success page
    } else {
      alert("Failed to create the post.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred while creating the post.");
  }
});



