import React from 'react';



import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ProductList from '../ProductList';


const MainLayer = () => {



    const useStyles = makeStyles({
        root: {
            minWidth: 275,
            maxWidth: "30%",
            position: "relative",
            boxShadow: "none"
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        title: {
            fontSize: 14,
        },
        closeButton: {
            position: 'absolute',
            right: 5,
            top: 5
        },
    });





    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;


    return (

        <Card className={classes.root}>

            <CardContent>

                <Typography variant="h5" component="h2">
                    عنوان اصلی گروه لایه‌ها
                </Typography>

                <IconButton aria-label="close" className={classes.closeButton} >
                    <CloseIcon />
                </IconButton>

                <ProductList />
            </CardContent>
        </Card>


    );
}

export default MainLayer;




