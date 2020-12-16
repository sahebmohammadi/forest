import React, { Fragment, useContext } from 'react';
import Switch from '@material-ui/core/Switch';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MainContext from '../context/MainContext';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles(() => ({
    root: {
        width:"100%",
        display:"flex",
        alignContent:"center",
        boxShadow: "none",
        paddingTop:"10px",
    },
    switch: {
        alignSelf:"top"
    },
    text: {
        alignSelf:"top",
        paddingTop:0,
    }
}));

const Product = ({products, index2}) => {

    const context = useContext(MainContext);
    const { hiddenProduct, handleHiddenChange } = context;


    const classes = useStyles();

    return (

        <Fragment>

            {products.map((product, index) => (

                <Card className={classes.root} >
                    <Switch className={classes.switch} checked={product.checked} onChange={() => handleHiddenChange(index, index2)} color="primary" />
                    <CardContent
                        ariaLabel="SpeedDial example"
                        className={classes.text}
                        >

                        <Typography variant="h5" component="h2">
                            {product.title}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            {product.description}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Fragment>
    );
}

export default Product;