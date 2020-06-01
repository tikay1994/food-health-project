import React, { useState } from "react";
import "./style.css";

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 20) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 20) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <button
      className="scrollTop"
      onClick={scrollTop}
      style={{ height: 40, display: showScroll ? "block" : "none" }}
    >
      <svg height="24px" width="24px" viewBox="0 0 24 24">
        <path d="M6.984 14.016l5.016-5.016 5.016 5.016h-10.031z"></path>>
      </svg>
    </button>
  );
};

export default ScrollArrow;
