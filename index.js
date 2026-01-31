let activeinfo = null;
 document.querySelectorAll('.gallery-img').forEach(img => {
  img.addEventListener('click', () => {
    if (activeinfo) {
      activeinfo.remove();
      activeinfo = null
}

const info = document.createElement('div');

info.className = "wrap";
const message = `i want to buy ${img.dataset.name} which is ${img.dataset.price}`;
const encoded = encodeURIComponent(message);
const waLink = `<a href="https://wa.me/2348029321892?text=${encoded}"
target = "_blank">order via WhatsApp </a>`;

info.innerHTML = `<p class="name">${img.dataset.name}</p>
<p class="price">${img.dataset.price}</p>
<p>${waLink}</p>`;

img.insertAdjacentElement('afterend', info);
activeinfo = info;
});
});
document.getElementById('shoe').addEventListener('click', () => {
  window.location.href = "shoe.html"
});
document.getElementById('jkt').addEventListener('click', () => {
  window.location.href = "jacket.html"
});