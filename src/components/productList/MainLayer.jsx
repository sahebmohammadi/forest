import React from 'react';



import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ProductList from '../ProductList';




const MainLayer = () => {



    const useStyles = makeStyles({
        root: {
            minWidth: 275,
            maxWidth: "30%",
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },
    });

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;


    return (

        <Card className={classes.root}>
            <CardContent>
                
            </CardContent>
        </Card>


    );
}

export default MainLayer;




