// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <div className="text-sm p-4 flex justify-center">
      <p>
        © {new Date().getFullYear()} MediproGroupe. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
