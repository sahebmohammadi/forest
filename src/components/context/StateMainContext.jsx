import React, { useState } from 'react';
import MainContext from './MainContext';

const StateMainContext = ({ children }) => {


    const [hiddenProduct, setHiddenProduct] = useState([
        {
            title: "تیتر گروه ۱",
            products: [
                { id: 1, title: "product one", description: "Description one", hidden: false, checked: true },
                { id: 2, title: "product two", description: "Description two", hidden: false, checked: true },
                { id: 3, title: "product three", description: "Description three", hidden: false, checked: true }
            ]
        }
        ,
        {
            title: "تیتر گروه ۲",
            products: [
                { id: 1, title: "product one", description: "Description one", hidden: false, checked: true },
                { id: 2, title: "product two", description: "Description two", hidden: false, checked: true },
                { id: 3, title: "product three", description: "Description three", hidden: false, checked: true }
            ]
        }
    ]
    );

    const handleHiddenChange = (index1, index2) => {
        const stateProducts = [...hiddenProduct];

        const products = stateProducts[index2].products;

        products[index1].hidden = !products[index1].hidden;
        products[index1].checked = !products[index1].checked;

        setHiddenProduct(stateProducts);

    };

    return (
        <MainContext.Provider value={{
            hiddenProduct,
            handleHiddenChange
        }}>
            {children}
        </MainContext.Provider>

    );
}

export default StateMainContext;