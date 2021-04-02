import React from 'react';
import NavBar from 'components/content/NavBar';
import Home from 'components/section/Home';


function BaseLayout() {
    return (
        <>
           <NavBar />
           <Home />
        </>
    )
};

export default BaseLayout;
