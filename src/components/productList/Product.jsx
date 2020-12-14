import React, { Fragment, useContext } from 'react';
import Switch from '@material-ui/core/Switch';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MainContext from '../context/MainContext';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles(() => ({
    root: {
        minWidth: 275,
    },
}));

const Product = ({products, index2}) => {

    const context = useContext(MainContext);
    const { hiddenProduct, handleHiddenChange } = context;


    const classes = useStyles();

    return (

        <Fragment>

            {products.map((product, index) => (


                <Card className={classes.root} >
                    <Switch checked={product.checked} onChange={() => handleHiddenChange(index, index2)} color="primary" />
                    <CardContent
                        ariaLabel="SpeedDial example"
                        hidden={product.hidden} >

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