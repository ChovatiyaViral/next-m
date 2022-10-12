import "animate.css";
import AOS from "aos";
import classnames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Section from "../content/section";
import styles from "./footer.module.css";

const Footer = () => {
  // const goToTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  React.useEffect(() => {
    AOS.init({
      duration: 1200,
    });

    // var toTopButton = document.getElementById("to-top-button");
    // // When the user scrolls down 200px from the top of the document, show the button
    // window.onscroll = function () {
    //   if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    //     toTopButton.classList.remove("hidden");
    //   } else {
    //     toTopButton.classList.add("hidden");
    //   }
    // };
  }, []);

  return (
    <>
      <Section className="sm:pt-16 pb-[15px] sm:pb-20 relative">
        <div className={classnames(styles.footer_container_bg, "flex gap-10 justify-between")}>
          <div className="sm:ml-8">
            <h1>GET IN TOUCH</h1>
            <p>
              <a href="mailto:info@thespiritsembassy.com">info@thespiritsembassy.com</a>
            </p>
            <p className="mt-2">
              <a href="tel:01466-795-105">+44 (0)1466 795 105</a>
            </p>
            <div className={styles.socialMediaIcons}>
              <span className={styles.social_icon}>
                <a href="https://www.facebook.com/TheSpiritsEmbassy/" target="_blank" rel="noreferrer">
                  <FaFacebookF />
                </a>
              </span>
              <span className={styles.social_icon}>
                <a href="https://twitter.com/Spirits_Embassy" target="_blank" rel="noreferrer">
                  <FaTwitter />
                </a>
              </span>
              <span className={styles.social_icon}>
                <a href="https://www.instagram.com/thespiritsembassy/" target="_blank" rel="noreferrer">
                  <FaInstagram />
                </a>
              </span>
            </div>
          </div>

          <div className="cursor-pointer">
            <Link href="https://thespiritsembassy.com/">
              <Image src="/assets/images/logo.svg" width={149} height={81} alt="bg image" className="opacity-75" />
            </Link>
          </div>

          <div className="sm:ml-8">
            <h1>SITE MAP</h1>
            <ul>
              <li>
                <Link href="https://thespiritsembassy.com/collections/scotch-whisky">WHISKY</Link>
              </li>
              <li>
                <Link href="https://thespiritsembassy.com/collections/gin">GIN & OTHER SPIRITS </Link>
              </li>
              <li>
                <Link href="https://thespiritsembassy.com/collections/tasting">TASTINGS </Link>
              </li>
              <li>
                <Link href="https://thespiritsembassy.com/collections/gift-sets">GIFTS</Link>
              </li>
              <li>
                <Link href="https://thespiritsembassy.com/pages/about-us"> ABOUT US</Link>
              </li>
              {/* <li>
                <Link href="https://thespiritsembassy.com/pages/black-friday-terms-conditions"> BLACK FRIDAY</Link>
              </li> */}
              <li>
                <Link href="https://thespiritsembassy.com/pages/international-shipping-rates"> INTERNATIONAL SHIPPING RATES</Link>
              </li>
            </ul>
          </div>

          {/* <div className={classnames(styles.footerInputSection, "sm:ml-12")}>
            <h1>NEWSLETTTER SIGN UP</h1>
            <form>
              <input placeholder="Email Address" />
              <button type="button">Sign Up</button>
            </form>
            <div className={classnames(styles.cardIcons)}>
              <span className={styles.cardOption}>
                <Image src="/assets/images/visa-card.png" width={30} height={13} alt="Visa Card" />
              </span>
              <span className={styles.cardOption}>
                <Image src="/assets/images/master-card.png" width={30} height={18} alt="Master Card" />
              </span>
              <span className={styles.cardOption}>
                <Image src="/assets/images/american-express-card.png" width={60} height={60} alt="Express Card" />
              </span>
              <span className={styles.cardOption}>
                <Image src="/assets/images/paypal-card.png" width={30} height={12} alt="Paypal Card" />
              </span>
              <span className={styles.cardOption}>
                <Image src="/assets/images/solo-card.png" width={30} height={30} alt="Solo Card" />
              </span>
            </div>
          </div> */}
        </div>
        <p className={classnames(styles.footer_description, "mt-20")}>
          The Spirits Embassy has been brought to you by award winning online retailer Single Malts Direct, who have over 15 years experience in carefully selecting the rarest and finest whiskies from
          every corner of the world. our online store gives you not only th largest choice in whisky, but gin, rum, vodka and other spirits &#38; liqeurs.
        </p>
      </Section>
      <div className={classnames(styles.copyRightFooter, "mb-0")}>
        <Section className="ss:px-28 flex items-center justify-between my-6">
          <h6>@ Copyright of the Embassy {new Date().getFullYear()} </h6>
          <ul className="flex items-center">
            <li>
              <Link href="https://thespiritsembassy.com/collections/scotch-whisky">Whisky</Link>
            </li>
            <li>
              <Link href="https://thespiritsembassy.com/collections/gin">Gin </Link>
            </li>
            <li>
              <Link href="https://thespiritsembassy.com/policies/terms-of-service"> Terms of Service </Link>
            </li>
            <li>
              <Link href="https://thespiritsembassy.com/policies/refund-policy">Refund Policy </Link>
            </li>
          </ul>
        </Section>
      </div>
    </>
  );
};

export default Footer;
