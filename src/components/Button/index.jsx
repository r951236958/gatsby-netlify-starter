import { Button as RMDButton } from "@react-md/button";
import PropTypes from 'prop-types';
import React from "react";
import "./styles.scss";


const Button = ({ children, themeType, theme, buttonType, ...otherProps }) => {
  return (
    <RMDButton 
     themeType={themeType}
     theme={theme}
     buttonType={buttonType}
      {...otherProps}
    >
      {children}
    </RMDButton>
  )
}

export default Button

Button.defaultProps = {
  theme: `clear`,
  themeType: `contained`,
  buttonType: ``,
}

Button.propTypes = {
  theme: PropTypes.string,
  themeType: PropTypes.string,
  buttonType: PropTypes.string,
}