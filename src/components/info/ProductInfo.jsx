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
        top: 5
    }
}));

const ProductInfo = () => {
    const classes = useStyles();


    const [close, setClose] = useState(false);
    const [products, setProducts] = useState([])
    const context = useContext(MainContext);

    const { hiddenProduct } = context;

    console.log(products);

    useEffect(() => {
        const sumProducts = () => {
            for (let i = 0; i < hiddenProduct.length; i++) {
                const element = hiddenProduct[i].products;
                console.log(element);
                for (let n = 0; n < element.length; n++) {
                    console.log(element[n]);
                    setProducts((products) => ([...products, element[n]]))
                    console.log(products);

                }

            }

        }
        sumProducts();
    }, [])


    const handleClose = () => {
        setClose(true)
    }

    return (
        <div className={classes.root}>

            {products.map((product, index) => (
                <Accordion
                    hidden={product.hidden}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
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

            ))}

        </div>
    );
}

export default ProductInfo;
