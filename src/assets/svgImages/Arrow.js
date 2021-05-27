import React from "react";
import s from "../../components/Header/Header.module.css";

const Arrow = (props) => {
    return <svg viewBox="0 0 5 9" className={s.arrow}>
        <path
            d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z"/>
    </svg>;
}

export default Arrow;