import { createSimilarItem } from "../templates/template-creator";
class SimilarProduct extends HTMLElement {
  set similars(similars) {
    this._data = similars;
    this.render();
  }

  async render() {
    const products = this._data;
    this.innerHTML = `
    
    <section id="similarity-section">  
      <div class="container-fluid">
        <h2>Similar Product</h2>
        <h3 class="text-muted sub-header">Because you see <span>${products[0].searchBefore}</span> before</h3>
        <div class="container">
          <div class="similar-list"></div>
        </div>
      </div>
    </section>
        
    `;

    const similarList = document.querySelector(".similar-list");
    similarList.innerHTML = "";

    const limit = products.length > 4 ? 4 : products.length;
    for (let index = 0; index < limit; index++) {
      const product = products[index];
      product.similarity = product.similarity.toFixed(2);
      similarList.innerHTML += createSimilarItem(product);
    }
  }
}

customElements.define("similar-product", SimilarProduct);
