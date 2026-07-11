const container = document.getElementById("ticketContainer");
const btn = document.getElementById("unlockBtn");

tickets.forEach((data) => {

    const card = document.createElement("div");

    card.className = "ticket";

    if (data.ticket >= 14) {
        card.classList.add("star");
    }

    card.innerHTML = `

    <div class="front">

        <div class="ticketNo">
            Ticket ${data.ticket}
        </div>

        <div class="lock">🔒</div>

        <small>Locked</small>

    </div>

    <div class="back">

        <div class="player">
            🇦🇷<br>
            ${data.argentina}
        </div>

        <br>

        <div style="font-size:22px;">
            ⚽
        </div>

        <br>

        <div class="player">
            🇨🇭<br>
            ${data.switzerland}
        </div>

    </div>

    `;

    container.appendChild(card);

});

btn.addEventListener("click", () => {

    const code =
        document
        .getElementById("masterCode")
        .value
        .trim()
        .toUpperCase();

    if (code !== "GOAT") {

        alert("Wrong Code!");

        return;

    }

    document
        .querySelectorAll(".ticket")
        .forEach(card => {

            card.classList.add("flip");

        });

    btn.innerHTML = "✅ TICKETS UNLOCKED";

    btn.disabled = true;

});
