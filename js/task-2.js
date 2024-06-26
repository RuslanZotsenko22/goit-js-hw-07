const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];
// Додаємо стилі за допомогою JavaScript
const style = document.createElement('style');
style.textContent = `
  .gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .gallery li {
    flex: 1 1 calc(33.333% - 10px);
    box-sizing: border-box;
  }
  
  .gallery img {
    width: 100%;
    height: auto;
    display: block;
  }
`;
document.head.appendChild(style);

// Створюємо галерею з перших трьох зображень
const gallery = document.querySelector('.gallery');

const galleryMarkup = images.slice(0, 3).map(({ url, alt }) => 
  `<li><img src="${url}" alt="${alt}"></li>`
).join('');

gallery.insertAdjacentHTML('beforeend', galleryMarkup);
