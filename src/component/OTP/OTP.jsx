import { useState, useRef } from "react";
import axios from "axios"; // Import Axios
import './OTP.css'; // Import your CSS file

const OTP = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleOtpChange = (event, index) => {
    const value = event.target.value;

    // Check if the input is a number
    if (/^[0-9]*$/.test(value) || value === "") {
      const updatedOtp = [...otp];
      updatedOtp[index] = value;

      // Move focus to the next input field if a digit is entered
      if (value && index < 3) {
        inputRefs[index + 1].current.focus();
      }

      setOtp(updatedOtp);

      // Remove the red border when the input is valid
      event.target.style.border = "1px solid #ccc";
    } else {
      // Display an alert and add red border to the input field
      alert("Please enter only numbers");
      event.target.style.border = "2px solid red";
    }
  };

  const handleBackspace = (event, index) => {
    // Move focus to the previous input field if Backspace is pressed
    if (event.key === "Backspace" && index > 0 && !otp[index]) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handleVerify = () => {
    const otpValue = otp.join(""); // Join the OTP digits into a single string

    // Make an HTTP POST request to your backend for OTP verification
    axios.post("/api/verify-otp", { otp: otpValue })
      .then((response) => {
        // Handle the verification response from the backend
        if (response.data.isValid) {
          alert("OTP is valid!");
        } else {
          alert("OTP is invalid. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error verifying OTP:", error);
      });
  };

  return (
    <div className="outer-box">
      <div className="inner-box">
        <header className="signup-header">
          <h1>Enter OTP</h1>
        </header>
        <main className="signup-body">
          <p>
            <label htmlFor="otp">Enter OTP:</label>
            <div className="otp-inputs">
              {otp.map((digit, index) => (
                <input
                  type="text"
                  id={`otp-${index}`}
                  name={`otp-${index}`}
                  key={index}
                  value={digit}
                  onChange={(event) => handleOtpChange(event, index)}
                  onKeyDown={(event) => handleBackspace(event, index)}
                  maxLength={1} // Limit input to one character
                  ref={inputRefs[index]}
                />
              ))}
            </div>
          </p>
          <p>
            <input
              className="verify"
              type="button"
              id="verify"
              value="Verify"
              onClick={handleVerify}
            />
          </p>
        </main>
      </div>
    </div>
  );
};

export default OTP;
