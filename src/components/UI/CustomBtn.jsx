import React from "react";
import s from "./CustomBtn.module.scss";

const CustomBtn = ({ text, icon, width, height, mt, url, onClick }) => {
  return (
    <button onClick={onClick}
      className={s.btn}
      style={{ width: width, height: height, marginTop: mt }}
    >
      <a href={url}></a>
      <img src={icon} alt="" />
      <span><a href={url}>{text}</a></span>
    </button>
  );
};

export default CustomBtn;
