import "animate.css";
import classnames from "classnames";
import { get } from "lodash";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "../components/cart";
import Collection from "../components/common/collection";
import detailsStyles from "../components/common/details.module.css";
import ExpertNotes from "../components/common/expert-notes";
import ExploreMacallan from "../components/common/explore-macallan";
import FlavourWheel from "../components/common/flavour-wheel";
import NicksPickSection from "../components/common/nicks-pick-section";
import PriceModal from "../components/common/price-modal";
import Slider from "../components/common/slider";
import Suggestion from "../components/common/suggestion";
import TastingNotes from "../components/common/tasting-notes";
import Section from "../components/layout/content/section";
import Footer from "../components/layout/footer/footer";
import Header from "../components/layout/header";
import { addVariantToCart, getCheckoutItems, removeLineItemInCart, updateQuantityInCart } from "../service";

export default function Macallan31() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkout, setCheckout] = useState({ checkout: { lineItems: [] } });
  const [showModal, setShowModal] = useState(false);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };

  const handleAddToCart = async () => {
    openCart();
    const resp = await addVariantToCart("7476927398070", 1);
    setCheckout({ ...resp });
  };

  const handleItems = async (id, quantity, type) => {
    let resp = { ...checkout };
    if (type === "remove") {
      resp = await removeLineItemInCart(id);
    }

    if (type === "update") {
      resp = await updateQuantityInCart(id, quantity);
    }

    setCheckout({ ...resp });
  };

  useEffect(() => {
    getCheckoutItems().then((res) => {
      setCheckout({ ...res });
    });
  }, []);

  const ToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleOpenCart = () => {
    handleAddToCart()
  };

  return (
    <div>
      <PriceModal
        title="The Octave Premium"
        subTitle="Macallan 31 Years"
        tag="Sir Nick's Pick"
        price="4000"
        showModal={showModal}
        ToggleModal={ToggleModal}
        image="/assets/images/macllan-31-modal.png"
        handleOpenCart={handleOpenCart}
        buttonName="Add to Cart"
      />
      <Header />
      {get(checkout, "lineItems", []).length > 0 && (
        <div className="cart-icon-container" onClick={openCart}>
          <div className="cart-batch">{checkout.lineItems ? checkout.lineItems.length : 0}</div>
          <Image src="/assets/images/side-bottle.png" className="animate__animated animate__slower animate__bounce animate__infinite	infinite" alt="bottle" height={45.25} width={20.56} />
          <div className="cart-icon-container-text"> Basket</div>
        </div>
      )}
      <Section>
        <div
          className={classnames(detailsStyles.banner_bg, detailsStyles.mobile_banner_bg, "sm:my-[13.22px]")}
          style={{
            backgroundImage: `url(/assets/images/banner31.png)`,
          }}
        >
          <div className={classnames(detailsStyles.banner_content, "flex sm:top-[180px] md:top-[45vh] w-[100%] sm:justify-between")}>
            <span>
              <h2>
                <i>The Octave Premium</i>
              </h2>
              <h3>Macallan 31 Years old</h3>
              <button className={classnames(detailsStyles.knowPriceButton)} onClick={() => ToggleModal()}>
                <span>Know the Price</span>
              </button>
              {/* <hr className="mt-[42px] w-[320px]" /> */}
              {/* <p>Priced at £4,000 (price includes UK VAT and Duty). The Octave Premium is only available exclusively at the SpiritsEmbassy</p> */}
            </span>
            <span className={classnames(detailsStyles.banner_buy_btn, "")} onClick={() => handleAddToCart()}>
              <FaShoppingCart />
              <span>Shop now</span>
              {/* <span className="animate__animated animate__slower animate__headShake animate__infinite	infinite">Shop now</span> */}
            </span>
          </div>
        </div>
      </Section>
      <NicksPickSection
        title="sir nick's pick"
        // subTitle="the Macallan Series"
        cardDetails={[
          {
            image: "/assets/images/picture-one.png",
            title: (
              <span>
                the spirits embassy
                <br />
                exclusive
              </span>
            ),
            icon: "/assets/images/icon-1.png",
            width: 58.45,
            height: 58.45,
          },
          {
            image: "/assets/images/picture-two.png",
            title: (
              <span>
                31 year old <br />
                premium octave
              </span>
            ),
            icon: "/assets/images/icon-2.png",
            width: 58.45,
            height: 58.45,
          },
          {
            image: "/assets/images/picture-three.png",
            title: (
              <span>
                matured in <br />
                hand selected oak cask
              </span>
            ),
            icon: "/assets/images/icon-3.png",
            width: 58.45,
            height: 58.45,
          },
          {
            image: "/assets/images/picture-four.png",
            title: (
              <span>
                chosen by <br />
                sir nick faldo
              </span>
            ),
            icon: "/assets/images/icon-4.png",
            width: 84.58,
            height: 58.45,
          },
        ]}
      />
      <Suggestion
        title={<span>AGED 31 YEARS</span>}
        subTitle={
          <span>
            48.5% ABV./700 ML <br /> FINISHED IN A PREMIUM OCTAVE CASK
          </span>
        }
        description={
          <span>
            Chosen by legendary golfer, Sir Nick Faldo, each bottle of this 31 Year Old whisky from Macallan <br />
            Distillery bears his signature.In honour of this we have called this release ‘Sir Nick’s Pick’.
          </span>
        }
        image="/assets/images/bg1.png"
      // btnText="add to cart"
      />
      <div className="relative">
        <div
          className={classnames(
            detailsStyles.suggestionBottle31,
            "absolute left-[42vw] bottom-[84.71vw] sm:bottom-[17vw] flex items-center justify-center z-10 w-[102.71px] h-[444px] sm:h-[931px] sm:w-[160px] md:w-[260px] xl:w-auto"
          )}
        >
          <Image src="/assets/images/macallan31.png" alt="Macallan 31" width={215} height={931} />
        </div>
        <div className="hidden sm:block">
          <Suggestion
            title={<span>AGED 31 YEARS</span>}
            subTitle={
              <span>
                48.5% ABV./700 ML <br />
                FINISHED IN A PREMIUM OCTAVE CASK
              </span>
            }
            description={
              <span>
                This whisky, distilled at Macallan Distillery, is a stunning example of
                the use of Octaves that Duncan Taylor specialises in. Finishing this whisky in an Octave cask has added a whole new dimension of flavour and complexity to this stunning single malt.
              </span>
            }
            image="/assets/images/bg2.png"
          />
        </div>
      </div>
      <TastingNotes
        title="TASTING NOTES"
        content={
          <>
            <p>
              <b>COLOUR:</b> Oloroso Sherry.
            </p>
            <p>
              <b>NOSE:</b> A big sherried Speyside bursting with fruit and plum compote. Vine fruits, a background of sweet creamy chocolate. Surprisingly fresh and accessible, with youthful
              exuberance.
            </p>
            <p>
              <b>PALATE:</b> Initial burst of sweetness tempered with spicy oak. Rich, intense fruity notes continue throughout. Oily mouthfeel and texture with toffee and leather making a late
              appearance.
            </p>
            <p>
              <b>FINISH: </b> Wonderfully clean spirit married to perfection with the exuberant cask. The spice of the palate fades to a warming sweetness.
            </p>
          </>
        }
        leftImage="/assets/images/testnotes-img-one.png"
        topPadding={50}
        bottomPadding={25}
        rightImage="/assets/images/collection-bg.png"
      />
      <ExpertNotes
        title="as sir nick faldo quoted..."
        image="/assets/images/expert-notes-bg.png"
        content={
          <span>
            ‘It was incredibly fruity and sweet, not what I would expect from such an old whisky, with loads of beautiful flavours that lingered on and on. Just delicious!’ <br />
            <br />
            Sir Nick Faldo.
          </span>
        }
        btnTitle="ADD TO CART"
        noteName="mc31"
      />
      <FlavourWheel title="the Octogram" image="/assets/images/flavour-wheel-bg-1.png" />
      <Section>
        <div className="mt-[45px] mb-[35px] md:mb-[72.94px]">
          <Slider
            sliderDetails={{
              images: ["/assets/images/slider-1.png", "/assets/images/slider-2.png"],
              // slideTitle: "Region Of Glenlivet",
              slideDescription: (
                <span>
                  Established in 1938, Duncan Taylor Scotch Whisky Limited is a specialist independent whisky merchant with one of the largest privately held collections of aged single malt and single
                  grain Scotch whiskies.Today, the company releases these prized spirits via an impressive range of award-winning product brands, all bottled at its headquarters in Huntly. <br />{" "}
                  <br />
                  This collection of whiskies from the Macallan Distillery, has been brought together over the years, as owners of the company had the vision to foresee the importance of this whisky,
                  as it has grown to become an aspirational brand.
                </span>
              ),
            }}
            width={891}
            height={539}
            title="Duncan Taylor Scotch Whisky"
            subTitle="The story of"
          />
        </div>
      </Section>
      <Section>
        <ExploreMacallan path="/the-rarest" title="explore the macallan 52" subTitle="52 year old" image="/assets/images/Macallan52.png" />
      </Section>
      <Cart
        checkout={checkout}
        isCartOpen={isCartOpen}
        handleCartClose={handleCartClose}
        updateQuantityInCart={(id, qty) => handleItems(id, qty, "update")}
        removeLineItemInCart={(id) => handleItems(id, 0, "remove")}
      />
      <Collection
        sliderDetails={{
          images: ["/assets/images/collection-1.png", "/assets/images/collection-2.png", "/assets/images/collection-3.png", "/assets/images/collection-4.png", "/assets/images/collection-5.png"],
          slideDescription: "“  People who drink Macallan also love the Octave Whisky Collection  ”",
          slideTitle: "Region Of Glenlivet",
          btnText: "explore more",
          subTitle: "the octave strathclyde 1990",
        }}
        width={602}
        height={677}
        title="the octave collection"
      />
      <Cart
        checkout={checkout}
        isCartOpen={isCartOpen}
        handleCartClose={handleCartClose}
        updateQuantityInCart={(id, qty) => handleItems(id, qty, "update")}
        removeLineItemInCart={(id) => handleItems(id, 0, "remove")}
      />
      <Footer />
    </div>
  );
}
