import React from 'react';
import {Box, Grid, Container, List, ListItem, styled} from '@mui/material'
import {useSelector} from "react-redux";
import {hideFromTablet} from "../../utils/displayProps";
import {AppText} from "../typography";

const CategoriesContainer = styled(Box)({
    backgroundColor: 'teal',
    padding: 2,
    borderRadius: '4px',
    boxShadow: '0 0 10px #ccc',
    height: 'auto'
})
const Banner = () => {
    const {category} = useSelector(state => state.product)
    return (
        <Box  mb={2} p={[0, 3]}>
            <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={1} md={2} lg={2} sx={hideFromTablet}>
                    <CategoriesContainer>
                        <List>
                            {category.slice(0, 7).map((category, index) => (
                                <ListItem key={index} component={'a'} href={'/check'}>
                                    <AppText color={'white'} fontSize={'1.4rem'} fontWeight={'400'}>{category}</AppText>
                                </ListItem>
                                ))}
                            <ListItem component={'a'}>
                                <AppText color={'white'} fontSize={'1.4rem'} fontWeight={'400'}>See All</AppText>
                            </ListItem>
                        </List>
                    </CategoriesContainer>
                </Grid>
                <Grid item xs={12} md={10} lg={10}>
                    <Box height={'100%'} maxHeight={323} width={'100%'} marginTop={[1, 0]}>
                        <Box component={'img'} width={'100%'} height={'100%'} src={'https://images.pexels.com/photos/132700/pexels-photo-132700.jpeg?auto=compress&cs=tinysrgb&w=800'} sx={{objectFit: 'cover'}} alt={'banner'}/>
                    </Box>
                </Grid>
            </Grid>
            </Container>
        </Box>
    );
};

export default Banner;
