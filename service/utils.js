import Client from "shopify-buy";
import config from "../config";

const { storefrontAccessToken, domain, appId } = config;
const client = Client.buildClient({
  storefrontAccessToken,
  domain,
  appId,
});
const shopifyInit = () => {
  return client;
};
const getCheckoutId = () => {
  return new Promise((resolve, reject) => {
    let checkoutIdFromSession = sessionStorage.getItem("checkoutId");
    if (checkoutIdFromSession === undefined || checkoutIdFromSession === null) {
      client.checkout.create().then((checkout) => {
        console.log("checkout.id", checkout.id);
        sessionStorage.setItem("checkoutId", checkout.id);
        resolve(checkout.id);
      });
    } else {
      resolve(checkoutIdFromSession);
    }
  });
};
const getAllProducts = () => {
  return new Promise((resolve, reject) => {
    client.product.fetchAll().then((products) => {
      // Do something with the products
      resolve(products);
    });
  });
};
const getProductDetails = (productId) => {
  return new Promise((resolve, reject) => {
    client.product.fetch(productId).then((product) => {
      // Do something with the product
      // console.log(product);
      resolve(product);
    });
  });
};
const getCheckoutLineItems = () => {
  return new Promise((resolve, reject) => {
    getCheckoutId().then((checkoutId) => {
      client.checkout.fetch(checkoutId).then((res) => {
        // Do something with the checkout
        // console.log(checkout);
        resolve(res);
      });
    });
  });
};
const setAddVariantToCart = (lineItemsToAdd) => {
  return new Promise((resolve, reject) => {
    getCheckoutId().then((checkoutId) => {
      client.checkout.addLineItems(checkoutId, lineItemsToAdd).then((res) => {
        resolve(res);
      });
    });
  });
};

const setUpdateQuantityInCart = (lineItemsToUpdate) => {
  return new Promise((resolve, reject) => {
    getCheckoutId().then((checkoutId) => {
      client.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then((res) => {
        resolve(res);
      });
    });
  });
};

const setRemoveLineItemInCart = (lineItemId) => {
  return new Promise((resolve, reject) => {
    getCheckoutId().then((checkoutId) => {
      client.checkout.removeLineItems(checkoutId, [lineItemId]).then((res) => {
        resolve(res);
      });
    });
  });
};

export { shopifyInit, getAllProducts, getProductDetails, getCheckoutId, getCheckoutLineItems, setAddVariantToCart, setUpdateQuantityInCart, setRemoveLineItemInCart };

