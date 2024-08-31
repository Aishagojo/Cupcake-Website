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


function showCategory(category) {
  
  localStorage.setItem('selectedCategory', category);

  var generatedContent = document.getElementById("generatedContent");


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

  
  var flexContainer = document.createElement('div');
  flexContainer.classList.add('flex-container');

  
  if (items.hasOwnProperty(category)) {
      items[category].forEach(item => {
          var card = document.createElement('div');
          card.classList.add('card');

          
          var imageElement = document.createElement('img');
          imageElement.src = item.image;
          imageElement.alt = item.name + " Image"; // Set alt text
          card.appendChild(imageElement);

          
          var nameElement = document.createElement('div');
          nameElement.textContent = item.name;
          card.appendChild(nameElement);

          
          var priceElement = document.createElement('div');
          priceElement.textContent = item.price;
          card.appendChild(priceElement);

          flexContainer.appendChild(card);
      });

      generatedContent.appendChild(flexContainer);
  } else {
      
      generatedContent.innerHTML = "<p>No items available for the selected category.</p>";
  }
}


function loadSelectedCategory() {
  var selectedCategory = localStorage.getItem('selectedCategory');


  showCategory(selectedCategory || 'Cake');
}


window.onload = loadSelectedCategory;

function showSpecialOfferBox() {
    var specialOfferContainer = document.getElementById("specialOfferContainer");


    specialOfferContainer.innerHTML = "";

 
    var specialOffer = {
        name: 'Special Offer Cake',
        image: 'images/special_offer_cake.jpg',
        offerMessage: 'Get 15% off your first order!',
    };

   
    var specialOfferBox = document.createElement('div');
    specialOfferBox.classList.add('special-offer-box');

    var imageElement = document.createElement('img');
    imageElement.src = specialOffer.image;
    imageElement.alt = specialOffer.name + " Image";
    specialOfferBox.appendChild(imageElement);

    var offerMessageElement = document.createElement('div');
    offerMessageElement.textContent = specialOffer.offerMessage;
    offerMessageElement.classList.add('offer-message'); 
    specialOfferBox.appendChild(offerMessageElement);

    specialOfferContainer.appendChild(specialOfferBox);
}


window.onload = showSpecialOfferBox;


function showSpecialOfferBox() {
  var specialOfferContainer = document.getElementById("specialOfferContainer");


  specialOfferContainer.innerHTML = "";


  var specialOffer = {
      name: 'Special Offer Cake',
      image: 'images/specel offer.jpg',
      offerMessage: 'Get 15% off your first order!',
  };


  var specialOfferBox = document.createElement('div');
  specialOfferBox.classList.add('special-offer-box');


  var imageElement = document.createElement('img');
  imageElement.src = specialOffer.image;
  imageElement.alt = specialOffer.name + " Image";
  specialOfferBox.appendChild(imageElement);


  var offerMessageElement = document.createElement('div');
  offerMessageElement.textContent = specialOffer.offerMessage;
  offerMessageElement.classList.add('offer-message');
  specialOfferBox.appendChild(offerMessageElement);

  var claimButton = document.createElement('button');
  claimButton.textContent = 'Claim';
  claimButton.classList.add('claim-button');
  specialOfferBox.appendChild(claimButton);

  specialOfferContainer.appendChild(specialOfferBox);
}


window.onload = showSpecialOfferBox;

