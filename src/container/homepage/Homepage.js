import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import axios from "axios";
import {AppMainLayout} from "../../layouts";
import {Banner} from "../../component/homepage";
import {GET_CATEGORIES} from "../../redux/slice/products/product.action";

const Homepage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GET_CATEGORIES())
        return ()=> {
            axios.CancelToken.source().cancel();
        }
    }, [dispatch]);


    return (
        <AppMainLayout>
            <Banner />
        </AppMainLayout>
    );
};

export default Homepage;
