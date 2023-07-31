//components Dom

let islogedIn = localStorage.getItem("token");

const createProfileDivider = () => {
    let listProfileNavDivider = document.createElement("li");
    let hrDivider = document.createElement("hr");
    hrDivider.classList.add("dropdown-divider");
    
    listProfileNavDivider.append(hrDivider);
    return listProfileNavDivider;
}

const createCardOffCanvasIsNotLogin = () => {
    let card = document.createElement("div");
    card.classList.add("card", "border-light");

    let cardbody = document.createElement("div");
    cardbody.classList.add("card-body");

    let cardtitle = document.createElement("h5");
    cardtitle.classList.add("card-title");
    cardtitle.innerText = "DEV Community is a community of 1,107,629 amazing developers";

    let cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.innerText = "We're a place where coders share, stay up-to-date and grow their careers.";

    let createAccountButton = document.createElement("button");
    createAccountButton.classList.add("btn", "button__primary--purple", "col-12");
    createAccountButton.innerText = "Create account";

    createAccountButton.addEventListener("click", () => {
        window.open("../views/login.html", "_self")
    });

    let loginButton = document.createElement("button");
    loginButton.classList.add("btn", "btn-light", "col-12", "mt-2");
    loginButton.innerText = "Log in";

    loginButton.addEventListener("click", () => {
        window.open("../views/login.html", "_self")
    });

    cardbody.append(cardtitle, cardText, createAccountButton, loginButton);
    card.append(cardbody);

    return card;

}

const createListItemProfileMenu = (text) => {
    let listElement = document.createElement("li");

    let ancorListElement = document.createElement("a");
    ancorListElement.classList.add("dropdown-item", "button__primary--transparent-purple");
    ancorListElement.href = "#";
    ancorListElement.innerText = text;

    if(text == "Sign out") {
        ancorListElement.addEventListener("click", () => {
            localStorage.removeItem("token");
            window.open("../index.html", "_self");
        });
    }

    listElement.append(ancorListElement);
    return listElement;
}

const createIconReactions = (icon) => {
    let reactionWrapper = document.createElement("p");
    reactionWrapper.innerText = icon;
    return reactionWrapper;
}

const createTagsElements = (tagsArray) => {
    let tagsWrapper = document.createElement("p");
    tagsWrapper.classList.add("card-text");

    tagsArray.forEach((tag) => {
        let tagsElement = document.createElement("span");
        tagsElement.classList.add("hashtags__hover", "p-2", "rounded");
        tagsElement.innerText = tag;
        tagsWrapper.append(tagsElement);
    });

    return tagsWrapper;
}

const createPostCard = (postObject, index) => {
    let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let {author, comments, createdDate, description, image, tittle, tags, key} = postObject;
    let date = new Date(createdDate);
    let formatDate = `${date.getDate()} ${monthNames[date.getMonth()]}`;
    let cardWrapper = document.createElement("div");
    cardWrapper.classList.add("card", "mb-3");

    let imageCard = document.createElement("img");
    imageCard.src = image;
    imageCard.classList.add("card-img-top");

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "mb-2");

    let profileWrapper = document.createElement("div");
    profileWrapper.classList.add("d-flex", "flex-row");

    let profileImage = document.createElement("img");
    profileImage.classList.add("rounded-circle", "icon__image");
    profileImage.src = "https://xsgames.co/randomusers/avatar.php?g=male";
    profileImage.width ="40";
    profileImage.height = "40";

    let profilenameWrapper = document.createElement("div");
    profilenameWrapper.classList.add("text", "ms-2");

    let textProfileName = document.createElement("h6");
    textProfileName.classList.add("m-0");
    textProfileName.innerText = author;

    let spanDate = document.createElement("span");
    spanDate.innerText = formatDate;

    let titlePost = document.createElement("h5");
    titlePost.classList.add("card-title", "mt-2", "link__text");
    titlePost.innerText = description;
    titlePost.addEventListener("click", () => {
        window.open(`../views/post.html?postId=${key}`, "_self")
    });

    let bottomWrapper = document.createElement("div");
    bottomWrapper.classList.add("d-flex", "flex-row", "justify-content-between");

    let reactionsWrapper = document.createElement("div");
    reactionsWrapper.classList.add("d-flex", "flex-row")

    let countReactions = document.createElement("p");
    countReactions.innerText = "212 reactions";
    
    let iconMessage = document.createElement("img");
    iconMessage.classList.add("m-2");
    iconMessage.src = "../assets/images/comment-icon.png";
    iconMessage.width = "15";
    iconMessage.height = "15";

    let countComments = document.createElement("p");
    countComments.innerText = `${comments} comments`;

    let countMinReadWrapper = document.createElement("div");
    countMinReadWrapper.classList.add("d-flex", "flex-row");

    let textMinRead = document.createElement("p");
    textMinRead.innerText = "10 min read";

    let testTagsArray = ["test1", "test2"];

    countMinReadWrapper.append(textMinRead);
    reactionsWrapper.append(createIconReactions("❤️"), createIconReactions("🦄"), createIconReactions("🤯"), countReactions, iconMessage, countComments);
    bottomWrapper.append(reactionsWrapper, countMinReadWrapper);
    profilenameWrapper.append(textProfileName, spanDate);
    profileWrapper.append(profileImage, profilenameWrapper);
    cardBody.append(profileWrapper, titlePost, createTagsElements(testTagsArray), bottomWrapper);
    index == 0 ? cardWrapper.append(imageCard, cardBody): cardWrapper.append(cardBody);

    return cardWrapper;
}

