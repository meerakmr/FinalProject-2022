// when you click on an album cover, description text will appear
// Indie page
function displayDesc(desc, img) {
    if (desc.style.display == "block") {
        desc.style.display = "none";
        img.style.display = "block";
    }
    else {
        desc.style.display = "block";
        img.style.display = "none";
    }
}
document.querySelector("#airplanes").addEventListener("click", function() {
    console.log("airplanes");
    displayDesc(document.querySelector("#airplanes p"), document.querySelector("#airplanes img"));
})
document.querySelector("#facts").addEventListener("click", function() {
    console.log("facts");
    displayDesc(document.querySelector("#facts p"), document.querySelector("#facts img"));

})
document.querySelector("#photoalbum").addEventListener("click", function() {
    console.log("photoalbum");
    displayDesc(document.querySelector("#photoalbum p"), document.querySelector("#photoalbum img"));
})
document.querySelector("#transat").addEventListener("click", function() {
    console.log("transat");
    displayDesc(document.querySelector("#transat p"), document.querySelector("#transat img"));
})
document.querySelector("#plans").addEventListener("click", function() {
    console.log("plans");
    displayDesc(document.querySelector("#plans p"), document.querySelector("#plans img"));
})
document.querySelector("#stairs").addEventListener("click", function() {
    console.log("stairs");
    displayDesc(document.querySelector("#stairs p"), document.querySelector("#stairs img"));
})
document.querySelector("#codes").addEventListener("click", function() {
    console.log("codes");
    displayDesc(document.querySelector("#codes p"), document.querySelector("#codes img"));
})
document.querySelector("#kintsugi").addEventListener("click", function() {
    console.log("kintsugi");
    displayDesc(document.querySelector("#kintsugi p"), document.querySelector("#kintsugi img"));
})
document.querySelector("#tyft").addEventListener("click", function() {
    console.log("tyft");
    displayDesc(document.querySelector("#tyft p"), document.querySelector("#tyft img"));
})
document.querySelector("#asphalt").addEventListener("click", function() {
    console.log("asphalt");
    displayDesc(document.querySelector("#asphalt p"), document.querySelector("#asphalt img"));
})