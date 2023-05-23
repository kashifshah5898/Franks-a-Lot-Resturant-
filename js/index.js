const itemInCart = localStorage.getItem("itemInCart")

const countItems = () => {
    if (itemInCart) {
        const itemLength = itemInCart.split(',').length || 0
        var itemCountElement = document.getElementById("itemCount");
        itemCountElement.textContent = itemLength;
    } else {
        localStorage.setItem("itemInCart", [])
    }
}

countItems();