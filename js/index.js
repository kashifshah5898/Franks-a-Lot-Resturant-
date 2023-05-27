let currentUrl = window.location.href.split('/')
currentUrl = currentUrl[currentUrl.length - 1]
const getItemsInCart = () => {
    return localStorage.getItem("itemInCart")
}

const allRecipes = [
    {
        "item": "Special Offers",
        "data": [{
            "id": "Special1",
            "link": "../assets/images/Enchilada Soup.jpg",
            "itemTitle": "Soup",
            "cardText": "Homemade creamy soup with your choice of fillings",
            "price": "BHD 2.992"
        },
        {
            "id": "Special2",
            "link": "../assets/images/beef fajita sandwich jpg.jpg",
            "itemTitle": "Sandwich",
            "cardText": "4 oz fajita chicken or beef grilled and sandwiched in hoagie bread with onions, bell peppers, cheese, lettuce and tomato. Served with fries & coleslaw",
            "price": "BHD 2.992"
        },
        {
            "id": "Special3",
            "link": "../assets/images/platters-for the slide.jpg",
            "itemTitle": "Pasta",
            "cardText": "2 crispy flour tortillas filled with choice of meat, cheddar cheese, lettuce, tomatoes. served with fries, salsa. sour cream, pico-de-gallo and guacamole", "price": "BHD 2.992"
        },
        ]
    }, {
        "item": "APPETIZERS",
        "data": [{
            "id": "APPETIZERS1",
            "link": "../assets/images/fiesta platter.jpg",
            "itemTitle": "Franks Fiest Platter",
            "cardText": "Experience the ultimate feast with our tantalizing platter at our restaurant. Bursting with a variety of flavors and textures, our platter showcases a selection of delectable dishes that cater to every palate. From succulent meats to fresh seafood and flavorful sides, our platter is a culinary delight that will leave you satisfied and craving for more.",
            "price": "BHD 2.992"
        },
        {
            "id": "APPETIZERS2",
            "link": "../assets/images/Cheesy Pesto Burrito-1.jpg",
            "itemTitle": "Corn Tortilla Chips With Salsa",
            "cardText": "Treat your taste buds to a burst of flavor with our irresistible chips and salsa at our restaurant. Our freshly made crispy chips perfectly complement the zesty and tangy salsa, creating a tantalizing combination. Each bite delivers a delightful crunch and a savory kick, making it a must-have appetizer for every meal.",
            "price": "BHD 2.992"
        },
        {
            "id": "APPETIZERS3",
            "link": "../assets/images/cheese fries.jpg",
            "itemTitle": "Cheese fries",
            "cardText": "Indulge in the ultimate comfort food experience with our mouthwatering cheese fries at our restaurant. Crispy golden fries smothered in a generous layer of melted cheese create a heavenly combination that will satisfy your cravings. Each bite offers a perfect harmony of savory, cheesy goodness that will leave you wanting more.",
            "price": "BHD 1.02"
        },
        {
            "id": "APPETIZERS4",
            "link": "../assets/images/chicken fingers.png",
            "itemTitle": "Chicken Fingers",
            "cardText": "Savor the juicy and flavorful chicken fingers from our restaurant. Made with premium cuts of chicken, each finger is carefully seasoned, breaded, and cooked to perfection. With a crispy exterior and tender, moist interior, our chicken fingers are a delightful treat that will satisfy your cravings for delicious, handheld comfort food.", "price": "BHD 2.992"
        }, {
            "id": "APPETIZERS5",
            "link": "../assets/images/bbq.jfif",
            "itemTitle": "BBQ",
            "cardText": "Experience the tantalizing flavors of BBQ at our restaurant. Our skilled chefs meticulously prepare and slow-cook the finest meats, infusing them with a mouthwatering blend of smoky and savory BBQ goodness. From tender ribs to succulent pulled pork, each bite is a savory delight that will transport your taste buds to BBQ bliss.", "price": "BHD 2.992"
        },
        ]
    }, {
        "item": "SOUPS",
        "data": [{
            "id": "SOUPS1",
            "link": "../assets/images/cream mushroom soup.jpg",
            "itemTitle": "Creamy Mushroom Soup",
            "cardText": "Indulge in the creamy and comforting delight of our mushroom soup at our restaurant. Made with the finest mushrooms and a velvety base, each spoonful is a burst of earthy flavors and creamy goodness. This soul-warming soup is the perfect appetizer to savor and will leave you craving for more with every spoonful.",
            "price": "BHD 2.992"
        },
        {
            "id": "SOUPS2",
            "link": "../assets/images/Enchilada Soup.jpg",
            "itemTitle": "Enchilada Soup",
            "cardText": "Experience the vibrant and flavorful enchilada soup at our restaurant. This tantalizing soup combines the richness of tomato broth with the perfect blend of spices, tender chicken, and hearty vegetables. Topped with cheese and crispy tortilla strips, each spoonful offers a delicious burst of Mexican-inspired flavors that will leave you craving for more.",
            "price": "BHD 2.992"
        }
        ]
    }, {
        "item": "SALADS",
        "data": [{
            "id": "SALADS1",
            "link": "../assets/images/tacos.jpg",
            "itemTitle": "Taco Salads",
            "cardText": "Introducing our mouthwatering taco salad, a culinary delight that combines the best of Tex-Mex flavors in one vibrant dish. Crisp lettuce, seasoned ground beef, zesty salsa, creamy guacamole, and a sprinkle of cheddar cheese dance together, offering a tantalizing explosion of taste with every bite. Experience taco bliss at our restaurant today!",
            "price": "BHD 2.992"
        },
        {
            "id": "SALADS2",
            "link": "../assets/images/shrimp Avocado Salad1.jpg",
            "itemTitle": "Shrimp & Avacado Salad",
            "cardText": "Indulge in the exquisite flavors of our shrimp and avocado salad, a perfect blend of freshness and decadence. Succulent shrimp, ripe avocado slices, crisp mixed greens, and a tangy citrus dressing create a symphony of tastes that will leave your palate craving for more. Dive into this delightful culinary masterpiece at our restaurant.",
            "price": "BHD 2.992"
        }
        ]
    }, {
        "item": "STEAK BURRITO",
        "data": [{
            "id": "STEAK1",
            "link": "../assets/images/beef steak- for the slide.jpg",
            "itemTitle": "Steak Burrito",
            "cardText": "Savor the rich and savory delight of our steak burrito, a true carnivore's dream come true. Tender, juicy steak grilled to perfection, wrapped in a warm flour tortilla along with flavorful rice, beans, cheese, and a medley of fresh toppings. Prepare for a burst of bold flavors that will leave you fully satisfied. Experience burrito bliss at our restaurant today!",
            "price": "BHD 2.992"
        }
        ]
    }]


