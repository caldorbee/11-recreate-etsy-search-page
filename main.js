const products = items.results

let productsHtml = products.map (function (item) {
    return `<div class="product-item">
                <div class=product-bg style="background-image: url(${item.Images[0].url_fullxfull})">
                </div>
                    <h2 class="title">${item.title}</h2>
                    <p class="title">${item.Shop.shop_name}</p>
                <div id="rating">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span aria-hidden="true">(${item.num_favorers})</span>
                </div>
                <strong id="item-price">$${item.price}</strong>
                <span class="shipping">FREE shipping</span>
            </div>
        `
}).join('')

document.querySelector('#grid').innerHTML = productsHtml

let navHtml =`<nav id="nav-bar">
                    <h1 id="etsy">Etsy</h1>
                    <form id="search-bar">
                        <input id="search-box" type="search" placeholder="Search for anything"
                        </input>
                    </form>
                    <button id="sign-in"">Sign In</button>
                    <button id="cart" class="fa fa-shopping-cart"></button>
                </nav>
                    <div id="dropDown">
                        <ul class="nav-list">
                            <li class="dropdown-item-label">
                                <span class="dropdown-item-label">Valentine's Day</span>
                                <div class="dropdown-block">
                                    <ul id="drop-list-ul">
                                        <li class="drop-list"><a  class="sub-sub" href="#">All Jewelry &amp; Accessorries</a></li>
                                        <li class="drop-list"><a class="sub-sub" href="#">Accessories</a></li>
                                        <li class="drop-list"><a class="sub-sub" href="#">Bags &amp; Purses</a></li>
                                        <li class="drop-list"><a class="sub-sub" href="#">Necklaces</a></li>
                                        <li class="drop-list"><a class="sub-sub" href="#">Rings</a></li>
                                        <li class="drop-list"><a class="sub-sub" href="#">Earrings</a></li>
                                        <li class="drop-list"><a class="sub-sub" href="#">Bracelets</a></li>
                                        <li class="drop-list"><a class="sub-sub" href="#">Body Jewlry</a></li>
                                    </ul>
                                </div>    
                            </li>
                            <li><a id= "jewelry" href="#">Jewelry &amp; Accessories</a></li>
                            <li><a href="#">Clothing &amp; Shoes</a></li>
                            <li><a href="#">Home &amp; Living</a></li>
                            <li><a href="#">Wedding &amp; Party</a></li>
                            <li><a href="#">Toys &amp; Entertainment</a></li>
                            <li><a href="#">Arts &amp; Collectibles</a></li>
                            <li><a href="#">Craft Supplies</a></li>
                            <li><a href="#">Gifts &amp; Gift Cards</a><//li>
                        </ul>
                    </div>
                <div class="menu">
                    <li><a href="#">All Jewelry &amp; Accessorries</a></li>
                    <li><a href="#">Accessories</a></li>
                    <li><a href="#">Bags &amp; Purses</a></li>
                    <li><a href="#">Necklaces</a></li>
                    <li><a href="#">Rings</a></li>
                    <li><a href="#">Earrings</a></li>
                    <li><a href="#">Bracelets</a></li>
                    <li><a href="#">Body Jewlry</a></li>
                </div>
                    <div class="filters">
                        <div class="left-filters">
                            <button type="button" class="top-filter-menu">
                            <span class="new-badge">New</span>
                                <span class="menu-label">
                                <span class="arrival">Estimated Arrival <span class="any">Any time</span></span>
                            </span>
                        </button>
                        <button type="button" class="filter-button">
                            <svg id="key" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5,7.6h5.7c0.4,1.2,1.5,2,2.8,2s2.4-0.8,2.8-2H19c0.6,0,1-0.4,1-1s-0.4-1-1-1h-2.7c-0.4-1.2-1.5-2-2.8-2s-2.4,0.8-2.8,2H5 c-0.6,0-1,0.4-1,1S4.4,7.6,5,7.6z M13.5,5.6c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S12.9,5.6,13.5,5.6z"></path><path d="M19,11.1h-7.7c-0.4-1.2-1.5-2-2.8-2s-2.4,0.8-2.8,2H5c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h0.7c0.4,1.2,1.5,2,2.8,2 s2.4-0.8,2.8-2H19c0.6,0,1-0.4,1-1C20,11.5,19.6,11.1,19,11.1z M8.5,13.1c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1s1,0.4,1,1 C9.5,12.7,9.1,13.1,8.5,13.1z"></path><path d="M19,16.6h-1.2c-0.4-1.2-1.5-2-2.8-2s-2.4,0.8-2.8,2H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h7.2c0.4,1.2,1.5,2,2.8,2s2.4-0.8,2.8-2 H19c0.6,0,1-0.4,1-1S19.6,16.6,19,16.6z M15,18.6c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S15.6,18.6,15,18.6z"></path></svg>
                            <span>All Filters</span>
                            </span>
                        </button>
                    </div>
                    <div class="right-filters">
                        <span>112,831 results,</span>
                        <span class="withAds">with Ads</span>
                        <button id="ad-search"class="sort-fav">?</button>
                        <button class="sort-fav"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12,21C10.349,21,2,14.688,2,9,2,5.579,4.364,3,7.5,3A6.912,6.912,0,0,1,12,5.051,6.953,6.953,0,0,1,16.5,3C19.636,3,22,5.579,22,9,22,14.688,13.651,21,12,21ZM7.5,5C5.472,5,4,6.683,4,9c0,4.108,6.432,9.325,8,10,1.564-.657,8-5.832,8-10,0-2.317-1.472-4-3.5-4-1.979,0-3.7,2.105-3.721,2.127L11.991,8.1,11.216,7.12C11.186,7.083,9.5,5,7.5,5Z"></path></svg></button>
                        <button class="sort-fav"><a id="arrows" href="https://www.svgrepo.com/show/32397/sort.svg"></a></button>
                    </div>`

document.querySelector('#nav').innerHTML = navHtml

// let footerHtml = `<footer>
//                     <span></span>
//                 </footer>`