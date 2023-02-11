import React from 'react';
import {Box, Stack} from '@mui/material'
import {AppText} from "../component/typography";

const Footer = () => {
    return (
        <Stack bgcolor={'black'} padding={'1rem'} color={'white'} height={[30, 40]} justifyContent={'center'} alignItems={'center'} spacing={3} direction={'row'}>
            <AppText  fontSize={'1.4rem'}>Made with ❤️</AppText>
            <AppText fontSize={'1.4rem'}>
                &copy; E-Shop {new Date().getFullYear()} | All rights reserved.
            </AppText>
        </Stack>
    );
};

export default Footer;
