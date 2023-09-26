let url = "https://fakestoreapi.com/products";
fetch(url)
  .then((data) => {
    return data.json();
  })
  .then((data1) => {
    data1.forEach((a) => {
      let section = document.createElement("section");
      section.innerHTML = `<section class="dja">
<article class="image">
  <div class="dja rating">
    <p>${a.rating.rate}</p>
    <i class="fa-solid fa-star"></i>
    <p class="rating-gap">|</p>
    <p>${a.rating.count}</p>
  </div>
</article>
<article class="bio">
  <p class="category">${a.category}</p>
  <p class="title">${a.title}</p>
  <p class="price">
    <strong>${a.price}</strong>
    <del>${a.price + 50}</del>
  </p>
  <button>Buy</button>
</article>
</section>`;
      document.body.appendChild(section);
      let img = section.children[0].children[0];
      img.style.backgroundImage = `url(${a.image})`;
    });
  });
