import React from 'react';
import PropTypes from "prop-types";
import {Drawer, styled} from "@mui/material";

const StyledDrawer = styled(Drawer)({
    '& .MuiDrawer-paper': {
        width: '70%',
        backgroundColor: 'white',
        padding: '20px',
        boxSizing: 'border-box',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)'
    }
})

const MobileDrawer = ({open, onClose}) => {
    return (
        <StyledDrawer
            anchor={'right'}
            open={open}
            variant={'temporary'}
            onClose={onClose}
            ModalProps={{keepMounted: true}}
        >
            <h1>hello world</h1>
        </StyledDrawer>
    );
};


MobileDrawer.propTypes = {
    open: PropTypes.bool, onClose: PropTypes.func,
}

export default MobileDrawer;
