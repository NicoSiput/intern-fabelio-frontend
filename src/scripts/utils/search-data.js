const searchProducts = (keyword, products) => {
  const filteredData = products.filter((product) => {
    // search name
    const byName = product.product_name
      .toUpperCase()
      .includes(keyword.toUpperCase());

    // search by material
    const byMaterial = product.product_material
      .toUpperCase()
      .includes(keyword.toUpperCase());

    return byName || byMaterial;
  });

  if (filteredData.length) {
    return Promise.resolve(filteredData);
  }
  return Promise.reject(keyword);
};

const renderSearchResult = (wrapper, property, data) => {
  wrapper[property] = data;
};

const callbackSearch = (wrapper, data) => {
  if (data.total) {
    // founded data
    if (data.keyword.length > 0) {
      wrapper.innerHTML = `Result: ${data.total} data found with keyword <span>${data.keyword}<span>`;
    } else {
      wrapper.innerHTML = "";
    }
  } else {
    // not founded data
    wrapper.innerHTML = `
      <div class="search-notfound p-3 text-center">
      <h1>Ooops !</h1> <br />
      <span class="not-found">${data.keyword}</span>  not found ! <br />
      Please try another keyword...</div>`;
  }
};

export { searchProducts, callbackSearch, renderSearchResult };
