
function typeWrite(text, elementId, delay) {
    const element = document.getElementById(elementId);
    element.innerHTML = '';
    let i = 0;
    const interval = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(interval);
        }
    }, 100); // Adjust typing speed here if needed
}

function startTypeWriting() {
    typeWrite('Gallery of Medical Equipment', 'typewriter', 100);
}

startTypeWriting();
setInterval(startTypeWriting, 5000);