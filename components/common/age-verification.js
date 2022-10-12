import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { setCookie } from "../../helper";
import styles from "./age-verification.module.css";

const AgeVerification = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [optionSelected, setOptionSelected] = React.useState("");
  const router = useRouter();

  const handleSubmit = () => {
    if (optionSelected === "yes") {
      setCookie("ageVerified", true);
      router.push("/");
    } else {
      setShowModal(true);
    }
  };

  return (
    <div className={styles.termsAndConditionsBG}>
      {showModal && <AgeModal setOpenModal={setShowModal} />}
      <div className="flex align-middle items-center justify-center h-full px-[25px] sm:px-[0px]">
        <div className="block text-center">
          <div className="cursor-pointer">
            <Link href="/">
              <Image src="/assets/images/logo.svg" alt="Logo" width={189} height={103} />
            </Link>
            <h1>drink responsibly</h1>
            <p>
              We are committed to ensuring the Legacy Series is enjoyed responsibly. <br />
              Are you of legal drinking age in the country where you are right now?
            </p>
            <hr className="mt-[14px]" />
            <form className="flex items-center justify-center mt-[35px] mb-[37.82px] gap-[20.62px]">
              <button type="button" className={optionSelected === "yes" ? "bg-[#FFE699] text-black" : ""} value="yes" onClick={() => setOptionSelected("yes")}>
                YES
              </button>

              <button
                type="button"
                className={optionSelected === "no" ? "bg-[#FFE699] text-black" : ""}
                value="no"
                onClick={() => {
                  setOptionSelected("no");
                  setShowModal(true);
                }}
              >
                No
              </button>
            </form>
            <hr className="mb-[10px]" />
            <h6>
              By clicking on YES you are agreeing to the <i>Cookie Policy</i>, <i>Terms &#38; Conditions</i> and the <i>Privacy Policy</i>
            </h6>
            <button type="button" className={styles.btnSubmit} onClick={() => handleSubmit()}>
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const AgeModal = ({ setOpenModal }) => {
  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={() => setOpenModal(false)}></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
            <div className="mt-3 sm:flex">
              <div className="mt-2 text-center sm:ml-4 sm:text-left text-black">
                <h3 className="section-heading-2 xs">OOPS!</h3>
                <span className="text-black">Looks like you are not of legal age in your country!</span>
                <span className="mb-0 text-black">We are committed to ensuring legacy series is enjoyed responsibly.</span>
                <div className="items-center gap-2 mt-3 sm:flex">
                  <button className="w-50 mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2" onClick={() => setOpenModal(false)}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgeVerification;
