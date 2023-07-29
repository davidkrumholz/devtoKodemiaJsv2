import { createHeader, createPostCard } from "./components/dom.js";
import { getAllPosts } from "./modules/postAPI.js";

let header = document.getElementById("header");
header.append(createHeader());

let postsArray = [];

const getPosts = async () => {
    let data = await getAllPosts();
    let keys = Object.keys(data);
    let result = keys.reduce((accum, current) => {
        return [...accum, {key: current, ...data[current] }]
    }, []);
    postsArray = result;
    printAllCards(postsArray);
}

getPosts();

const printAllCards = (postsList) => {
   let postsWrapper = document.getElementById("wrapperPosts");
   postsList.forEach((post, index) => {
    let postCard = createPostCard(post, index);
    postsWrapper.append(postCard);
   });
}
