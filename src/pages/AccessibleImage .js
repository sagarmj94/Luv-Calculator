import React from "react";

const AccessibleImage = ({ src, alt }) => {
  return <img src={src} alt={alt} tabindex="0" />;
};

export default AccessibleImage;
