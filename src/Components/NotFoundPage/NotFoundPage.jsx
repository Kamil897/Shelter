import React from "react";
import s from './NotFoundPage.module.scss'; 
import Fizzy from "../Fizzy/Fizzy";

const NotFoundPage = ({hoverIntensity, enableHover}) => {
  return (
    <div className={s.body}>
        <div className={s.fizzy}>
            <Fizzy 
                baseIntensity={0.2} 
                hoverIntensity={hoverIntensity} 
                enableHover={enableHover}
            >
                404
                NotFound
            </Fizzy>
        </div>
    </div>
  );
};

export default NotFoundPage;