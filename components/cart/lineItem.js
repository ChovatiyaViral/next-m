import { get } from "lodash";
import Image from "next/image";
import React, { Component } from "react";
class LineItem extends Component {
  constructor(props) {
    super(props);

    this.decrementQuantity = this.decrementQuantity.bind(this);
    this.incrementQuantity = this.incrementQuantity.bind(this);
  }

  decrementQuantity(lineItemId) {
    const updatedQuantity = get(this, "props.line_item.quantity", 0) - 1;
    this.props.updateQuantityInCart(lineItemId, updatedQuantity);
  }

  incrementQuantity(lineItemId) {
    const updatedQuantity = get(this, "props.line_item.quantity", 0) + 1;
    this.props.updateQuantityInCart(lineItemId, updatedQuantity);
  }

  render() {
    return (
      <li className="Line-item">
        <div className="Line-item__img">
          {get(this, "props.line_item.variant.image", "") ? (
            <Image width={268} height={283} className="line-item-img" src={get(this, "props.line_item.variant.image.src", "")} alt={`${get(this, "props.line_item.title", "")} product shot`} />
          ) : null}
        </div>
        <div className="Line-item__content">
          <div className="Line-item__content-row Line-item_content-row-title">
            <span className="Line-item__title">{get(this, "props.line_item.title", "")}</span>
          </div>
          <div className="Line-item__content-row">
            <div className="Line-item__quantity-container">
              <button className="Line-item__quantity-update" onClick={() => this.decrementQuantity(get(this, "props.line_item.id", ""))}>
                -
              </button>
              <span className="Line-item__quantity">{this.props.line_item.quantity}</span>
              <button className="Line-item__quantity-update" onClick={() => this.incrementQuantity(get(this, "props.line_item.id", ""))}>
                +
              </button>
            </div>
            <span className="Line-item__price">{get(this, "props.line_item.variant.compareAtPriceV2.currencyCode", "GBP")} &#163; {(get(this, "props.line_item.quantity", 0) * get(this, "props.line_item.variant.price", 0)).toFixed(2)}</span>
          </div>
          <a className="Line-item__remove" onClick={() => this.props.removeLineItemInCart(get(this, "props.line_item.id", ""))}>
            <Image alt="Close cart" src="/assets/images/minus-square.svg" width={25} height={25} />
          </a>
        </div>
      </li>
    );
  }
}

export default LineItem;
