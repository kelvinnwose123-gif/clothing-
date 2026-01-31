const mainImg = document.getElementById('img-display');  
  
const swiper = new Swiper('.swiper-container', {  
  slidesPerView: 3,  
  effect: "coverflow",  
  grabCursor: true,  
  centeredSlides: true,  
  coverflowEffect: {  
    rotate: 50,  
    stretch: 0,  
    depth: 300,  
    modifier: 1,  
    slideShadows: true,  
  },  
  autoplay: {  
    delay: 3000,  
    disableOnInteraction: false, // fix typo  
  },  
  pagination: {  
    el: '.swiper-pagination',  
    clickable: true,  
  },  
  navigation: {  
    nextEl: '.swiper-button-next',  
    prevEl: '.swiper-button-prev',  
  },  
  on: {  
    init() {  
      mainImg.src = this.slides[this.activeIndex].src;  
    },  
    slideChange() {  
      mainImg.src = this.slides[this.activeIndex].src;  
    }  
  }  
});  
  
let infoDiv = null;

// function to update info
function updateInfo() {
  const slide = swiper.slides[swiper.activeIndex];

  const message = `I want to buy ${slide.dataset.name} for ${slide.dataset.price}`;
  const encodedMsg = encodeURIComponent(message);

  if (!infoDiv) {
    infoDiv = document.createElement('div');
    infoDiv.className = 'info-box'; // add a class to the container
    mainImg.insertAdjacentElement('afterend', infoDiv);
  }

  infoDiv.innerHTML = `
    <p class="info-name">${slide.dataset.name}</p>
    <p class="info-price">${slide.dataset.price}</p>
    <a class="info-wa" href="https://wa.me/2348029321892?text=${encodedMsg}" target="_blank">
      Order via WhatsApp
    </a>
  `;
}

// tap main image to show info
mainImg.addEventListener('click', () => {
  updateInfo();
});

// auto update when center slide changes
swiper.on('slideChange', () => {
  if (infoDiv) updateInfo();
});