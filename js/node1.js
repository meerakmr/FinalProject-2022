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
    document.getElementById('hidden-submit').click();
}