const countItems = () => {
    let itemInCart = getItemsInCart()

    if (itemInCart) {
        const itemLength = JSON.parse(itemInCart).length
        var itemCountElement = document.getElementById("itemCount");
        itemCountElement.textContent = itemLength;
    } else {
        localStorage.setItem("itemInCart", '[]')
        var itemCountElement = document.getElementById("itemCount");
        itemCountElement.textContent = 0;
    }
}

const showDataToPage = () => {
    let showingData = document.getElementById("specificClass");
    showingData.innerHTML = "";
    let updatedHtmlData = ""


    let element = ""
    let element1 = ""
    let tempElement = ""

    for (let index = 0; index < allRecipes.length; index++) {
        element = `<h4 id="${allRecipes[index].item}" class="mt-4 text-white fontSize40">${allRecipes[index].item}</h4>
        <br />
        `
        // debugger
        for (let innerArray = 0; innerArray < allRecipes[index].data.length; innerArray++) {
            tempElement = `
            <div class="card cardWidth col-lg-4 col-sm-12 col-md-12 ps-4 mt-2 pt-2 ">
                <img
                    class="card-img-top "
                    src="${allRecipes[index].data[innerArray].link}"
                    alt="image not found"
                />
                <div class="card-body">
                    <h5 class="card-title">${allRecipes[index].data[innerArray].itemTitle}</h5>
                    <p class="card-text">
                    ${allRecipes[index].data[innerArray].cardText}
                    </p>
                </div>
                <div class="card-footer cardFooter">
                    <small class="text-muted">${allRecipes[index].data[innerArray].price}</small>
                    <button class="addToCarTBtn" onclick="addToCart('${allRecipes[index].data[innerArray].id}')" >Add To Cart</button>
                </div >
            </div >
    `

            element1 += tempElement;
            tempElement = ""

        }

        updatedHtmlData += element + element1 + `<hr class="mt2em" />`
        element1 = ""


    }

    showingData.innerHTML = updatedHtmlData

}

