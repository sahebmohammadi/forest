import React, { createContext } from 'react';

const MainContext = createContext({
    hiddenProduct:[],
    setHiddenProduct:() => {},
    handleHiddenChange:() => {}
})

export default MainContext;