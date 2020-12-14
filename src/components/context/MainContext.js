import React, { createContext } from 'react';

const MainContext = createContext({
    hiddenProduct:[],
    handleHiddenChange:() => {}
})

export default MainContext;