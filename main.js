const products = items.results

let productsHtml = products.map (function (item) {
    return `<div class="product-item">
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

let navHtml = `<nav id="nav-bar">
                <h1 id="etsy">Etsy</h1>
                <div type="text" id="search-bar">
                    <input type="image" <i class="fa fa-search" aria-hidden="true"></i></input>
                    </div>
                <button id="sign-in" style="border:none;">Sign In</button>
                <button id="cart" class="fa fa-shopping-cart"></button>
            </nav>
            <div id="dropdown">
                <ul id="categories">
                    <li><a id="valentine" href="#">Valentine's Day<li>
                    <li><a id="jewelry" href="#">Jewelry & Accessories<li>
                    <li><a id="clothing" href="#">Clothing & Shoes<li>
                    <li><a id="home" href="#">Home & Living<li>
                    <li><a id="wedding" href="#">Wedding & Party<li>
                    <li><a id="toys" href="#">Toys & Entertainment<li>
                    <li><a id="arts" href="#">Arts & Collectibles<li>
                    <li><a id="craft" href="#">Craft Supplies<li>
                    <li><a id="gift" href="#">Gifts & Gift Cards<li>
                </ul>
            <div>
                <button class="filters" id="arrival">Estimated Arrival
                </button>
                <button class="filters" id="filter">All filters</button>
                <button class="filters" id="save">heart</button>
                <button class="filters" id="sort">sort</button>
            </div>
            </div>`

document.querySelector('#nav').innerHTML = navHtml

// let footerHtml = `<footer>
//                     <span></span>
//                 </footer>`