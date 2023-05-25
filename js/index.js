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
            "link": "https://source.unsplash.com/400x305/?Soup",
            "itemTitle": "Soup",
            "cardText": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            "price": "BHD 2.992"
        },
        {
            "id": "Special2",
            "link": "https://source.unsplash.com/400x305/?Sandwich",
            "itemTitle": "Sandwich",
            "cardText": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            "price": "BHD 2.992"
        },
        {
            "id": "Special3",
            "link": "https://source.unsplash.com/400x305/?Coffee",
            "itemTitle": "Coffee",
            "cardText": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            "price": "BHD 1.02"
        },
        {
            "id": "Special4",
            "link": "https://source.unsplash.com/400x305/?Pasta",
            "itemTitle": "Pasta",
            "cardText": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", "price": "BHD 2.992"
        }, {
            "id": "Special5",
            "link": "https://source.unsplash.com/400x305/?Noodles", "itemTitle": "Noodles", "cardText": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", "price": "BHD 2.992"
        },
        ]
    }, {
        "item": "APPETIZERS",
        "data": [{
            "id": "APPETIZERS1",
            "link": "https://source.unsplash.com/400x305/?Platter",
            "itemTitle": "Franks Fiest Platter",
            "cardText": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            "price": "BHD 2.992"
        },
        {
            "id": "APPETIZERS2",
            "link": "https://source.unsplash.com/400x305/?Chips",
            "itemTitle": "Corn Tortilla Chips With Salsa",
            "cardText": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            "price": "BHD 2.992"
        },
        {
            "id": "APPETIZERS3",
            "link": "https://source.unsplash.com/400x305/?Cheese",
            "itemTitle": "Cheese fries",
            "cardText": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            "price": "BHD 1.02"
        },
        {
            "id": "APPETIZERS4",
            "link": "https://source.unsplash.com/400x305/?Chicken",
            "itemTitle": "Chicken Fingers",
            "cardText": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", "price": "BHD 2.992"
        }, {
            "id": "APPETIZERS5",
            "link": "https://source.unsplash.com/400x305/?Bbq",
            "itemTitle": "BBQ",
            "cardText": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", "price": "BHD 2.992"
        },
        ]
    }, {
        "item": "SOUPS",
        "data": [{
            "id": "SOUPS1",
            "link": "https://source.unsplash.com/400x305/?Soup",
            "itemTitle": "Creamy Mushroom Soup",
            "cardText": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            "price": "BHD 2.992"
        },
        {
            "id": "SOUPS2",
            "link": "https://source.unsplash.com/400x305/?Sandwich",
            "itemTitle": "Enchilada Soup",
            "cardText": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            "price": "BHD 2.992"
        }
        ]
    }, {
        "item": "SALADS",
        "data": [{
            "id": "SALADS1",
            "link": "https://source.unsplash.com/400x305/?Salad",
            "itemTitle": "Taco Salads",
            "cardText": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            "price": "BHD 2.992"
        },
        {
            "id": "SALADS2",
            "link": "https://source.unsplash.com/400x305/?Avocado",
            "itemTitle": "Shrimp & Avacado Salad",
            "cardText": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            "price": "BHD 2.992"
        }
        ]
    }, {
        "item": "STEAK BURRITO",
        "data": [{
            "id": "STEAK1",
            "link": "https://source.unsplash.com/400x305/?Steak",
            "itemTitle": "Steak Burrito",
            "cardText": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            "price": "BHD 2.992"
        }
        ]
    }]


const countItems = () => {
    let itemInCart = getItemsInCart()
    if (itemInCart) {
        const itemLength = itemInCart.split(',').length
        var itemCountElement = document.getElementById("itemCount");
        itemCountElement.textContent = itemLength - 1;
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
    <div div class="card col-lg-4 col-sm-12 col-md-12 ps-4 mt-2 pt-2" >
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
    showingData.innerHTML = "";
    let updatedHtmlData = ""


    let element = ""
    let element1 = ""
    let tempElement = ""


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

                element1 += tempElement;
                tempElement = ""
            }

        }
        updatedHtmlData += element + element1;
        element1 = ""

    }

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