import API_ENDPOINT from "../globals/api-endpoint";

class ProductData {
  static async listProducts() {
    const response = await fetch(API_ENDPOINT.PRODUCTS);
    const responseJson = await response.json();
    return responseJson.data;
  }

  static async getProductById(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.data;
  }
}

export default ProductData;
