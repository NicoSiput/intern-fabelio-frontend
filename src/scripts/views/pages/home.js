import {
  createProductItem,
  createSkeletonProductItem,
} from "../templates/template-creator";

import "../parts/similar-product";
import "../parts/search-bar";
import {
  searchProducts,
  callbackSearch,
  renderSearchResult,
} from "../../utils/search-data";
import ClientStorage from "../../data/local-storage";

import ProductData from "../../data/product-data";

const Home = {
  async render() {
    return `
    <section>
        <div class="container">
            <search-bar></search-bar>
            <div class="product-list grid-container">
              ${createSkeletonProductItem(6)}
            </div>
        </div>
    </section>

    
    <similar-product></similar-product>
    `;
  },

  async afterRender() {
    try {
      const { products } = await ProductData.listProducts();
      let productList = document.querySelector(".product-list");

      const renderProducts = (results) => {
        productList.innerHTML = "";

        results.forEach((product) => {
          productList.innerHTML += createProductItem(product);
        });
      };
      renderProducts(products);

      // searching handling
      const searchElement = document.querySelector("search-bar");
      const onSearchTyped = async () => {
        const resultSearch = document.querySelector(".result-search");
        try {
          const result = await searchProducts(searchElement.value, products);
          const data = {
            total: result.length,
            keyword: searchElement.value,
          };

          renderProducts(result);
          callbackSearch(resultSearch, data);
        } catch (message) {
          const data = {
            keyword: message,
          };

          productList.innerHTML = "";
          callbackSearch(resultSearch, data);
        }
      };
      searchElement.keyupEvent = onSearchTyped;

      const similarWrapper = document.querySelector("similar-product");
      const dataStorage = await ClientStorage.getData();
      if (dataStorage.length > 0) {
        similarWrapper.similars = dataStorage;
      }
    } catch (error) {
      console.log(error);
    }
  },
};

export default Home;
