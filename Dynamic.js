//Dynamic adding articles
document.addEventListener('DOMContentLoaded', function () {
    const home = document.getElementById('home');
    const maxProducts = 8;
    
    // 1. CLEAR HOME (to prevent double-loading on refreshes)
    home.innerHTML = ''; 

    // Shuffle and get 8 random products
    const shuffledProducts = [...products].sort(() => 0.5 - Math.random());
    const randomProducts = shuffledProducts.slice(0, maxProducts);

    // Populate Home Section
    randomProducts.forEach(product => {
        //product.category === 'ring' ? 'style="grid-row-end: span 3; height:auto;"' : '';
        let cardClass = '';
        if(product.category==='Ring' || product.category==='Mini_Hanging'){
            cardClass='style="grid-row-end: span 3;height:auto;"';
        }
        home.innerHTML += `
            <div class="product-card" ${cardClass}>
              <img src="${product.image}" alt="${product.name}" class="catalogueimg ${product.category}-img" loading="lazy">
              <h3>${product.name}</h3>
              <p class="price">₹${product.price}</p>
              <button onclick="contactWp(this)">Order Now</button>
            </div>
        `;
    });

    home.innerHTML += `<button class='buttton' onclick="showSection('CategoryDropDowns')">proceed to catalogue</button>`;
    
    // 2. Populate Category Sections
    products.forEach(product => {
        let cname = document.getElementById(product.category);
        if (cname) { // Safety check to ensure the category ID exists in HTML
            cname.innerHTML += `
              <div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="catalogueimg ${product.category}-img" loading="lazy">
                <h3>${product.name}</h3>
                <p class="price">₹${product.price}</p>
                <button onclick="contactWp(this)">Order Now</button>
              </div>
            `;
        }
    });

    // 3. INITIAL STATE: Hide all sections except Home
    showSection('home'); 

    //for opening modals via urls
    const urlParams = new URLSearchParams(window.location.search);
    const productSlug = urlParams.get('product');

    if (productSlug) {
    // Find the product that matches the slug
    const sharedProduct = products.find(p => p.name.replace(/\s+/g, '-').toLowerCase() === productSlug);
    if (sharedProduct) {
        openModal(sharedProduct.image);
    }
}

});



// Get the modal and images
const modal = document.getElementById('previewModal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');
const images = document.getElementsByClassName('catalogueimg'); // No dot!


document.addEventListener('click', function (e) {
    if (e.target.classList.contains('catalogueimg')) {
        const productID = e.target.alt.replace(/\s+/g, '-').toLowerCase()// Create a slug from the name
        
        
        // 1. Open Modal
        openModal(e.target.src);

        // 2. Change URL without refreshing
        // format: domain.com/?product=product-name
        history.pushState({ modalOpen: true }, "", `?product=${productID}`);
    }
});

function openModal(src) {
    modal.style.display = 'block';
    modalImg.src = src;
}

function closeModal() {
    modal.style.display = 'none';
    // If the URL has a query string, remove it when closing manually
    if (window.location.search.includes('product')) {
        history.pushState({ modalOpen: false }, "", window.location.pathname);
    }
}

// Close button click
closeBtn.addEventListener('click', closeModal);

// Click outside modal
window.addEventListener('click', function (event) {
    if (event.target == modal) {
        closeModal();
    }
});
// This listener handles BOTH Back and Forward buttons
window.addEventListener('popstate', function (event) {
    const urlParams = new URLSearchParams(window.location.search);
    const productSlug = urlParams.get('product');

    if (productSlug) {
        // 1. User went FORWARD (or clicked a link) to a product URL
        const sharedProduct = products.find(p => p.name.replace(/\s+/g, '-').toLowerCase() === productSlug);
        if (sharedProduct) {
            openModal(sharedProduct.image);
        }
    } else {
        // 2. User went BACK to the main page (no product param in URL)
        modal.style.display = 'none';
    }
});
 
