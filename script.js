const playCard = document.querySelector(".play_card");


function playNow() {
    playBtn = document.getElementById("play_now");
    playBtn.remove();

    const x_o = playCard.innerHTML = `
    <p id="x">X</p>
    <p id="o">O</p>`

    const getBtn = document.querySelectorAll("p");

    getBtn.forEach(element => {
        element.onclick = function() {
            document.querySelector(".special")?.classList.remove("special");
            element.classList.add("special");
        }
    });

}
