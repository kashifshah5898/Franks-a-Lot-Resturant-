const itemInCart = localStorage.getItem("itemInCart")

const allRecipes = [{
    "item": "Special Offers",
    "data": [{
        "link": "https://source.unsplash.com/400x305/?Soup",
        "itemTitle": "Soup",
        "cardText": "Experience the comforting and flavorful soups at our restaurant. From hearty classics to innovative creations, our soups are crafted with care using the finest ingredients.Indulge in a warm and satisfying bowl today!",
        "price": "BHD 2.992"
    },
    {
        "link": "https://source.unsplash.com/400x305/?Sandwich",
        "itemTitle": "Sandwich",
        "cardText": "Savor the deliciousness of our sandwiches at our restaurant. Made with fresh ingredients and a variety of mouthwatering fillings, our sandwiches are a perfect choice for a satisfying and convenient meal.Try one today!",
        "price": "BHD 2.992"
    },
    {
        "link": "https://source.unsplash.com/400x305/?Coffee",
        "itemTitle": "Coffee",
        "cardText": " Awaken your senses with the rich aroma and bold flavors of our coffee at our restaurant.Sourced from the finest beans and expertly brewed, our coffee is the perfect pick- me - up for any time of the day.Treat yourself to a delightful cup today!",
        "price": "BHD 1.02"
    },
    {
        "link": "https://source.unsplash.com/400x305/?Pasta",
        "itemTitle": "Pasta",
        "cardText": "Experience the comforting and flavorful soups at our restaurant. From hearty classics to innovative creations, our soups are crafted with care using the finest ingredients.Indulge in a warm and satisfying bowl today!", "price": "BHD 2.992"
    }, {
        "link": "https://source.unsplash.com/400x305/?Soup", "itemTitle": "", "cardText": "Experience the comforting and flavorful soups at our restaurant. From hearty classics to innovative creations, our soups are crafted with care using the finest ingredients.Indulge in a warm and satisfying bowl today!", "price": "BHD 2.992"
    },
    ]
}]


const countItems = () => {
    if (itemInCart) {
        const itemLength = itemInCart.split(',').length || 0
        var itemCountElement = document.getElementById("itemCount");
        itemCountElement.textContent = itemLength;
    } else {
        localStorage.setItem("itemInCart", [])
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
        element = `<h4>${allRecipes[index].item}</h4>
        <br />
        `
        // debugger
        for (let innerArray = 0; innerArray < allRecipes[index].data.length; innerArray++) {
            tempElement = `
            <div class="card col-lg-4 col-sm-12 col-md-12 ps-4 mt-2 pt-2">
                <img
                    class="card-img-top"
                    src="${allRecipes[index].data[innerArray].link}"
                    alt="image not found"
                />
                <div class="card-body">
                    <h5 class="card-title">${allRecipes[index].data[innerArray].itemTitle}</h5>
                    <p class="card-text">
                    ${allRecipes[index].data[innerArray].cardText}
                    </p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">${allRecipes[index].data[innerArray].price}</small>
                </div>
            </div>
            `

            element1 += tempElement;
            tempElement = ""

        }

        updatedHtmlData += element + element1


    }
    // const hr = `< class="mt-2 mb-4" hr />`
    const hr = ""
    showingData.innerHTML = updatedHtmlData + hr

}


showDataToPage()
countItems();