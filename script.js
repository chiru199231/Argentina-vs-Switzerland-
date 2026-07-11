const container = document.getElementById("ticketContainer");
const unlockBtn = document.getElementById("unlockBtn");

function createTickets() {

    tickets.forEach(data => {

        const ticket = document.createElement("div");

        ticket.className = "ticket";

        if(data.ticket >= 14){
            ticket.classList.add("star");
        }

        ticket.innerHTML = `

        <div class="front">

            <div class="ticketNo">
                🎫 Ticket ${data.ticket}
            </div>

            <div class="lock">🔒</div>

            <p>Locked</p>

        </div>

        <div class="back">

            <div class="ticketNo">
                🎫 Ticket ${data.ticket}
            </div>

            <div class="player">
                🇦🇷<br>
                ${data.argentina}
            </div>

            <div class="vs">
                ⚽
            </div>

            <div class="player">
                🇨🇭<br>
                ${data.switzerland}
            </div>

        </div>

        `;

        container.appendChild(ticket);

    });

}

createTickets();

unlockBtn.addEventListener("click", () => {

    const code = document
        .getElementById("masterCode")
        .value
        .trim()
        .toUpperCase();

    if(code !== "GOAT"){

        alert("❌ Wrong Code");
        return;

    }

    document.querySelectorAll(".ticket").forEach(ticket => {

        ticket.classList.add("flip");

    });

    unlockBtn.innerHTML = "✅ TICKETS UNLOCKED";
    unlockBtn.disabled = true;

});
