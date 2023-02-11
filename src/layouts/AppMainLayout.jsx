import React from 'react';
import PropTypes from "prop-types";
import {Box, styled} from '@mui/material'
import Navbar from "./Navbar";
import Footer from "./Footer";

const GridLayout = styled(Box)({
    display: 'grid',
    gridTemplateRows: `auto 1fr auto`,
    minHeight: '100%'
})
const AppMainLayout = ({children, ...props}) => {
    return (
        <GridLayout>
            <Navbar />
            {children}
            <Footer />
        </GridLayout>
    );
};

AppMainLayout.propTypes = {
    children: PropTypes.node,
}

export default AppMainLayout;
