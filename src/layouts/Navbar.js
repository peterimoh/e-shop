import React from 'react';
import {Box, Stack} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {BsSearch} from 'react-icons/bs'
import {SlBasket} from 'react-icons/sl'
import {HiOutlineBars3} from 'react-icons/hi2'
import {AppText} from "../component/typography";
import MobileDrawer from "./MobileDrawer";
import {hideDesktop, hideMobile} from "../utils/displayProps";

const Menu = [
    {page: 'Home', link: '/'},
    {page: 'Products', link: '/products'},
    {page: 'Cart', link: '/cart'},
    {page: 'Contact', link: '/contact'},
]

const Navbar = () => {
    const navigate = useNavigate()

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box bgcolor={'teal'} height={['50px', '60px']} display={'flex'} justifyContent={'space-between'}
             alignItems={'center'} paddingX={['17px', '25px']}>
            <a>
                <AppText color={'white'} fontSize={['1.4rem', '2rem']} fontWeight={'bold'} sx={{cursor: 'pointer'}}>
                    E-Shop
                </AppText>
            </a>

            <Box sx={hideMobile}>
                <Stack direction={'row'} spacing={3} alignItems={'center'} justifyContent={'center'}>
                    {Menu.map((item, index) => (
                            <AppText color={'white'} fontSize={['1.4rem', '1.6rem']} fontWeight={'500'}
                                     sx={{cursor: 'pointer', textDecoration: 'none'}} component={Link}
                                     to={item.link} key={index}>
                                {item.page}
                            </AppText>
                    ))}
                </Stack>
            </Box>

            <Stack direction={'row'} justifyContent={'space-between'} spacing={3}>
                <Stack direction={'row'} alignItems={'center'} spacing={[1, 2]}>
                    <BsSearch size={20} color={'white'} style={{cursor: 'pointer'}}/>
                    <SlBasket size={20} color={'white'} style={{cursor: 'pointer'}} onClick={() => navigate('/cart')}/>
                </Stack>
                <Stack direction={'row'} alignItems={'center'} spacing={1} sx={hideMobile}>
                    <AppText color={'white'} component={Link} to={'/auth/login'} fontWeight={'500'} fontSize={'1.4rem'}
                             sx={{cursor: 'pointer', textDecoration: 'none'}}>Login</AppText>
                    <AppText color={'white'} fontWeight={'500'} component={Link} to={'/auth/register'}
                             fontSize={'1.4rem'} sx={{cursor: 'pointer', textDecoration: 'none'}}>Get Started</AppText>
                </Stack>
                <Box sx={hideDesktop}>
                    <HiOutlineBars3 size={30} color={'white'} style={{cursor: 'pointer'}} onClick={handleOpen}/>
                    <MobileDrawer onClose={handleClose} open={open}/>
                </Box>
            </Stack>
        </Box>
    );
};

export default Navbar;
