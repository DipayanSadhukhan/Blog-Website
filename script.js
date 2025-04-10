const homePage = document.getElementsByClassName("homePage");
const aboutPage = document.getElementsByClassName("aboutPage");
const contactPage = document.getElementsByClassName("contactPage");
const supportPage = document.getElementsByClassName("supportPage");
const writeForUsPage = document.getElementsByClassName("writeForUsPage");
const Edge_computing_Page = document.getElementsByClassName("Edge_computing_Page");
const AI_Design_Page = document.getElementsByClassName("AI_Design_Page");
const wikipedia_AI_Design = document.getElementsByClassName("wikipedia_AI_Design");
const wikipedia_Edge_Computing = document.getElementsByClassName("wikipedia_Edge_Computing");


// document.getElementById("home").addEventListener("click",()=>{
//     window.location.href = "index.html";
// })
// document.getElementById("about").addEventListener("click",()=>{
//     window.location.href = "about.html";
// })
// document.getElementById("contactUs").addEventListener("click",()=>{
//     window.location.href = "contact.html";
// })
// document.getElementById("support").addEventListener("click",()=>{
//     window.location.href = "support.html";
// })
// document.getElementById("writeForUs").addEventListener("click",()=>{
//     window.location.href = "writeforus.html";
// })


Array.from(homePage).forEach((element) => {
    element.addEventListener("click", () => {
        window.location.href = "index.html";
    })
})
Array.from(aboutPage).forEach((element) => {
    element.addEventListener("click", () => {
        window.location.href = "about.html";
    })
})
Array.from(contactPage).forEach((element) => {
    element.addEventListener("click", () => {
        window.location.href = "contact.html";
    })
})
Array.from(supportPage).forEach((element) => {
    element.addEventListener("click", () => {
        window.location.href = "support.html";
    })
})
Array.from(writeForUsPage).forEach((element) => {
    element.addEventListener("click", () => {
        window.location.href = "writeforus.html";
    })
})
Array.from(Edge_computing_Page).forEach((element) => {
    element.addEventListener("click", () => {
        window.location.href = "edgecom.html";
    })
})
Array.from(AI_Design_Page).forEach((element) => {
    element.addEventListener("click", () => {
        window.location.href = "aidesign.html";
    })
})
Array.from(wikipedia_AI_Design).forEach((element) => {
    element.addEventListener("click", () => {
        window.location.href = "https://en.wikipedia.org/wiki/Artificial_intelligence_in_design";
    })
})
Array.from(wikipedia_Edge_Computing).forEach((element) => {
    element.addEventListener("click", () => {
        window.location.href = "https://en.wikipedia.org/wiki/Edge_computing";
    })
})