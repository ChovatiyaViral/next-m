import { get } from "lodash";
import Image from "next/image";
import React, { Component } from "react";
import LineItem from "./lineItem";
import RegisterForm from "./registrationForm";
class Cart extends Component {
  constructor(props) {
    super(props);

    this.openCheckout = this.openCheckout.bind(this);
  }

  openCheckout() {
    window.open(this.props.checkout.webUrl, "_blank");
  }

  render() {
    const line_items =
      get(this, "props.checkout.lineItems", []).length > 0
        ? get(this, "props.checkout.lineItems", []).map((line_item) => {
            return <LineItem updateQuantityInCart={this.props.updateQuantityInCart} removeLineItemInCart={this.props.removeLineItemInCart} key={line_item.id.toString()} line_item={line_item} />;
          })
        : null;

    return (
      <div className={`Cart ${this.props.isCartOpen ? "Cart--open" : ""}`}>
        {get(this, "props.isRegisterFormAvailable") ? (
          <>
            <header className="Cart__header">
              <h2>Register</h2>
              <a onClick={this.props.handleCartClose} className="Cart__close">
                <Image alt="Close cart" src="/assets/images/cart-close-icon.png" width={19.82} height={19.86} />
              </a>
            </header>
            <RegisterForm onClose={this.props.handleCartClose} />
          </>
        ) : (
          <>
            <header className="Cart__header">
              <h2>Your cart</h2>
              <a onClick={this.props.handleCartClose} className="Cart__close">
                <Image alt="Close cart" src="/assets/images/cart-close-icon.png" width={19.82} height={19.86} />
              </a>
            </header>

            {get(this, "props.checkout.lineItems", []).length > 0 ? (
              <>
                <ul className="Cart__line-items">{line_items}</ul>
                <footer className="Cart__footer">
                  <div className="Cart-info clearfix">
                    <div className="Cart-info__total Cart-info__small">Subtotal</div>
                    <div className="Cart-info__pricing">
                      <span className="pricing">
                        {get(this, "props.checkout.currencyCode", "GBP")} &#163; {get(this, "props.checkout.subtotalPrice", 0)}
                      </span>
                    </div>
                  </div>
                  {Number(get(this, "props.checkout.totalTax", 0)) ? (
                    <div className="Cart-info clearfix">
                      <div className="Cart-info__total Cart-info__small">Taxes</div>
                      <div className="Cart-info__pricing">
                        <span className="pricing">
                          {get(this, "props.checkout.currencyCode", "GBP")} &#163; {get(this, "props.checkout.totalTax", 0)}
                        </span>
                      </div>
                    </div>
                  ) : null}
                  {Number(get(this, "props.checkout.totalTax", 0)) ? (
                    <div className="Cart-info clearfix">
                      <div className="Cart-info__total Cart-info__small">Total</div>
                      <div className="Cart-info__pricing">
                        <span className="pricing">
                          {get(this, "props.checkout.currencyCode", "GBP")} &#163; {get(this, "props.checkout.totalPrice", 0)}
                        </span>
                      </div>
                    </div>
                  ) : null}
                  <button className="Cart__checkout button" onClick={this.openCheckout}>
                    Checkout
                  </button>
                </footer>
              </>
            ) : (
              <div className="empty-cart-container">
                <div className="empty-cart-text">Cart is empty !</div>
              </div>
            )}
          </>
        )}
      </div>
    );
  }
}

export default Cart;
