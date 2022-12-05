// when you click on an album cover, description text will appear
// Metal page
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
document.querySelector("#creatures").addEventListener("click", function() {
    console.log("creatures");
    displayDesc(document.querySelector("#creatures h3"), document.querySelector("#creatures img"));
})
document.querySelector("#infamous").addEventListener("click", function() {
    console.log("infamous");
    displayDesc(document.querySelector("#infamous h3"), document.querySelector("#infamous img"));
})
document.querySelector("#reincarnate").addEventListener("click", function() {
    console.log("reincarnate");
    displayDesc(document.querySelector("#reincarnate h3"), document.querySelector("#reincarnate img"));
})
document.querySelector("#graveshift").addEventListener("click", function() {
    console.log("graveyard shift");
    displayDesc(document.querySelector("#graveshift h3"), document.querySelector("#graveshift img"));
})
document.querySelector("#disguise").addEventListener("click", function() {
    console.log("disguise");
    displayDesc(document.querySelector("#disguise h3"), document.querySelector("#disguise img"));
})
document.querySelector("#steotw").addEventListener("click", function() {
    console.log("steotw");
    displayDesc(document.querySelector("#steotw h3"), document.querySelector("#steotw img"));
})

document.querySelector("#etitb").addEventListener("click", function() {
    console.log("etitb");
    displayDesc(document.querySelector("#etitb h3"), document.querySelector("#etitb img"));
})
document.querySelector("#silverscream").addEventListener("click", function() {
    console.log("silver scream");
    displayDesc(document.querySelector("#silverscream h3"), document.querySelector("#silverscream img"));
})
document.querySelector("#horrorwood").addEventListener("click", function() {
    console.log("horrorwood");
    displayDesc(document.querySelector("#horrorwood h3"), document.querySelector("#horrorwood img"));
})
