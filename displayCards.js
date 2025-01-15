document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.getElementById("cart-items");

    // Retrieve cart data from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <tr>
                <td colspan="6">Your cart is empty!</td>
            </tr>
        `;
        return;
    }

    let number = 0;

    // Populate the table with cart data
    cart.forEach((item, index) => {
        const row = document.createElement("tr");
        number++;
        row.innerHTML = `
            <td>${number}</td>
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>${item.price}</td>
            <td>${item.totalPrice}</td>
            <td style="width:200px"><button class="delete-btn" data-index="${index}" style="width:50px; cursor:pointer;">Delete</button></td>
        `;
        cartItemsContainer.appendChild(row);
    });

    // Add event listener to each delete button
    document.querySelectorAll(".delete-btn").forEach((button) => {
        button.addEventListener("click", (event) => {
            const index = event.target.getAttribute("data-index"); // Get the index of the item to delete
            cart.splice(index, 1); // Remove the item from the cart array
            localStorage.setItem("cart", JSON.stringify(cart)); // Update localStorage
            location.reload(); // Reload the page to update the UI
        });
    });
});

// Clear entire cart
document.getElementById("clear-cart").addEventListener("click", () => {
    localStorage.removeItem("cart");
    location.reload(); // Refresh the page to show an empty cart
});
