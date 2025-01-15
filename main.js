const displays = document.querySelectorAll(".display");

displays.forEach((display) =>{
    const increment = display.querySelector(".increment");
    const decrement = display.querySelector(".decrement");
    const count = display.querySelector(".count");

    let countNum = 1;

    increment.addEventListener("click", ()=>{
        count.innerText = countNum;
        countNum++;
    })

    decrement.addEventListener("click", ()=>{
        if(countNum >= 1){
            count.innerText = countNum;
            countNum--;
        }
    })
})


// Handle Add to Cart button functionality
const addButtons = document.querySelectorAll(".add button");

addButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const productCard = button.closest(".innerH");
        const productName = productCard.querySelector("h1").innerText;
        const productPrice = parseFloat(productCard.querySelector("h3").innerText.replace("Price: ", ""));
        const quantity = parseInt(productCard.querySelector(".count").innerText);

        const totalPrice = productPrice * quantity;

        // Create a product object
        const product = {
            id: productCard.id,
            name: productName,
            quantity: quantity,
            price: productPrice,
            totalPrice: totalPrice,
        };

        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));

        alert("Product added to cart successfully!");
    });
});
