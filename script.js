function showHour(){
    const date = new Date();

    const hours = date.getHours().toString().padStart(2,'0');
    const minutes = date.getMinutes().toString().padStart(2,'0')

    const formatedHour = `${hours}:${minutes}`;

    document.getElementById('usrHour').innerText = formatedHour;
}

window.onload = showHour;