const createHeader = () => {

  let nav = document.createElement("nav");
  nav.classList.add("navbar", "navbar-expand-lg", "navbar__container--white");

  let containerNav = document.createElement("div");
  containerNav.classList.add("container");

  let wrapperLogoAndSearch = document.createElement("div");
  wrapperLogoAndSearch.classList.add(
    "d-flex",
    "justify-content-start",
    "align-items-center"
  );

  let buttonNavigationMenu = document.createElement("a");
  buttonNavigationMenu.classList.add(
    "btn",
    "d-block",
    "d-sm-block",
    "d-md-none"
  );
  buttonNavigationMenu.setAttribute("data-bs-toggle", "offcanvas");
  buttonNavigationMenu.href = "#offcanvasExample";

  let svgNavigationMenu = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );

  svgNavigationMenu.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svgNavigationMenu.setAttribute("width", "24");
  svgNavigationMenu.setAttribute("height", "24");
  svgNavigationMenu.setAttribute("viewBox", "0 0 24 24");
  svgNavigationMenu.setAttribute("role", "img");
  svgNavigationMenu.setAttribute(
    "aria-labelledby",
    "amizgsgt7gjk1tltjcnt8x0qk5buzpwe"
  );
  svgNavigationMenu.setAttribute("class", "crayons-icon");

  let titleSvgNavigationMenu = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "title"
  );
  titleSvgNavigationMenu.setAttribute("id", "amizgsgt7gjk1tltjcnt8x0qk5buzpwe");
  titleSvgNavigationMenu.textContent = "Navigation menu";

  let pathSvgNavigationMenu = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  pathSvgNavigationMenu.setAttribute(
    "d",
    "M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"
  );

  let ancorNavbarBrand = document.createElement("a");
  ancorNavbarBrand.classList.add("navbar-brand");
  ancorNavbarBrand.href = "../index.html";

  let imageLogoNavbarBrand = document.createElement("img");
  imageLogoNavbarBrand.classList.add("img-fluid", "navbar__logo");
  imageLogoNavbarBrand.src = "../assets/images/dev-to-logo.png";
  imageLogoNavbarBrand.alt = "Logo";

  let formSearch = document.createElement("form");
  formSearch.classList.add(
    "d-flex",
    "justify-content-start",
    "navbar__search-container",
    "d-none",
    "d-sm-none",
    "d-md-block"
  );
  formSearch.setAttribute("role", "search");

  let containerForm = document.createElement("div");
  containerForm.classList.add("input-group");

  let inputSearch = document.createElement("input");
  inputSearch.classList.add("form-control", "rounded");
  inputSearch.type = "text";
  inputSearch.placeholder = "Buscar....";
  inputSearch.id = "searchInput";

  let buttonInputSearch = document.createElement("button");
  buttonInputSearch.classList.add("btn", "rounded-left", "button__search");
  buttonInputSearch.type = "button";

  // Create the SVG element
  let svgButtonInputSearch = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );

  // Set the SVG element attributes
  svgButtonInputSearch.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svgButtonInputSearch.setAttribute("width", "24");
  svgButtonInputSearch.setAttribute("height", "24");
  svgButtonInputSearch.setAttribute("viewBox", "0 0 24 24");
  svgButtonInputSearch.setAttribute("aria-hidden", "true");
  svgButtonInputSearch.setAttribute("class", "crayons-icon c-btn__icon");
  svgButtonInputSearch.setAttribute("focusable", "false");

  // Create the path element
  let pathSvgButtonInputSearch = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  pathSvgButtonInputSearch.setAttribute(
    "d",
    "m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15"
  );

  let rightContainerNavBar = document.createElement("div");
  rightContainerNavBar.classList.add(
    "d-flex",
    "navbar__container-right",
    "align-items-center"
  );

  let ancorSearchIconMobile = document.createElement("a");
  ancorSearchIconMobile.classList.add(
    "btn",
    "navbar__buttton--transparent",
    "d-block",
    "d-sm-block",
    "d-md-none"
  );
  ancorSearchIconMobile.src = "#";

  let svgButtonInputSearchMobile = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );

  svgButtonInputSearchMobile.setAttribute(
    "xmlns",
    "http://www.w3.org/2000/svg"
  );
  svgButtonInputSearchMobile.setAttribute("width", "24");
  svgButtonInputSearchMobile.setAttribute("height", "24");
  svgButtonInputSearchMobile.setAttribute("viewBox", "0 0 24 24");
  svgButtonInputSearchMobile.setAttribute("aria-hidden", "true");
  svgButtonInputSearchMobile.setAttribute("class", "crayons-icon c-btn__icon");
  svgButtonInputSearchMobile.setAttribute("focusable", "false");

  let pathSvgButtonInputSearchMobile = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  pathSvgButtonInputSearchMobile.setAttribute(
    "d",
    "m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15"
  );

  let loginButton = document.createElement("button");
  loginButton.classList.add("btn", "btn-light", "d-none", "d-sm-none", "d-md-block");
  loginButton.innerText = "Log in";

  loginButton.addEventListener("click", () => {
    window.open("../views/login.html", "_self")
});

  let createAccountButton = document.createElement("button");
  createAccountButton.classList.add("btn", "button__primary--purple");
  createAccountButton.innerText = "Create account";

  createAccountButton.addEventListener("click", () => {
    window.open("../views/login.html", "_self")
});

  let createPost = document.createElement("button");
  createPost.classList.add("btn", "button__primary--purple", "d-none", "d-sm-none", "d-md-block")
  createPost.innerText = "Create post"

  let bellButton = document.createElement("button");
  bellButton.classList.add("btn", "navbar__buttton--transparent", "button__primary--transparent-purple", "ms-2");

  let svgBellButton = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svgBellButton.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  svgBellButton.setAttribute('width', '24');
  svgBellButton.setAttribute('height', '24');
  svgBellButton.setAttribute('viewBox', '0 0 24 24');
  svgBellButton.setAttribute('role', 'img');
  svgBellButton.setAttribute('aria-labelledby', 'aq3rub5c6ph1z8hdyfqqj787ctidpyp6');
  svgBellButton.setAttribute('class', 'crayons-icon');
  
  let titleSvgBellButton = document.createElementNS('http://www.w3.org/2000/svg', 'title');
  titleSvgBellButton.setAttribute('id', 'aq3rub5c6ph1z8hdyfqqj787ctidpyp6');
  titleSvgBellButton.textContent = 'Notifications';
  
  let pathSvgBellButton = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  pathSvgBellButton.setAttribute('d', 'M20 17h2v2H2v-2h2v-7a8 8 0 1116 0v7zm-2 0v-7a6 6 0 10-12 0v7h12zm-9 4h6v2H9v-2z');

