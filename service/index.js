import { getCheckoutLineItems, getProductDetails, setAddVariantToCart, setRemoveLineItemInCart, setUpdateQuantityInCart } from "./utils";

export const addVariantToCart = (variant, quantity) => {
  try {
    const productId = `gid://shopify/Product/${variant}`;
    return getProductDetails(productId).then((productDetails) => {
      const lineItemsToAdd = [
        {
          variantId: productDetails.variants[0].id,
          quantity: parseInt(quantity),
        },
      ];
      return setAddVariantToCart(lineItemsToAdd).then((res) => {
        return res;
      });
    });
  } catch (e) {
    console.log(e);
  }
};

export const updateQuantityInCart = async (lineItemId, quantity) => {
  const lineItemsToUpdate = [{ id: lineItemId, quantity: parseInt(quantity, 10) }];
  return setUpdateQuantityInCart(lineItemsToUpdate).then((res) => {
    return res;
  });
};

export const removeLineItemInCart = async (lineItemId) => {
  return setRemoveLineItemInCart(lineItemId).then((res) => {
    return res;
  });
};

export const getCheckoutItems = async () => {
  return getCheckoutLineItems().then((res) => {
    return res;
  });
};
