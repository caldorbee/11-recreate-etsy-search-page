const products = items.results

let productsHtml = products.map (function (item) {
    return `
        <div class="product-item">
            <img src="${item.Images[0].url_fullxfull}">
            <h2>${item.title}</h2>
            <strong>${item.price}</strong>
        </div>
        `
})

document.querySelector('#grid').innerHTML = productsHtml