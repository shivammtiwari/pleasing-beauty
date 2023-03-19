import React, { useState } from "react";
import './login.css';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const LoginForm = () => {
  const [value, setValue] = useState();

  return (
    <>
      <div>
        <form>
          <PhoneInput
            country={"in"}
            onlyCountries={["in", "us", "sg", "sa", "ae"]}
            className="input"
            placeholder="Your phone number "
            value={value}
            onChange={setValue}
            dropdownStyle={{ textAlign: "left", width: "240px" }}
            countryCodeEditable={false}
            buttonStyle={{
              padding: " 0px 20px",
              marginLeft: "20px",
              height: "50px",
              background: "white",
             
            }}
            
            inputStyle={{
              width: "270px",
              height: "50px",
              marginLeft: "40px",
              fontSize: "18px",
              
            }}
            inputProps={{
              name: "phone",
              required: true,
              autoFocus: true,
            }}
          />
          <div id="sign-in-button"></div>
          <button className="continue" type="submit">
            Continue
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
