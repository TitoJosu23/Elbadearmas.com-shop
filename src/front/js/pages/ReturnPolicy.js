import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ReturnPolicy = () => {
  return (
    <>
      <div class="container-rp">
        <div>
          <h2>ReturnPolicy</h2>
        </div>
        <div>
          <h3>RETURN POLICY</h3>
        </div>
        <div>
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
