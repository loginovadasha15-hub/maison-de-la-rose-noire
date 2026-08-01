const openBtn = document.getElementById("openBtn");
const envelope = document.getElementById("envelope");
const seal = document.querySelector(".seal");
const letter = document.getElementById("letter");
const acceptBtn = document.getElementById("acceptBtn");

// Открытие конверта
openBtn.addEventListener("click", () => {

    seal.style.opacity = "0";
    openBtn.style.display = "none";

    envelope.style.transform = "translateY(-20px) scale(0.97)";

    setTimeout(() => {

        letter.style.display = "block";

        letter.style.opacity = "0";
        letter.style.transform = "translateY(40px)";

        setTimeout(() => {
            letter.style.transition = "0.8s";
            letter.style.opacity = "1";
            letter.style.transform = "translateY(0)";
        }, 50);

    }, 400);

});

// Нажатие "Миссия принята"
acceptBtn.addEventListener("click", () => {

    // Определяем номер текущей миссии
    const currentPage = window.location.pathname.split("/").pop();

    const match = currentPage.match(/mission(\d+)\.html/);

    let nextLink = "mission2.html";

    if (match) {

        const currentMission = parseInt(match[1]);

        if (currentMission < 8) {

            nextLink = `mission${currentMission + 1}.html`;

        } else {

            nextLink = "final.html";

        }

    }

    document.body.innerHTML = `

    <div class="background"></div>

    <div class="container">

        <h1>✔ Поручение зарегистрировано</h1>

        <p class="subtitle">
            Le destin est déjà en marche...
        </p>

        <a class="nextMission" href="${nextLink}">
            ${nextLink === "final.html"
                ? "Завершить игру"
                : "Следующий конверт →"}
        </a>

    </div>

    `;

});
