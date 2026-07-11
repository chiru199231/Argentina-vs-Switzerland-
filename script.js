const container = document.getElementById("ticketContainer");

tickets.forEach(data => {

const card = document.createElement("div");
card.className = "ticket";

card.innerHTML = `

<div class="front">

<div class="ticketNo">
Ticket ${data.ticket}
</div>

<h2>🇦🇷 Argentina</h2>

<h3>VS</h3>

<h2>🇨🇭 Switzerland</h2>

<input
type="password"
placeholder="Enter Code"
id="code${data.ticket}"
>

<button onclick="reveal(${data.ticket})">
Reveal Players
</button>

</div>

<div class="back" id="back${data.ticket}">

<h2>🎉 Congratulations 🎉</h2>

<div class="player argentina">
🇦🇷
${data.argentina}
</div>

<div class="vs">
⚽
</div>

<div class="player swiss">
🇨🇭
${data.switzerland}
</div>

</div>

`;

container.appendChild(card);

});

function reveal(ticket){

const input =
document.getElementById("code"+ticket);

const value =
input.value.trim().toUpperCase();

if(value==="GOAT"){

const ticketCard =
input.parentElement.parentElement;

ticketCard.classList.add("flip");

}else{

alert("Wrong Code!");

}

}
