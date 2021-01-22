const products = items.results

let productsHtml = products.map (function (item) {
    return `
        <div class="product-item">
            <div class=product-bg style="background-image: url(${item.Images[0].url_fullxfull})"></div>
            <h2 class="title">${item.title}</h2>
            <p class="title">${item.Shop.shop_name}</p>
        <div id="rating">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
        </div>
            <strong id="item-price">$${item.price}</strong>
        </div>
        `
}).join('')

document.querySelector('#grid').innerHTML = productsHtml

let navHtml = `<h1 id="etsy">Etsy</h1><div id="search-bar"></div>`

document.querySelector('#nav').innerHTML = navHtml