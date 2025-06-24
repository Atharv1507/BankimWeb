//Dynamic adding articles
document.addEventListener('DOMContentLoaded', function () {
    const home = document.getElementById('home');
    const maxProducts=8;
    // Filter out products with category 'ring'
    const filteredProducts = products.filter(product => product.category !== 'ring');

    // Shuffle the filtered products array
    const shuffledProducts = filteredProducts.sort(() => 0.5 - Math.random());

    // Get a slice of the first 8 products
    const randomProducts = shuffledProducts.slice(0, maxProducts);

    randomProducts.forEach(product => {
        home.innerHTML += `
        <div class="product-card">
          <img src="${product.image}" alt="${product.name}" class="catalogueimg" ">
          <h3>${product.name}</h3>
          <p class="price">₹${product.price}</p>
          <button onclick="contactWp(this)">Order Now</button>
        </div>
      `;

    });
    home.innerHTML += `<button class='buttton' onclick="showSection('CategoryDropDowns')">proceed to catalogue</button>`;

    products.forEach(product => {
        let cname = document.getElementById(product.category);
        cname.innerHTML += `
          <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="catalogueimg" ">
            <h3>${product.name}</h3>
            <p class="price">₹${product.price}</p>
            <button onclick="contactWp(this)">Order Now</button>
          </div>
        `;
    });

});



// Get the modal and images
const modal = document.getElementById('previewModal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');
const images = document.getElementsByClassName('catalogueimg'); // No dot!

console.log(images); // Check if elements are found

document.addEventListener('click', function (e) {
    if (e.target.classList.contains('catalogueimg')) {
        console.log('clicked');

        // When user clicks on an image, open the modal
        Array.from(images).forEach(img => {
            img.addEventListener('click', function () {
                console.log('clicked');
                modal.style.display = 'block';
                modalImg.src = this.src;
            });
        });

        // When user clicks on (x), close the modal
        closeBtn.addEventListener('click', function () {
            modal.style.display = 'none';
        });

        // When user clicks anywhere outside the image, close the modal
        window.addEventListener('click', function (event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
        // When user clicks anywhere outside the image, close the modal
        window.addEventListener('click', function (event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });

    }
});

