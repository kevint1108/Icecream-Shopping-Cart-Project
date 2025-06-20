function updateIcecream(layer, imagePath){
    const imgElement = document.getElementById(layer);
    imgElement.src ="assets/" + imagePath;
    imgElement.style.display = "block";
}

function toggleTopping(toppingId, imagePath){
    const toppingElement = document.getElementById(toppingId);
    if (
        toppingElement.style.display === "none" ||
        toppingElement.style.display === ""
    ){
        toppingElement.src = "assets/" + imagePath;
        toppingElement.style.display = "block";
    } else {
        toppingElement.style.display = "none";
    }
}

function addToCart() {
    // Get the shopping cart container
    const cart = document.querySelector(".page2");
    // Create the item cell
    const itemCell = document.createElement("div");
    itemCell.classList.add("item-cell");
    // Create the small image container
    const itemImage = document.createElement("div");
    itemImage.classList.add("item-image");
    // Create a clone of the icecream image and make it smaller (100x100)
    const icecreamClone = document.querySelector(".icecream-container").cloneNode(true);
    icecreamClone.style.width = "100px";
    icecreamClone.style.height = "100px";
    icecreamClone.querySelectorAll("img").forEach((img) => {
    img.style.width = "100px";
    img.style.height = "100px";
    });
    itemImage.appendChild(icecreamClone);
    // Create the description
    const itemDescription = document.createElement("div");
    itemDescription.classList.add("item-description");
    // Get selected icecream, sauce, and toppings for description
    const icecream = document.querySelector('input[name="icecream"]:checked').value.charAt(0).toUpperCase() + document.querySelector('input[name="icecream"]:checked').value.slice(1); 
    const sauce = document.querySelector('input[name="sauce"]:checked').value.charAt(0).toUpperCase() + document.querySelector('input[name="sauce"]:checked').value.slice(1); 
    const toppings = Array.from(document.querySelectorAll('input[name="topping"]:checked')).map((topping) => topping.value.charAt(0).toUpperCase() + topping.value.slice(1)).join(", ") || "No Toppings";
    itemDescription.textContent = `${icecream} Ice Cream, ${sauce} Sauce, ${toppings}`;
    // Append the image and description to item cell
    itemCell.appendChild(itemImage);
    itemCell.appendChild(itemDescription);
    // Add the item cell to the cart
    cart.appendChild(itemCell);
    }