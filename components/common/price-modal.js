import classnames from "classnames";
import Image from "next/image";
import React from "react";
import styles from "./price-modal.module.css";

const PriceModal = (props) => {
    const { title, subTitle, tag, price, showModal, ToggleModal, image, handleOpenCart, buttonName } = props;
    return (
        <>
            {showModal ? (
                <>
                    <div className={classnames(styles.modal, "flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none")}>
                        <div className={classnames(styles.modalContent, "relative")}>
                            <div className={classnames(styles.priceModal)}>
                                <div className={styles.priceFrame} style={{
                                    backgroundImage: `url(${image})`,
                                }}>
                                    <div className={styles.closeIcon} onClick={() => ToggleModal()}>
                                        <Image
                                            src="/assets/images/modal-close-icon.png"
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                    {title && <h1>{title}</h1>}
                                    {subTitle && <h2>{subTitle}</h2>}
                                    {tag && <h6>{tag}</h6>}
                                    {price && <h3>£{price}</h3>}
                                    <p>(ex-VAT price)</p>
                                    <div className="flex justify-center" onClick={() => handleOpenCart()}>
                                        {
                                            buttonName && <button type="button" className={styles.addToCartBtn}>{buttonName}</button>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}</>
    );
};

export default PriceModal;
