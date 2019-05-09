import React from "react";
import "./Header.css";

const HeaderContent = () => {
  return (
    <p>
      Let's learn react by building simple interfaces with components. Don't try
      to overthink it, just keep it simple and have fun. Once you feel
      comfortable using components you are well on your way to using React!
    </p>
  );
};

///
const HeaderTitle = () => {
  return (
    <div class="header-title">
      <h3>Lambda School</h3> <h4>@LambdaSchool * 26 jan</h4>
    </div>
  );
};

export default HeaderTitle;
