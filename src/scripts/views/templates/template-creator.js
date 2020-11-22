import { covertNumberToCurrency } from "../../utils/util";
const createProductItem = (product) => `
<div class="product__wrapper">
    <div class="image__wrapper">
        <img class="image-responsive lazyload"
            data-src="${product.product_image}"
            alt="product image">
        <div class='overlay'></div>
        <div class='price-wrapper'>
            <p class='price'>${covertNumberToCurrency(
              product.product_price
            )}</p>
        </div>
    </div>
    <div class="meta__wrapper">
        <h2 class="product-name">
            <a href="#/detail/${product.id}" class="stretched-link">${
  product.product_name
}</a>
        </h2>
        <p class="product-material">${product.product_material}</p>
    </div>
</div>
`;

const createSimilarItem = (data) => `
<div class="product__wrapper">
  <div class="image__wrapper">
      <img class="image-responsive lazyload" data-src="${data.product.product_image}" alt="product image">
      <div class='overlay'></div>
  </div>
  <div class="meta__wrapper">
      <a href="#/detail/${data.product.id}" class="stretched-link">${data.product.product_name}</a>
      <p>Match ${data.similarity}%</p>
  </div>
</div>
`;

const createDetailItem = (product) => {
  let value = "";

  const listColor = product.product_colours.split(",");
  let colours;
  colours = "";
  listColor.forEach((color) => {
    colours += `<li class="color-item">${color}</li>`;
  });
  value += `
        <div class="card p-2 rounded">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <figure class="figure">
                        <img data-src="${
                          product.product_image
                        }" class="image-responsive lazyload" alt="${
    product.product_name
  }" height="150px" width="100%">
                            
                        <figcaption class="figure-caption product-thumbnail-container d-flex justify-content-between flex-wrap">
                                <img class="lazyload" data-src="${
                                  product.product_image
                                }" alt="Product image" height="80px" width="80px" />
                            
                                <img class="lazyload" data-src="https://fabelio.com/media/catalog/product/w/i/wina_armchair__graphite__1_1.jpg" alt="Product image" height="80px" width="80px" />
                            
                                <img class="lazyload" data-src="https://fabelio.com/media/catalog/product/t/o/Toril_2_Seater_Sofa_(Paradise)_1.jpg" alt="Product image" height="80px" width="80px" />

                                <img class="lazyload" data-src="https://fabelio.com/media/catalog/product/k/u/Kursi_Zoey_Armchair_(Brown)_0.jpg" alt="Product image" height="80px" width="80px" />
                        </figcaption>
                    </figure>
                </div>

                <div class="col-md-6">
                    <div class="meta-wrapper mt-2">
                        <h3 id='product-name'>${product.product_name}</h3>
                        <p class="text-muted mb-3">${covertNumberToCurrency(
                          product.product_price
                        )}</p>

                        <div class="counter-qty mb-2">
                            <counter-qty></counter-qty>
                        </div>

                        <div class="detail-item d-flex align-items-center">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-hammer" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.812 1.952a.5.5 0 0 1-.312.89c-1.671 0-2.852.596-3.616 1.185L4.857 5.073V6.21a.5.5 0 0 1-.146.354L3.425 7.853a.5.5 0 0 1-.708 0L.146 5.274a.5.5 0 0 1 0-.706l1.286-1.29a.5.5 0 0 1 .354-.146H2.84C4.505 1.228 6.216.862 7.557 1.04a5.009 5.009 0 0 1 2.077.782l.178.129z"/>
                            <path fill-rule="evenodd" d="M6.012 3.5a.5.5 0 0 1 .359.165l9.146 8.646A.5.5 0 0 1 15.5 13L14 14.5a.5.5 0 0 1-.756-.056L4.598 5.297a.5.5 0 0 1 .048-.65l1-1a.5.5 0 0 1 .366-.147z"/>
                            </svg>

                            <p id="material" class="ml-3 mb-0">${
                              product.product_material
                            }</p>
                        </div>

                        <div class="detail-item d-flex align-items-center mt-2">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-aspect-ratio" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5v-9zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"/>
                            <path fill-rule="evenodd" d="M2 4.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H3v2.5a.5.5 0 0 1-1 0v-3zm12 7a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H13V8.5a.5.5 0 0 1 1 0v3z"/>
                            </svg>

                            <p id="dimension" class="ml-3 mb-0">${
                              product.product_dimension
                            }</p>
                        </div>

                        <div class="detail-item mt-5">
                            <p id="dimension" class="mb-0">Available Color:</p>
                            <ul class="list-color">
                                ${colours}
                            </ul>
                        </div>

                        <div class="btn-product">
                            <a href="" class="btn btn-warning text-white d-block mb-2">Add to Cart</a>

                            <a href="" class="btn d-block" style="background-color: #EAEAEF;color: #ADADAD;">Add to Wishlist</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

  return value;
};

const createSkeletonProductItem = (count) => {
  let template = "";

  for (let i = 0; i < count; i++) {
    template += `
    <div class="product__wrapper">
      <div class="image__wrapper">
        <div class="skeleton" style="width:100%;height:350px"></div>
      </div>
    </div>
    
    `;
  }

  return template;
};

export {
  createProductItem,
  createSimilarItem,
  createDetailItem,
  createSkeletonProductItem,
};
