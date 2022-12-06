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

window.addEventListener("load", function() {
    let albumList = document.querySelectorAll(".album");
    for (let i = 0; i < albumList.length; i++) {
        // make images tab-able
        albumList[i].setAttribute("tabindex", "0");
        
        // add event listeners for click and keypress
        let id = albumList[i].id;
        let descp = document.querySelector("#" + id + " p");
        let descimg = document.querySelector("#" + id + " img");

        albumList[i].addEventListener("click", function() {
            console.log(id);
            displayDesc(descp, descimg);
        })
        albumList[i].addEventListener("keypress", function(e) {
            if (e.key == 'Enter') {
                console.log(id);
                displayDesc(descp, descimg);
            }
        })
    }
})