import { useState } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { toast } from "react-toastify";
import config from "../../config";

const { API } = config;

const userDataField = {
  name: "",
  mobile_no: "",
  email: "",
};

function RegisterForm(props) {
  const [userRegistrationData, setUserRegistrationData] = useState(userDataField);
  const [loader, setLoader] = useState(false);

  const handleChange = (e) => {
    setUserRegistrationData({
      ...userRegistrationData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegistration = async (userData) => {
    const { name, mobile_no, email } = userData;
    if (name && isValidPhoneNumber(mobile_no) && validateEmail(email)) {
      setLoader(true);
      try {
        await fetch(`${API}v1/auth/register`, {
          method: "POST",
          body: JSON.stringify({
            name,
            mobile_no,
            email,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((res) => res.json())
          .then((response) => {
            if (response.code === 200) {
              toast.success(response?.message);
              setUserRegistrationData(userDataField);
              props.onClose();
            } else {
              toast.error(`${response?.message}`);
            }
            setLoader(false);
          });
      } catch (err) {
        console.log(err);
        setLoader(false);
      }
    } else {
      if (!isValidPhoneNumber(mobile_no)) {
        toast.error("Invalid Mobile Number");
      } else if (!validateEmail(email)) {
        toast.error("Invalid Email");
      } else {
        toast.error("Please fill all details");
      }
    }
  };

  const handleMobileNumberChange = (name, value) => {
    setUserRegistrationData({
      ...userRegistrationData,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  };

  return (
    <div className="register__form">
      <label htmlFor="first-name" className="block text-sm mt-3 font-medium text-[#FFF]">
        FULL NAME*
      </label>
      <input
        type="text"
        name="name"
        id="first-name"
        onChange={handleChange}
        value={userRegistrationData.name}
        autoComplete="given-name"
        className="mt-1 focus:ring-white-500 focus:border-white-500 block w-full bg-slate-300 shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
      <label htmlFor="email" className="block text-sm mt-3 font-medium text-[#FFF]">
        EMAIL*
      </label>
      <input
        type="email"
        name="email"
        id="email"
        onChange={handleChange}
        value={userRegistrationData.email}
        autoComplete="email"
        className="mt-1 focus:ring-white-500 focus:border-white-500 block w-full bg-slate-300 shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
      <label htmlFor="mobile-no" className="block text-sm font-medium text-[#FFF] pt-6">
        MOBILE NO*
      </label>
      <PhoneInput
        international
        smartCaret
        countryCallingCodeEditable={true}
        defaultCountry="GB"
        placeholder="Enter mobile number"
        value={userRegistrationData.mobile_no}
        onChange={(value) => handleMobileNumberChange("mobile_no", value)}
      />
      <div className="justify-start">
        <button type="button" className="Cart__checkout button" onClick={() => handleRegistration(userRegistrationData)}>
          {loader ? (
            <div className="flex justify-center items-center border-black">
              <div className="spinner-border animate-spin inline-block w-4 h-4 border-2 rounded-full border-x-black border-t-black border-b-[#F3AA93]" role="status">
                <span className="visually-hidden bg-transparent"></span>
              </div>
            </div>
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </div>
  );
}

export default RegisterForm;
