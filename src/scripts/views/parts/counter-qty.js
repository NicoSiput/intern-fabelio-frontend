class CounterQty extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  async render() {
    this.innerHTML = `
    <div class="counter-wrapper d-flex">
        <button type="button" class="btn text-white" style="background-color: #EAEAEF;" id="btn-minus-qty">

        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle text-danger" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>
        
        </button>

        <span id="current-qty">0</span>

        <button type="button" class="btn btn-success text-white" id="btn-add-qty">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
        </button>
    </div>`;

    const currentQty = document.querySelector("#current-qty");
    const btnAddQty = document.querySelector("#btn-add-qty");
    const btnMinusQty = document.querySelector("#btn-minus-qty");
    currentQty.innerHTML = "0";
    btnAddQty.addEventListener("click", () => {
      addQty();
    });
    btnMinusQty.addEventListener("click", () => {
      minusQty();
    });
    const addQty = () => {
      currentQty.innerHTML = Number(currentQty.innerText) + 1;
    };
    const minusQty = () => {
      if (Number(currentQty.innerText) > 0) {
        currentQty.innerHTML = Number(currentQty.innerText) - 1;
      }
    };
  }
}
customElements.define("counter-qty", CounterQty);
