import { createDetailItem } from "../templates/template-creator";

import "../parts/counter-qty";
import "../parts/similar-product";
import ClientStorage from "../../data/local-storage";
import ProductData from "../../data/product-data";
import UrlParser from "../../routes/url-parser";

const Home = {
  async render() {
    return `
    <section>
        <div class="container">
            <div class="detail"></div>
        </div>
    </section>

    <section id="similarity-section"> 
      <similar-product></similar-product>
    </section>
    `;
  },

  async afterRender() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const { product, similarProduct } = await ProductData.getProductById(
        url.id
      );

      const detailSection = document.querySelector(".detail");

      detailSection.innerHTML = createDetailItem(product);

      const similarWrapper = document.querySelector("similar-product");

      const addSimilarToStorage = () => {
        similarProduct.forEach(async (similar) => {
          similar.searchBefore = product.product_name;
          await ClientStorage.putItem(similar);
        });
      };

      await ClientStorage.deleteItem(url.id);
      let dataStorage = await ClientStorage.getData();

      if (!dataStorage.length) {
        addSimilarToStorage();
        dataStorage = await ClientStorage.getData();
      }

      similarWrapper.similars = dataStorage;
    } catch (error) {
      console.log(error);
    }
  },
};

export default Home;
