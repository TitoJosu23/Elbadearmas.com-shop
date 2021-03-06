import React from "react";

import "../../styles/ReturnPolicy.css";

export const ReturnPolicy = () => {
  return (
    <>
      <div className="container-rp">
        <div className="rp-1">
          <h4>ReturnPolicy</h4>
          <div className="rp-line"></div>
        </div>
        <div className="rp-2">
          <h3>RETURN POLICY</h3>
        </div>
        <div className="rp-3">
          <p>
            We will accept returns for a full refund within 15 days of the date
            your order was delivered. Returned items must be in their original
            condition, unwashed, unworn and include tags. Exchanges: We are not
            currently accepting exchanges. If your return is accepted, we will
            issue a full refund to the original source of payment.{" "}
          </p>
        </div>
      </div>
    </>
  );
};
