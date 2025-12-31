const catalog = document.getElementById("catalog");

products.forEach(item => {
const card = document.createElement("div");
card.className = "card";

card.innerHTML = `
<img src="${item.image}" alt="${item.name}">
<div class="card-content">
<h3>${item.name}</h3>
<p>${item.type}</p>
<p class="price">${item.price}</p>
<span class="status ${item.status === "Available" ? "available" : "rented"}">
${item.status}
</span>
<a class="button" href="https://wa.me/628xxxxxxxxx" target="_blank">
Chat WhatsApp
</a>
</div>
`;

catalog.appendChild(card);
});
