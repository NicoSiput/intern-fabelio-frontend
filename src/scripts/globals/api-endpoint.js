import CONFIG from "./config";

const END_POINT = {
  PRODUCTS: `${CONFIG.BASE_URL}/products`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/product/${id}`,
};
export default END_POINT;
