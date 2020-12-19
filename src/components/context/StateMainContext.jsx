import React, { useState } from 'react';
import MainContext from './MainContext';

const StateMainContext = ({ children }) => {


    const [hiddenProduct, setHiddenProduct] = useState([
        {
            title: "تیتر گروه اول",
            products: [
                { id: 1, title: "لایه اول گروه اول", description: "توضیحات لایه اول گروه اول", hidden: false, checked: true, accordionOpen: true },
                { id: 2, title: "درختان", description: "توضیحات لایه دوم گروه اول", hidden: false, checked: true, accordionOpen: true },
                { id: 3, title: "لایه سوم گروه اول", description: "توضیحات لایه سوم گروه اول", hidden: false, checked: true, accordionOpen: true }
            ]
        }
        ,
        {
            title: "تیتر گروه دوم",
            products: [
                { id: 1, title: "لایه اول گروه دوم", description: " توضیحات لایه اول گروه دوم و ادامه توضیحات برای تست بیشتر", hidden: false, checked: true, accordionOpen: true },
                { id: 2, title: "لایه دوم گروه دوم", description: "توضیحات لایه دوم گروه دوم", hidden: false, checked: true, accordionOpen: true},
                { id: 3, title: "لایه سوم گروه دوم", description: "توضیحات لایه سوم گروه دوم", hidden: false, checked: true, accordionOpen: true}
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
            setHiddenProduct,
            handleHiddenChange
        }}>
            {children}
        </MainContext.Provider>

    );
}

export default StateMainContext;