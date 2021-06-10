import React from "react";
import child1 from "../img/child.png";
import "../assets/css/viewst.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function ViewStuTc({
  setmodelOp,
  modelOp,
  stPrDetail,
  setstPrDetail,
}) {
  console.log(stPrDetail);
  const close = (e) => {
    if (
      e.target.classList.contains("modelbg") ||
      e.target.classList.contains("vlvl")
    ) {
      setmodelOp(false);
      setstPrDetail([]);
    }
  };

  return (
    <div>
      {modelOp ? (
        stPrDetail.length !== 0 ? (
          <div className="modelbg" onClick={close}>
            <div className="modelcard">
              <div className="clsst">
                <button onClick={close}>
                  <i className="far fa-times-circle vlvl"></i>
                </button>
              </div>
              <div className="pageHead">
                <div className="propicst">
                  <LazyLoadImage
                    src={stPrDetail.profile_pic}
                    alt=""
                    effect="blur"
                  />
                </div>
              </div>
              <div className="pagebottom">
                <h1>
                  {stPrDetail.user.first_name + " " + stPrDetail.user.last_name}
                </h1>
                <h2>
                  <span>User Name</span>
                  {stPrDetail.user.username}
                </h2>
                <h3>
                  <span>Email</span> {stPrDetail.user.email}
                </h3>
                <h3>
                  <span>Phone Number</span> {stPrDetail.user.phone_no}
                </h3>
                <h4>
                  <span>Parent Number</span>{" "}
                  {stPrDetail.user.parent_number || "null"}
                </h4>
                <h4>
                  <span>Telegram Number</span>{" "}
                  {stPrDetail.user.telegram_number || "null"}
                </h4>
                <h4>
                  <span>Address</span> {stPrDetail.user.address || "null"}
                </h4>
                <div className="dis">
                  <p>
                    {stPrDetail.description !== "null" && stPrDetail.description
                      ? stPrDetail.description
                      : ""}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )
      ) : (
        ""
      )}
    </div>
  );
}
