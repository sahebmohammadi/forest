import React, { Fragment, useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Product from './Product';
import MainContext from '../context/MainContext';


const useStyles = makeStyles(() => ({
    root: {
        minWidth: 300,
        width:"40%",
        flexGrow:1,
    },
}));

const ProductList = () => {
    const classes = useStyles();

    const context = useContext(MainContext);
    const { hiddenProduct } = context;

    return (
        <Fragment>
            <div >
            {hiddenProduct.map((list, index) => (
                <div className={classes.root}>
                    <h2 className={classes.title}>{list.title}</h2>
                    <Product products={list.products} index2={index} />
                </div >
            ))}
            </div>
        </Fragment>
    );
}

export default ProductList;







