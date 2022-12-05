function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
}
function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
}

function verify() {
    const name = document.getElementById('name-input');
    if (isNotEmpty(name.value) == false) {alert("No name inputted."); return;}
    const email = document.getElementById('email-input');
    if (isNotEmpty(email.value) == false) {alert("No email inputted."); return;}
    if (isEmail(email.value) == false) {alert("Invalid email inputted."); return;}
    const genre = document.getElementById('genre-input');
    const title = document.getElementById('title-input');
    if (isNotEmpty(title.value) == false) {alert("No song title inputted."); return;}
    const artist = document.getElementById('artist-input');
    if (isNotEmpty(artist.value) == false) {alert("No artist name inputted."); return;}
}

// let saveFile = () => {
//     let valid = true;
//     // Get the data from each element on the form.
//     const name = document.getElementById('name-input');
//     if (isNotEmpty(name.value) == false) {alert("No name inputted."); return;}
//     const email = document.getElementById('email-input');
//     if (isNotEmpty(email.value) == false) {alert("No email inputted."); return;}
//     if (isEmail(email.value) == false) {alert("Invalid email inputted."); return;}
//     const genre = document.getElementById('genre-input');
//     const title = document.getElementById('title-input');
//     if (isNotEmpty(title.value) == false) {alert("No song title inputted."); return;}
//     const artist = document.getElementById('artist-input');
//     if (isNotEmpty(artist.value) == false) {alert("No artist name inputted."); return;}

//     // This variable stores all the data.
//     let data = 
//         '\r Name: ' + name.value + ' \r\n ' + 
//         'Email: ' + email.value + ' \r\n ' + 
//         'Genre: ' + genre.value + ' \r\n ' + 
//         'title: ' + title.value + ' \r\n ' + 
//         'artist: ' + artist.value;
    
//     // Convert the text to BLOB.
//     const textToBLOB = new Blob([data], { type: 'text/plain' });
//     const sFileName = 'data/songrecs.txt';	   // The file to save the data.
    
//     let newLink = document.createElement("a");
//     newLink.download = sFileName;

//     if (window.webkitURL != null) {
//         newLink.href = window.webkitURL.createObjectURL(textToBLOB);
//     }
//     else {
//         newLink.href = window.URL.createObjectURL(textToBLOB);
//         newLink.style.display = "none";
//         document.body.appendChild(newLink);
//     }

//     newLink.click(); 
// }

// function submit() {
//     let fs = require('fs').promises;

//     let valid = true;
//     let name = document.querySelector("#name-input").value;
//     console.log(name);
//     let email = document.querySelector("#email-input");
//     let title = document.querySelector("#title-input");
//     let artist = document.querySelector("#artist-input");
//     let genre = document.querySelector("#genre-input").value;

//     valid &= isNotEmpty(name);
//     if (valid == false) {
//         alert("No name inputted.");
//         name.style.color = "red";
//     }
//     valid &= isNotEmpty(email)
//     if (valid == false) {
//         alert("No email inputted.");
//         email.style.color = "red";
//         return;
//     }
//     valid &= isEmail(email);
//     if (valid == false) {
//         alert("Invalid email inputted.");
//         email.style.color = "red";
//         return;
//     }
//     valid &= isNotEmpty(title);
//     if (valid == false) {
//         alert("No song title inputted.");
//         email.style.color = "red";
//         return;
//     }
//     valid &= isNotEmpty(artist);
//     if (valid == false) {
//         alert("No artist name inputted.");
//         email.style.color = "red";
//         return;
//     }

//     let input = name + " " + email + " " + genre + " " + title + " " + artist;
    
//     fs.appendFile('data/songrecs.txt', input, function (err) {
//         if (err) throw err;
//         console.log('Saved!');
//       });
// }