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
    getPostRandom(postsArray);
}

getPosts();

const printAllCards = (postsList) => {
   let postsWrapper = document.getElementById("wrapperPosts");
   postsList.forEach((post, index) => {
    let postCard = createPostCard(post, index);
    postsWrapper.append(postCard);
   });
}

const getPostRandom= (postArray) => {
    let countArray = postArray.length;
    let randomNumber = Math.floor(Math.random() * countArray);
    printAsideCard(postArray[randomNumber]);
}

const printAsideCard = (postObject) => {
    let {key, image, title} = postObject
    let imgAside = document.getElementById("imgAside");
    let titleRightAside = document.getElementById("cardAsideTitle");
    let keyPostButton = document.getElementById("keyRightAside")
    imgAside.src = image;
    titleRightAside.innerText = title;
    keyPostButton.addEventListener("click", (event) => {
        window.open(`./views/post.html?postId=${key}`, "_self")
    })

}
