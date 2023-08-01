//post JS
import { getDetailPost } from "./modules/postAPI.js";
import { createHeader } from "./components/dom.js"

let header = document.getElementById("header");
header.append(createHeader());

const urlParams = new URLSearchParams(location.search);

let postId = urlParams.get("postId");

const printPostDetail = async () => {
  let postData = await getDetailPost(postId);

  let {
    author,
    comentsData,
    comments,
    createdDate,
    description,
    image,
    rating,
    relevant,
    title,
  } = postData;
  let postTitle = document.getElementById("titlePost");
  let postAuthor = document.getElementById("authorPost");
  let postImage = document.getElementById("imagePost");
  let postDate = document.getElementById("datePost");
  let postDescription = document.getElementById("descriptionPost");
  let postComments = document.getElementById("commentsPost");

  postTitle.innerText = title;
  postAuthor.innerText = author;
  postImage.src = image;
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let date = new Date(createdDate);
  let formatDate = `${date.getDate()} ${monthNames[date.getMonth()]}`;
  postDate.innerText = formatDate;
  postDescription.innerText = description;
  postComments.innerText = comments;
};

printPostDetail();
