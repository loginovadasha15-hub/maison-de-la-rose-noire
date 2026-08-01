const seal = document.getElementById("seal");
const letter = document.getElementById("letter");
const accept = document.getElementById("accept");

seal.addEventListener("click", () => {

    seal.classList.add("fade");

    setTimeout(() => {

        seal.style.display = "none";
        letter.style.display = "block";

    }, 600);

});

accept.addEventListener("click", () => {

    accept.disabled = true;

    accept.innerText = "Миссия принята";

    localStorage.setItem("missionAccepted","true");

});
