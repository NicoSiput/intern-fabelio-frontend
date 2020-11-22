class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set keyupEvent(event) {
    this._keyupEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector("#searchElement").value;
  }

  render() {
    this.innerHTML = `
            <div class="input-group my-5">
              <input class="form-control" placeholder="Search product.." id="searchElement" type="search" aria-label="search">
            </div>
            <div class="result-search" id="result-search"></div>
    `;

    this.querySelector("#searchElement").addEventListener(
      "keyup",
      this._keyupEvent
    );
  }
}

customElements.define("search-bar", SearchBar);