let perfilWrapper = document.createElement("div");
perfilWrapper.classList.add("btn-group");

  let imageProfile = document.createElement("img");
  imageProfile.classList.add("mx-2", "rounded-circle", "user__profile", "dropdown-toggle");
  imageProfile.src = "https://xsgames.co/randomusers/avatar.php?g=male";
  imageProfile.setAttribute("data-bs-toggle", "dropdown");
  imageProfile.setAttribute("aria-expanded", "false");

  let listProfileNav = document.createElement("ul");
  listProfileNav.classList.add("dropdown-menu", "dropdown-menu-end", "p-2", "dropdown__menu");

  let listElementName = document.createElement("li");

  let ancorListElementName = document.createElement("a");
  ancorListElementName.classList.add("dropdown-item", "button__primary--transparent-purple", "d-flex", "flex-column");
  ancorListElementName.href = "#";

  let spanAncorListElementName = document.createElement("span");
  spanAncorListElementName.innerText = "davidkrumholz";

  let smallAncorListElementName = document.createElement("small");
  smallAncorListElementName.innerText = "@davidkrumholz";

  let bodyOffCanvas = document.getElementById("offCanvasBody");

  !islogedIn && bodyOffCanvas.append(createCardOffCanvasIsNotLogin());


  // Appends
  svgBellButton.append(titleSvgBellButton, pathSvgBellButton);
  bellButton.append(svgBellButton);
  ancorListElementName.append(spanAncorListElementName, smallAncorListElementName);
  listElementName.append(ancorListElementName);
  listProfileNav.append(listElementName, createProfileDivider(), createListItemProfileMenu("Dashboard"), createListItemProfileMenu("Create post"), createListItemProfileMenu("Reading list"), createListItemProfileMenu("Settings"), createProfileDivider(), createListItemProfileMenu("Sign out"));
  perfilWrapper.append(imageProfile, listProfileNav);
  svgButtonInputSearch.appendChild(pathSvgButtonInputSearch);
  buttonInputSearch.append(svgButtonInputSearch);
  containerForm.append(inputSearch, buttonInputSearch);
  formSearch.append(containerForm);
  ancorNavbarBrand.append(imageLogoNavbarBrand);
  svgNavigationMenu.append(titleSvgNavigationMenu, pathSvgNavigationMenu);
  buttonNavigationMenu.append(svgNavigationMenu);
  wrapperLogoAndSearch.append(
    buttonNavigationMenu,
    ancorNavbarBrand,
    formSearch
  );
  svgButtonInputSearchMobile.appendChild(pathSvgButtonInputSearchMobile);
  ancorSearchIconMobile.append(svgButtonInputSearchMobile);
  islogedIn ? rightContainerNavBar.append(ancorSearchIconMobile, createPost, bellButton, perfilWrapper): rightContainerNavBar.append(ancorSearchIconMobile, loginButton, createAccountButton);
  containerNav.append(wrapperLogoAndSearch, rightContainerNavBar);
  nav.append(containerNav);

  return nav;
};

export { createHeader, createPostCard }