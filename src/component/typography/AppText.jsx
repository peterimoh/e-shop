import React from 'react';
import {Typography} from "@mui/material";
import PropTypes from "prop-types";

const AppText = ({children, color, ...props}) => {
    return (
        <Typography color={color} {...props} >
            {children}
        </Typography>
    );
};

AppText.propTypes = {
    children: PropTypes.node.isRequired
}

export default AppText;
