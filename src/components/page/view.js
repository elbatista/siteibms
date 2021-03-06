import React from 'react';
import Header from '../header';
import Footer from '../footer/view';

export default props => {
    return (
        <>
            <Header/>
            <div className={`page ${props.padding ? 'page-padding' : ''}`}>
                {props.children}
            </div>
            <Footer/>
        </>
    );
};
