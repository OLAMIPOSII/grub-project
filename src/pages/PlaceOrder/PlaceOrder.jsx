import React, { useContext, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../Context/StoreContext";
const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [input, setInput] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // Validation function for email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  // Validation function for phone number
  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^[2-9]{1}[0-9]{2}-[0-9]{3}-[0-9]{4}$/; // Validate phone in format 123-456-7890
    return phoneRegex.test(phone);
  };
  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");

    // Reset error state
    setError("");
    if (!email) {
      setError("Email information is required for checkout.");
      return;
    }
    if (!firstName) {
      setError("Firstname is required for checkout.");
      return;
    }
    if (!lastName) {
      setError("Secondname is required for checkout.");
      return;
    }
    if (!street) {
      setError("Street information is required for checkout.");
      return;
    }
    if (!city) {
      setError("City information is required for checkout.");
      return;
    }
    if (!state) {
      setError("State information is required for checkout.");
      return;
    }
    if (!zipcode) {
      setError("Zipcode information is required for checkout.");
      return;
    }
    if (!country) {
      setError("Country information is required for checkout.");
      return;
    }
    if (!phoneNumber) {
      setError("Phone number is required for checkout.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email.");
      return;
    }
    // Validate phone number format
    if (!validatePhoneNumber(phoneNumber)) {
      setError("Please enter a valid phone number (XXX-XXX-XXXX).");
      return;
    }
    // Proceed with form submission (e.g., API call)
    console.log("Form submitted successfully", { input, email });

    // Clear fields (optional)
    setEmail("");
    setPhoneNumber("");
    setFirstName("");
    setLastName("");
    setStreet("");
    setCity("");
    setState("");
    setZipcode("");
    setCountry("");
  };
  return (
    <form action="" className="place-order" onSubmit={handleSubmit}>
      <div className="place-order-left">
        <p className="title">DELIVERY INFORMATION.</p>
        {error && <div className="error-message">{error}</div>}
        <div className="multi-fields">
          <input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
        <div className="multi-fields">
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            placeholder="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div className="multi-fields">
          <input
            type="text"
            placeholder="Zip code"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
          />
          <input
            type="text"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <input
          type="text"
          placeholder="Phone (XXX-XXX-XXXX)"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
              <hr />
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};
export default PlaceOrder;
