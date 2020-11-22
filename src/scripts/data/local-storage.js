import CONFIG from "../globals/config";

const { STORAGE_CACHE_KEY } = CONFIG;

const clientStorage = {
  async checkForStorage() {
    return typeof Storage !== "undefined";
  },

  async putItem(data) {
    if (this.checkForStorage()) {
      let itemData = null;
      if (localStorage.getItem(STORAGE_CACHE_KEY) === null) {
        itemData = [];
      } else {
        itemData = JSON.parse(localStorage.getItem(STORAGE_CACHE_KEY));
      }

      itemData.push(data);

      localStorage.setItem(STORAGE_CACHE_KEY, JSON.stringify(itemData));
    }
  },

  async getData() {
    if (this.checkForStorage()) {
      return JSON.parse(localStorage.getItem(STORAGE_CACHE_KEY)) || [];
    } else {
      return [];
    }
  },

  async deleteItem(id) {
    let listItems = await this.getData();
    listItems = listItems.filter((item) => item.product.id !== id);

    localStorage.setItem(STORAGE_CACHE_KEY, JSON.stringify(listItems));
  },
};

export default clientStorage;