const search = () => {
    let insertedValue = document.getElementById('searchId').value;
    let showingData = document.getElementById("specificClass");
    let data = allRecipes

    if (insertedValue) {
        insertedValue = insertedValue.toLowerCase();
        for (let item of data) {
            for (let itemData of item.data) {
                if (itemData.itemTitle.toLowerCase() === insertedValue) {
                    return showingData.innerHTML = `
    <div class="card col-lg-4 col-sm-12 col-md-12 ps-4 mt-2 pt-2" >
                        <img
                            class="card-img-top "
                            src="${itemData.link}"
                            alt="image not found"
                        />
                        <div class="card-body">
                            <h5 class="card-title">${itemData.itemTitle}</h5>
                            <p class="card-text">
                            ${itemData.cardText}
                            </p>
                        </div>
                        <div class="card-footer cardFooter">
                            <small class="text-muted">${itemData.price}</small>
                            <button class="addToCarTBtn"  onclick="addToCart('${itemData.id}')" >Add To Cart</button>
                        </div>
                    </div >
    `;
                }
            }
        }
        return showingData.innerHTML = `<h1 class="text-white center">No Item Found </h1>`; // Item not found

    } else {
        showDataToPage()
    }

}

const addToCart = (id) => {
    let tempArr = getItemsInCart()
    tempArr = tempArr && JSON.parse(tempArr)
    tempArr.push(id);
    var itemCountElement = document.getElementById("itemCount");
    itemCountElement.textContent = tempArr.length;
    localStorage.setItem("itemInCart", JSON.stringify(tempArr))
    alert("Item is successfully added to cart")
}

const showItemsInCart = () => {
    let showingData = document.getElementById("cartItemsClass");
    let totalBalance = document.getElementById("totalBalance");
    totalBalance.innerHTML = 0;
    showingData.innerHTML = "";
    let updatedHtmlData = ""


    let element = ""
    let element1 = ""
    let tempElement = ""
    let checkOutBalance = 0


    let itemFromCart = getItemsInCart()

    itemFromCart = JSON.parse(itemFromCart);

    for (let item = 0; item < allRecipes.length; item++) {
        for (let innerArray = 0; innerArray < allRecipes[item].data.length; innerArray++) {
            if (itemFromCart.includes(allRecipes[item].data[innerArray].id)) {
                tempElement = `
                        <div class="card cardWidth col-lg-4 col-sm-12 col-md-12 ps-4 mt-2 pt-2 ">
                            <img
                                class="card-img-top "
                                src="${allRecipes[item].data[innerArray].link}"
                                alt="image not found"
                            />
                            <div class="card-body">
                                <h5 class="card-title">${allRecipes[item].data[innerArray].itemTitle}</h5>
                                <p class="card-text">
                                ${allRecipes[item].data[innerArray].cardText}
                                </p>
                            </div>
                            <div class="card-footer cardFooter">
                                <small class="text-muted">${allRecipes[item].data[innerArray].price}</small>
                                <small class="text-muted">${countOccurrences(itemFromCart, allRecipes[item].data[innerArray].id)} items</small>
                            </div >
                        </div >
                `
                checkOutBalance += parseFloat(allRecipes[item].data[innerArray].price.split(" ")[1]) * parseFloat(countOccurrences(itemFromCart, allRecipes[item].data[innerArray].id))
                element1 += tempElement;
                tempElement = ""
            }

        }
        updatedHtmlData += element + element1;
        element1 = ""

    }

    totalBalance.innerHTML = checkOutBalance

    showingData.innerHTML = updatedHtmlData ? updatedHtmlData : `<h1 class="text-white center">No Item Found </h1>`
}

function countOccurrences(arr, item) {

    return arr.reduce(function (count, element) {
        if (element === item) {
            return count + 1;
        }
        return count;
    }, 0);
}

countItems();

if (currentUrl === 'cart.html') {
    showItemsInCart()
} else if (currentUrl === '' || currentUrl === 'menu.html') {
    showDataToPage()
}