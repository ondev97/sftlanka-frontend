import React from "react";

export default function StAcDetailsSettingsFrm({
  values,
  hadelChange,
  hadelSubmitForm,
  hideError,
  errors,
  hide,
}) {
  return (
    <div>
      <form onSubmit={hadelSubmitForm}>
        <div className="sectpr">
          <p>
            <label htmlFor="fn">First Name</label>
            <input
              type="text"
              id="fn"
              name="firstName"
              value={values.firstName || ""}
              onChange={hadelChange}
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
              id="ln"
              name="lastName"
              value={values.lastName || ""}
              onChange={hadelChange}
              onFocus={hideError}
            />
            {errors.lastName && (
              <span className={`tip ${hide.lastName ? "hidetip" : ""}`}>
                {errors.lastName}
              </span>
            )}
          </p>
        </div>
        <div className="sectpr">
          <p>
            <label htmlFor="un">Username (Class Number)</label>
            <input
              type="text"
              id="un"
              name="userName"
              style={{ textTransform: "uppercase" }}
              value={values.userName || ""}
              onChange={hadelChange}
              onFocus={hideError}
            />
            {errors.userName && (
              <span className={`tip ${hide.userName ? "hidetip" : ""}`}>
                {errors.userName}
              </span>
            )}
          </p>
          <p>
            <label htmlFor="pn">Phone Number</label>
            <input
              type="text"
              id="pn"
              name="phoneNumber"
              value={values.phoneNumber || ""}
              onChange={hadelChange}
              onFocus={hideError}
            />
            {errors.phoneNumber && (
              <span className={`tip ${hide.phoneNumber ? "hidetip" : ""}`}>
                {errors.phoneNumber}
              </span>
            )}
          </p>
        </div>
        <div className="sectpr">
          <p style={{ marginRight: "15px" }}>
            <label htmlFor="pn">Parent Phone Number</label>
            <input
              type="text"
              id="un"
              name="parent_number"
              value={values.parent_number || ""}
              onChange={hadelChange}
              onFocus={hideError}
            />
            {errors.parent_number && (
              <span className={`tip ${hide.parent_number ? "hidetip" : ""}`}>
                {errors.parent_number}
              </span>
            )}
          </p>
          <p>
            <label htmlFor="pn">Telegram Number</label>
            <input
              type="text"
              id="pn"
              name="telegram_number"
              value={values.telegram_number || ""}
              onChange={hadelChange}
              onFocus={hideError}
            />
            {errors.telegram_number && (
              <span className={`tip ${hide.telegram_number ? "hidetip" : ""}`}>
                {errors.telegram_number}
              </span>
            )}
          </p>
        </div>
        <div className="sectpr">
          <p>
            <label htmlFor="ad">Email</label>
            <input
              type="text"
              id="em"
              name="email"
              value={values.email || ""}
              onChange={hadelChange}
              onFocus={hideError}
            />
            {errors.email && (
              <span className={`tip ${hide.email ? "hidetip" : ""}`}>
                {errors.email}
              </span>
            )}
          </p>
        </div>
        <div className="sectpr">
          <p>
            <label htmlFor="ad">Address</label>
            <input
              type="text"
              id="ad"
              name="address"
              value={values.address || ""}
              onChange={hadelChange}
              onFocus={hideError}
            />
            {errors.address && (
              <span className={`tip ${hide.address ? "hidetip" : ""}`}>
                {errors.address}
              </span>
            )}
          </p>
        </div>
        <div className="sectpr">
          <p>
            <label htmlFor="dist">District</label>
            <select
              type="text"
              id="dist"
              name="district"
              value={values.district || ""}
              onChange={hadelChange}
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
        <div className="sectpr">
          <p>
            <label htmlFor="ad">Descriptions</label>
            <textarea
              cols="30"
              rows="10"
              name="des"
              value={
                values.des === "null" || values.des === null ? "" : values.des
              }
              onChange={hadelChange}
              onFocus={hideError}
            ></textarea>
            {errors.des && (
              <span className={`tip ${hide.des ? "hidetip" : ""}`}>
                {errors.des}
              </span>
            )}
          </p>
        </div>
        <div className="sectpr">
          <p>
            <label htmlFor="pw" style={{ fontWeight: "bold" }}>
              Password
            </label>
            <input
              type="password"
              name="pw"
              id="pw"
              value={values.pw}
              onChange={hadelChange}
              onFocus={hideError}
              style={{ borderColor: "#f57100" }}
            />
            {errors.pw && (
              <span className={`tip ${hide.pw ? "hidetip" : ""}`}>
                {errors.pw}
              </span>
            )}
          </p>
        </div>
        <div className="pro_edit_sub">
          <button>Save</button>
        </div>
      </form>
    </div>
  );
}
