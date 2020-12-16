import React, { Fragment, useContext, useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import MainContext from '../context/MainContext';



const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    closeButton: {
        position: 'absolute',
        right: 35,
        top: 2,
        zIndex:10
    }
}));

const ProductInfo = () => {
    const classes = useStyles();

    const context = useContext(MainContext);

    const { hiddenProduct, setHiddenProduct } = context;

    const handleClose = (index1, index2) => {
        const productsState = [...hiddenProduct];
        productsState[index1].products[index2].checked = false;
        productsState[index1].products[index2].hidden = true;
        setHiddenProduct(productsState);
    }

    return (
        <div className={classes.root}>

            {hiddenProduct.map((products, index1) => 
            products.products.map((product, index2) => (
                <Accordion
                    hidden={product.hidden}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <IconButton aria-label="close" className={classes.closeButton} onClick={() => handleClose(index1, index2)} >
                            <CloseIcon />
                        </IconButton>
                        <Typography className={classes.heading}>{product.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {product.description}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))
            )}


        </div>
    );
}

export default ProductInfo;
