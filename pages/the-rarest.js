import "animate.css";
import classnames from "classnames";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Cart from "../components/cart";
import Collection from "../components/common/collection";
import detailsStyles from "../components/common/details.module.css";
import ExpertNotes from "../components/common/expert-notes";
import ExploreMacallan from "../components/common/explore-macallan";
import HeroTwoSection from "../components/common/hero-two-section";
import PriceModal from "../components/common/price-modal";
import Slider from "../components/common/slider";
import Suggestion from "../components/common/suggestion";
import TastingNotes from "../components/common/tasting-notes";
import Section from "../components/layout/content/section";
import Footer from "../components/layout/footer/footer";
import Header from "../components/layout/header";
import { addVariantToCart, getCheckoutItems, removeLineItemInCart, updateQuantityInCart } from "../service";

export default function Macallan50() {
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
    const resp = await addVariantToCart("7476929888438", 1);
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
    openCart()
  };

  return (
    <div>
      <PriceModal
        title="The Rarest Collection"
        subTitle="Macallan 52 Years"
        // tag="Sir Nick’s Pick"
        price="75,000"
        showModal={showModal}
        ToggleModal={ToggleModal}
        image="/assets/images/macllan-52-modal.png"
        handleOpenCart={handleOpenCart}
        buttonName={<span> i’m interested </span>}
      />
      <Header />
      {/* <div className="cart-icon-container" onClick={openCart}>
        <div className="cart-batch">{checkout.lineItems ? checkout.lineItems.length : 0}</div>
        <Image src="/assets/images/side-bottle.png" alt="bottle" height={45.25} width={20.56} />
        <div className="cart-icon-container-text"> Basket</div>
      </div> */}
      <Section>
        <div
          className={classnames(detailsStyles.banner_bg, detailsStyles.mobile_banner_50_bg, "sm:mb-[41px]")}
          style={{
            backgroundImage: `url(/assets/images/banner50.png)`,
          }}
        >
          <div className={classnames(detailsStyles.banner_content, "flex flex-wrap content-evenly text-left top-[10vh] sm:h-[90%] justify-end ml-auto")}>
            <span>
              <h1 className="sm:w-[360px] md:w-[570px]">The Rarest Collection</h1>
              <h3> Macallan 52 Years Old</h3>
              {/* <hr className="mt-[42px] w-[320px]" /> */}
              <button className={classnames(detailsStyles.knowPriceButton)} onClick={() => ToggleModal()}>
                <span>Know the Price</span>
              </button>
              {/* <p>Price on request. The Rarest Collection is only available exclusively at TheSpiritsEmbassy</p> */}
            </span>
            <span className={detailsStyles.banner_buy_btn} onClick={() => openCart()}>
              <span> i’m interested </span>
              {/* <span className="animate__animated animate__slower animate__headShake animate__infinite	infinite"> i’m interested </span> */}
            </span>
          </div>
        </div>
      </Section>
      <Section>
        <HeroTwoSection />
      </Section>
      <div className="relative">
        <div
          className={classnames(
            detailsStyles.suggestionBottle,
            "absolute left-[35vw] bottom-[29vw] sm:bottom-[5vw] flex items-center justify-center z-10 w-[211px] h-[376px] md:h-[588px] md:w-[370px] xl:w-auto"
          )}
        >
          <Image src="/assets/images/Macallan52.png" alt="Macallan 50" width={329} height={588} />
        </div>
        <Suggestion
          title={
            <span>
              AGED 52 <br /> YEARS
            </span>
          }
          subTitle="41.46% ABV./700 ML
          MATURED
          IN FINEST OAK CASKS"
          description="The Rarest 52 Year Old has been owned by Duncan Taylor Scotch Whisky since 1969, when they filled the cask at Macallan Distillery. It lay there maturing for over 40 years, before being moved to Duncan Taylor’s vaulted warehouse in Huntly, around 10 years ago, where it’s been kept under lock and key as part of their ancient archives."
          image="/assets/images/bg-rarest.png"
        />
      </div>
      <div className="relative hidden sm:block">
        <div className="absolute sm:left-[36vw] bottom-[5vw] flex items-center justify-center z-10 sm:w-[200px] md:w-[370px] xl:w-auto">
          <Image src="/assets/images/Macallan52.png" alt="Macallan 50" width={253} height={451} />
        </div>
        <Suggestion
          title={
            <span>
              AGED 52 <br /> YEARS
            </span>
          }
          subTitle="41.46% ABV./700 ML
          MATURED
          IN FINEST OAK CASKS"
          description={
            <span>
              This whisky is presented in a stunning crystal decanter, which is shaped like a dagger, in honour of the battlefields that surround the town of Huntly, the home of Duncan Taylor Scotch
              Whisky.
            </span>
          }
          image="/assets/images/bg2.png"
        />
      </div>
      <TastingNotes
        content={
          <>
            <p>
              <b>COLOUR:</b> Polished bronze.
            </p>
            <p>
              <b>NOSE:</b> Rich, dark chocolate with notes of overripe orange peel shining through. Hints of cinnamon and dusty spices, a touch of aniseed. Sweet wood and creamy vanilla.
            </p>
            <p>
              <b>PALATE:</b> Rich, toffee and demerara sugar abound. Caramel wafers, fruitiness is more subdued more reminiscent of under ripe fruits. Perfectly balanced, a little spice on the front
              of the tongue.
            </p>
            <p>
              <b>FINISH: </b> The maturation in American Oak shows a smoother, softer side to this whisky. A creamy sweeter more tropical flavoured whisky than the traditional aged sherry casks used by the distillery.
            </p>
          </>
        }
        title="tasting notes"
        leftImage="/assets/images/testnotes-img-three.png"
        rightImage="/assets/images/testnotes-img-four.png"
        topPadding={50}
        bottomPadding={25}
        noteName="mc50"
      />
      <ExpertNotes
        title={<span>Talking about this whisky, <br />Ian Logan said…</span>}
        image="/assets/images/expert-bg1.png"
        noteName="mc50"
        content={
          <span>
            ‘To create a whisky of such complexity and richness requires an intimate knowledge of all aspects of the art of whisky making. Distilled 52 years ago at Macallan Distillery this expression
            is unparalleled in intensity, flavour and character’
            <br /> <br />
            Ian Logan.
            <br />
            Senior Manager, Whiskies and Hospitality <br /> Duncan Taylor Scotch Whiskies.
          </span>
        }
      // btnTitle="ADD TO CART"
      />
      {/* <FlavourWheel title="flavour wheel" subTitle="The story of" image="/assets/images/bg50-3.png" /> */}
      <Section>
        <div className="mt-[55px] sm:mt-[143px] mb-[35px] sm:mb-[105px]">
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
            width={600}
            height={400}
            title="Duncan Taylor Scotch Whisky"
            subTitle="The story of"
          />
        </div>
      </Section>
      <Section>
        <ExploreMacallan path="/the-octave-premium" title="explore the macallan 31" subTitle="31 year old" image="/assets/images/macallan-31-full.png" />
      </Section>
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
        checkout={{}}
        isRegisterFormAvailable={true}
        isCartOpen={isCartOpen}
        handleCartClose={handleCartClose}
        updateQuantityInCart={(id, qty) => handleItems(id, qty, "update")}
        removeLineItemInCart={(id) => handleItems(id, 0, "remove")}
      />
      <Footer />
    </div>
  );
}
