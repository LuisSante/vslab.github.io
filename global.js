console.log("ITS ALIVE!");

//function $$(selector, context = document) {
//    return Array.from(context.querySelectorAll(selector));
//}
//
//let navLinks = $$("header nav ul li a");
//let currentLink = navLinks.find(a => a.host === location.host && a.pathname === location.pathname);
//
//if (currentLink) {
//    currentLink.classList.add("current");
//    console.log("Current link found:", currentLink);
//} else {
//    console.log("No current link found");
//}

let pages = [
    {url: "", title: "Home"},
    {url: "projects/", title: "Projects"},
    {url: "contact/", title: "Contact"},
    {url: "https://github.com/LuisSante/", title: "Github"}
];

let header = document.createElement("header");

let nav = document.createElement("nav");
nav.className = "navbar";

let logoDiv = document.createElement("div");
logoDiv.className = "logo";

let logoLink = document.createElement("a");
logoLink.href = "/";

let logoImg = document.createElement("img");
logoImg.src = "https://educacao-executiva.fgv.br/sites/educacao-executiva.fgv.br/files/fvg-educacao-executiva_0.png";

logoLink.appendChild(logoImg);

logoDiv.appendChild(logoLink);

let ul = document.createElement("ul");
ul.className = "nav-links";

const ARE_WE_HOME = document.documentElement.classList.contains("home");

for (let p of pages) {
    let url = p.url;
    let title = p.title;

    if (!ARE_WE_HOME && !url.startsWith("http")) {
        url = "../" + url;
    }

    let li = document.createElement("li");

    let a = document.createElement("a");
    a.href = url;
    a.textContent = title;

    if (window.location.pathname.includes(url)) {
        a.style.fontWeight = "bold";
        a.style.color = "blue";
    }

    if (url.startsWith("http")) {
        a.target = "_blank";
    }

    li.appendChild(a);
    ul.appendChild(li);
}

nav.appendChild(logoDiv);
nav.appendChild(ul);
header.appendChild(nav);

document.body.prepend(nav);

console.log(nav);