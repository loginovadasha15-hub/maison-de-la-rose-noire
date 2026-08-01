const openBtn = document.getElementById("openBtn");
const envelope = document.getElementById("envelope");
const seal = document.querySelector(".seal");
const letter = document.getElementById("letter");
const acceptBtn = document.getElementById("acceptBtn");

openBtn.addEventListener("click", () => {

    // скрываем печать
    seal.style.opacity = "0";

    // прячем кнопку
    openBtn.style.display = "none";

    // небольшая анимация конверта
    envelope.style.transform = "translateY(-20px) scale(0.97)";

    setTimeout(() => {

        // показываем письмо
        letter.style.display = "block";

        // плавное появление
        letter.style.opacity = "0";
        letter.style.transform = "translateY(40px)";

        setTimeout(() => {
            letter.style.transition = "0.8s";
            letter.style.opacity = "1";
            letter.style.transform = "translateY(0)";
        }, 50);

    }, 400);

});


acceptBtn.addEventListener("click", () => {

    document.body.innerHTML = `

        <div class="container">

            <h1>✔ Поручение зарегистрировано</h1>

            <p class="subtitle">
                Le destin est déjà en marche...
            </p>

            <a class="nextMission" href="mission2.html">
                Следующий конверт →
            </a>

        </div>

    `;

});
