const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");
menuBtn.onclick = ()=>{
  items.classList.add("active");
  menuBtn.classList.add("hide");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}
cancelBtn.onclick = ()=>{
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  searchBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  form.classList.remove("active");
  cancelBtn.style.color = "#ff3d00";
}
searchBtn.onclick = ()=>{
  form.classList.add("active");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}

// Function to show category and persist the selected category
function showCategory(category) {
  // Store the selected category in localStorage
  localStorage.setItem('selectedCategory', category);

  var generatedContent = document.getElementById("generatedContent");

  // Clear previous content
  generatedContent.innerHTML = "";

  // Array of objects, each containing image source, name, and price for a specific category
  var items = {
      'Cake': [
          { name: 'Chocolate Cake', price: '$19.99', image: 'images/cake1.png' },
          { name: 'Vanilla Cake', price: '$22.99', image: 'images/cake2.png' },
          { name: 'Chocolate Cake', price: '$19.99', image: 'images/cake1.png' },
          { name: 'Vanilla Cake', price: '$22.99', image: 'images/cake2.png' },
      ],
      'Cupcake': [
          { name: 'Vegan Vanilla Cupcakes', price: '$10', image: 'images/cupcake1.png' },
          { name: 'Vegan Vanilla Cupcakes', price: '$10', image: 'images/cupcake2.png' },
          { name: 'Vegan Vanilla Cupcakes', price: '$10', image: 'images/cupcake1.png' },
          { name: 'Vegan Vanilla Cupcakes', price: '$10', image: 'images/cupcake1.png' },
      ]
  };

  // Create a flex container for the category
  var flexContainer = document.createElement('div');
  flexContainer.classList.add('flex-container');

  // Create a card for each item in the category
  if (items.hasOwnProperty(category)) {
      items[category].forEach(item => {
          var card = document.createElement('div');
          card.classList.add('card');

          // Create an image element
          var imageElement = document.createElement('img');
          imageElement.src = item.image;
          imageElement.alt = item.name + " Image"; // Set alt text
          card.appendChild(imageElement);

          // Create a div for name
          var nameElement = document.createElement('div');
          nameElement.textContent = item.name;
          card.appendChild(nameElement);

          // Create a div for price
          var priceElement = document.createElement('div');
          priceElement.textContent = item.price;
          card.appendChild(priceElement);

          flexContainer.appendChild(card);
      });

      generatedContent.appendChild(flexContainer);
  } else {
      // Handle case when category is not found (optional)
      generatedContent.innerHTML = "<p>No items available for the selected category.</p>";
  }
}

// Function to load the selected category from localStorage and show it
function loadSelectedCategory() {
  // Retrieve the selected category from localStorage
  var selectedCategory = localStorage.getItem('selectedCategory');

  // Show the selected category (or a default category if none is found)
  showCategory(selectedCategory || 'Cake');
}

// Call the function to load and show the selected category when the page loads
window.onload = loadSelectedCategory;

// Function to show special offer box
function showSpecialOfferBox() {
    var specialOfferContainer = document.getElementById("specialOfferContainer");

    // Clear previous content
    specialOfferContainer.innerHTML = "";

    // Special offer details
    var specialOffer = {
        name: 'Special Offer Cake',
        image: 'images/special_offer_cake.jpg',
        offerMessage: 'Get 15% off your first order!',
    };

    // Create a box for the special offer
    var specialOfferBox = document.createElement('div');
    specialOfferBox.classList.add('special-offer-box');

    // Create an image element for the special offer
    var imageElement = document.createElement('img');
    imageElement.src = specialOffer.image;
    imageElement.alt = specialOffer.name + " Image";
    specialOfferBox.appendChild(imageElement);

    // Create a div for the offer message
    var offerMessageElement = document.createElement('div');
    offerMessageElement.textContent = specialOffer.offerMessage;
    offerMessageElement.classList.add('offer-message'); // Add a specific class for styling
    specialOfferBox.appendChild(offerMessageElement);

    specialOfferContainer.appendChild(specialOfferBox);
}

// Call the function to show the special offer box when the page loads
window.onload = showSpecialOfferBox;

// Function to show special offer box
function showSpecialOfferBox() {
  var specialOfferContainer = document.getElementById("specialOfferContainer");

  // Clear previous content
  specialOfferContainer.innerHTML = "";

  // Special offer details
  var specialOffer = {
      name: 'Special Offer Cake',
      image: 'images/specel offer.jpg',
      offerMessage: 'Get 15% off your first order!',
  };

  // Create a box for the special offer
  var specialOfferBox = document.createElement('div');
  specialOfferBox.classList.add('special-offer-box');

  // Create an image element for the special offer
  var imageElement = document.createElement('img');
  imageElement.src = specialOffer.image;
  imageElement.alt = specialOffer.name + " Image";
  specialOfferBox.appendChild(imageElement);

  // Create a div for the offer message
  var offerMessageElement = document.createElement('div');
  offerMessageElement.textContent = specialOffer.offerMessage;
  offerMessageElement.classList.add('offer-message');
  specialOfferBox.appendChild(offerMessageElement);

  // Create a button to claim the offer
  var claimButton = document.createElement('button');
  claimButton.textContent = 'Claim';
  claimButton.classList.add('claim-button');
  specialOfferBox.appendChild(claimButton);

  specialOfferContainer.appendChild(specialOfferBox);
}

// Call the function to show the special offer box when the page loads
window.onload = showSpecialOfferBox;

