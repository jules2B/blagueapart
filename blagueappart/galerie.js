

let indexImage = 0;
const images = [
    "/media/chirac.PNG",
    "/media/diamant.PNG",
    "/media/escalier.JPG",
    "/media/fiagro.PNG",
    "/media/orange.PNG",
    "/media/plantes.PNG",
    "/media/pyra.PNG",
    "/media/rue.PNG",
    "/media/couloir.JPG",
    "/media/graf.PNG",
    "/media/colone.PNG",
    "/media/visage.png"
];

function imageSuivante() {
    indexImage++;
    if (indexImage >= images.length) {
        indexImage = 0;
    }
    document.getElementById('image').src = images[indexImage];
}

function imagePrecedente() {
    indexImage--;
    if (indexImage < 0) {
        indexImage = images.length - 1;
    }
    document.getElementById('image').src = images[indexImage];
}

let angleRotation = 0;

function tournerSensHoraire() {
    angleRotation += 45;
    document.getElementById('image').style.transform = `rotate(${angleRotation}deg)`;
}

function tournerSensAntiHoraire() {
    angleRotation -= 45;
    document.getElementById('image').style.transform = `rotate(${angleRotation}deg)`;
}