import React, { useState } from "react";
import QRCode from "qrcode.react";
import "./MyScan.css";
import scan from '../scan.jpg'

export function MyScan() {
  const [textValue, setTextValue] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [qrValue, setQrValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const qrData = `${textValue} ${mobileNumber}`; // Combine text and mobile number
    setQrValue(qrData);
  };

  return (
    <div>
      
      {/* <img src={scan} alt="." className="text-center"  style={{width:'10%'}}/> */}
      <form
        onSubmit={handleSubmit}
        style={{ marginTop: "200px" }}
        className="container"
      >
        <p>
          We provide you with a QR code service for greater safety for your
          child. You can print the QR code on the child’s clothes or on a chain
          or bracelet!
        </p>
        <input
          type="text"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          placeholder="Enter parent name"
        />
        <br />
        <input
          type="tel"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          placeholder="Enter mobile number"
        />
        <br />
        <button type="submit">Generate QR Code</button>
      </form>
      {qrValue && (
        <QRCode
          value={qrValue}
          style={{ marginLeft: "507px", marginTop: "10px" }}
        />
      )}
    </div>
  );
}
