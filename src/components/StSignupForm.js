import React, { useRef } from "react";
import { Link, Redirect } from "react-router-dom";
import StValidate from "../utils/hooks/StValidate";
import ValidateSignUp from "./ValidateSignUp";

export default function StSignupForm() {
  const [hadelChanege, hadelSubmit, values, errors, hideError, hide, ac] =
    StValidate(ValidateSignUp); //custom hook

  const passwordRef = useRef();
  const repasswordRef = useRef();

  //function for trigger show password field
  const showPassword = (e) => {
    let checked = e.target.checked;

    if (checked) {
      passwordRef.current.type = "text";
      repasswordRef.current.type = "text";
    } else {
      passwordRef.current.type = "password";
      repasswordRef.current.type = "password";
    }
  };

  if (ac) {
    return <Redirect to="/stlogin" />;
  }

  return (
    <div>
      <form onSubmit={hadelSubmit}>
        <div className="sect">
          <p>
            <label htmlFor="fn">First Name</label>
            <input
              type="text"
              name="firstName"
              id="fn"
              value={values.firstName}
              onChange={hadelChanege}
              className={errors.firstName ? "error" : ""}
              onFocus={hideError}
            />
            {errors.firstName && (
              <span className={`tip ${hide.firstName ? "hidetip" : ""}`}>
                {errors.firstName}
              </span>
            )}
          </p>
          <p>
            <label htmlFor="ln">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="ln"
              value={values.lastName}
              onChange={hadelChanege}
              className={errors.lastName ? "error" : ""}
              onFocus={hideError}
            />
            {errors.lastName && (
              <span className={`tip ${hide.lastName ? "hidetip" : ""}`}>
                {errors.lastName}
              </span>
            )}
          </p>
        </div>
        <div className="sect">
          <p>
            <label htmlFor="un">Username (Class Number)</label>
            <input
              type="text"
              name="userName"
              id="un"
              min="6"
              value={values.userName}
              onChange={hadelChanege}
              className={errors.userName ? "error" : ""}
              onFocus={hideError}
              style={{ textTransform: "uppercase" }}
            />
            {errors.userName && (
              <span className={`tip ${hide.userName ? "hidetip" : ""}`}>
                {errors.userName}
              </span>
            )}
          </p>
          <p>
            <label htmlFor="em">Email</label>
            <input
              type="text"
              name="email"
              id="em"
              value={values.email}
              onChange={hadelChanege}
              className={errors.email ? "error" : ""}
              onFocus={hideError}
            />
            {errors.email && (
              <span className={`tip ${hide.email ? "hidetip" : ""}`}>
                {errors.email}
              </span>
            )}
          </p>
          <p>
            <label htmlFor="em">Address</label>
            <input
              type="text"
              name="address"
              id="em"
              value={values.address}
              onChange={hadelChanege}
              className={errors.address ? "error" : ""}
              onFocus={hideError}
            />
            {errors.address && (
              <span className={`tip ${hide.address ? "hidetip" : ""}`}>
                {errors.address}
              </span>
            )}
          </p>
        </div>
        <div className="sect">
          <p>
            <label htmlFor="em">District</label>
            <select
              type="text"
              name="district"
              id="pn"
              value={values.district}
              onChange={hadelChanege}
              className={errors.district ? "error" : ""}
              onFocus={hideError}
            >
              <option value="">Select District</option>
              <option value="Gampaha">Gampaha</option>
              <option value="Colombo">Colombo</option>
              <option value="Kalutara">Kalutara</option>
              <option value="Jaffna">Jaffna</option>
              <option value="Kilinochchi">Kilinochchi</option>
              <option value="Mannar">Mannar</option>
              <option value="Mullaitivu">Mullaitivu</option>
              <option value="Vavuniya">Vavuniya</option>
              <option value="Puttalam">Puttalam</option>
              <option value="Kurunegala">Kurunegala</option>
              <option value="Anuradhapura">Anuradhapura</option>
              <option value="Polonnaruwa">Polonnaruwa</option>
              <option value="Matale">Matale</option>
              <option value="Kandy">Kandy</option>
              <option value="Nuwara">Nuwara Eliya</option>
              <option value="Kegalle">Kegalle</option>
              <option value="Ratnapura">Ratnapura</option>
              <option value="Trincomalee">Trincomalee</option>
              <option value="Batticaloa">Batticaloa</option>
              <option value="Ampara">Ampara</option>
              <option value="Badulla">Badulla</option>
              <option value="Monaragala">Monaragala</option>
              <option value="Hambantota">Hambantota</option>
              <option value="Matara">Matara</option>
              <option value="Galle">Galle</option>
            </select>
            {errors.district && (
              <span className={`tip ${hide.district ? "hidetip" : ""}`}>
                {errors.district}
              </span>
            )}
          </p>
        </div>
        <div className="sect">
          <p>
            <label htmlFor="em">Phone Number</label>
            <input
              type="text"
              name="phonenumber"
              id="pn"
              value={values.pn}
              onChange={hadelChanege}
              className={errors.phonenumber ? "error" : ""}
              onFocus={hideError}
            />
            {errors.phonenumber && (
              <span className={`tip ${hide.phonenumber ? "hidetip" : ""}`}>
                {errors.phonenumber}
              </span>
            )}
          </p>
        </div>
        <div className="sect">
          <p>
            <label htmlFor="em">Telegram Number</label>
            <input
              type="text"
              name="telegram_number"
              id="pn"
              value={values.tpn}
              onChange={hadelChanege}
              className={errors.telegram_number ? "error" : ""}
              onFocus={hideError}
            />
            {errors.telegram_number && (
              <span className={`tip ${hide.telegram_number ? "hidetip" : ""}`}>
                {errors.telegram_number}
              </span>
            )}
          </p>
          <p>
            <label htmlFor="em">Parent Phone Number</label>
            <input
              type="text"
              name="parent_number"
              id="pn"
              value={values.parent_pn}
              onChange={hadelChanege}
              className={errors.parent_number ? "error" : ""}
              onFocus={hideError}
            />
            {errors.parent_number && (
              <span className={`tip ${hide.parent_number ? "hidetip" : ""}`}>
                {errors.parent_number}
              </span>
            )}
          </p>
        </div>
        <div className="sect">
          <p>
            <label htmlFor="pw">Password</label>
            <input
              type="Password"
              name="pw"
              id="pw"
              value={values.pw}
              onChange={hadelChanege}
              className={errors.pw ? "error" : ""}
              onFocus={hideError}
              ref={passwordRef}
            />
            {errors.pw && (
              <span className={`tip ${hide.pw ? "hidetip" : ""}`}>
                {errors.pw}
              </span>
            )}
          </p>
          <p>
            <label htmlFor="cpw">Retype Password</label>
            <input
              type="password"
              name="cpw"
              id="cpw"
              value={values.cpw}
              onChange={hadelChanege}
              className={errors.cpw ? "error" : ""}
              onFocus={hideError}
              ref={repasswordRef}
            />
            {errors.cpw && (
              <span className={`tip ${hide.cpw ? "hidetip" : ""}`}>
                {errors.cpw}
              </span>
            )}
          </p>
        </div>
        <div className="showpw">
          <p>
            <input
              type="checkbox"
              name="showPw"
              id="showpw"
              onChange={(e) => showPassword(e)}
            />
            <label htmlFor="showpw">Show Password</label>
          </p>
        </div>
        <div className="but">
          <button>Register</button>
          <div className="in">
            <p>
              Already Have An Account?<Link to="/stlogin"> Log In Here</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
