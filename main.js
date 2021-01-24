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
                <div type="input" id="search-bar">
                <button id="cancel">X</button>
                <button <i id ="mag" class="fa fa-search"></i></button>
                    </div>
                <button id="sign-in"">Sign In</button>
                <button id="cart" class="fa fa-shopping-cart"></button>
            </nav>
            <div id="dropdown">
                <ul class="categories">
                    <li><a id="valentine" href="#">Valentine's Day<li>
                    <li><a id="jewelry" href="#">Jewelry & Accessories<li>
                        <div class="menu"></div>
                    <li><a id="clothing" href="#">Clothing & Shoes<li>
                    <li><a id="home" href="#">Home & Living<li>
                    <li><a id="wedding" href="#">Wedding & Party<li>
                    <li><a id="toys" href="#">Toys & Entertainment<li>
                    <li><a id="arts" href="#">Arts & Collectibles<li>
                    <li><a id="craft" href="#">Craft Supplies<li>
                    <li><a id="gift" href="#">Gifts & Gift Cards<li>
                </ul>
                <div class="filters">
                    <div class="left-filters">
                        <button type="button" class="top-filter-menu">
                            <span class="new-badge">New</span>
                            <span class="menu-label">
                                <span class="arrival">Estimated Arrival <span class="any">Any time</span></span>
                            </span>
                            <button type="button" class="filter-button">
                                <svg id="key" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5,7.6h5.7c0.4,1.2,1.5,2,2.8,2s2.4-0.8,2.8-2H19c0.6,0,1-0.4,1-1s-0.4-1-1-1h-2.7c-0.4-1.2-1.5-2-2.8-2s-2.4,0.8-2.8,2H5 c-0.6,0-1,0.4-1,1S4.4,7.6,5,7.6z M13.5,5.6c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S12.9,5.6,13.5,5.6z"></path><path d="M19,11.1h-7.7c-0.4-1.2-1.5-2-2.8-2s-2.4,0.8-2.8,2H5c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h0.7c0.4,1.2,1.5,2,2.8,2 s2.4-0.8,2.8-2H19c0.6,0,1-0.4,1-1C20,11.5,19.6,11.1,19,11.1z M8.5,13.1c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1s1,0.4,1,1 C9.5,12.7,9.1,13.1,8.5,13.1z"></path><path d="M19,16.6h-1.2c-0.4-1.2-1.5-2-2.8-2s-2.4,0.8-2.8,2H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h7.2c0.4,1.2,1.5,2,2.8,2s2.4-0.8,2.8-2 H19c0.6,0,1-0.4,1-1S19.6,16.6,19,16.6z M15,18.6c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S15.6,18.6,15,18.6z"></path></svg>
                                <span>All Filters</span>
                                </span>
                            </button>
                    </div>
                    <div class="right-filters">
                    <span>113,127 results, with Ads<span>
                        <button id="sort-fav"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12,21C10.349,21,2,14.688,2,9,2,5.579,4.364,3,7.5,3A6.912,6.912,0,0,1,12,5.051,6.953,6.953,0,0,1,16.5,3C19.636,3,22,5.579,22,9,22,14.688,13.651,21,12,21ZM7.5,5C5.472,5,4,6.683,4,9c0,4.108,6.432,9.325,8,10,1.564-.657,8-5.832,8-10,0-2.317-1.472-4-3.5-4-1.979,0-3.7,2.105-3.721,2.127L11.991,8.1,11.216,7.12C11.186,7.083,9.5,5,7.5,5Z"></path></svg></button>
                        <button id="sort-fav" <a id="arrows" href="https://www.svgrepo.com/show/32397/sort.svg"></a></button>
                    </div>
                </div>
            </div>`

document.querySelector('#nav').innerHTML = navHtml

// let footerHtml = `<footer>
//                     <span></span>
//                 </footer>`