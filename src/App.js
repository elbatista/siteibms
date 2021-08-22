import React, { Suspense } from 'react';
import firebase from "firebase/app";
import "firebase/analytics";
import ConfigStore from './config/store';
import Routes from './config/routes';
import './config/translation/index.js';

const firebaseConfig = {
    apiKey: "AIzaSyCxZ1pfuR1YVu7Lh48CrhBuPPDy5z82WZg",
    authDomain: "ibms-site.firebaseapp.com",
    databaseURL: "https://ibms-site-default-rtdb.firebaseio.com",
    projectId: "ibms-site",
    storageBucket: "ibms-site.appspot.com",
    messagingSenderId: "632461760320",
    appId: "1:632461760320:web:be3421a24645fb1d960ca5",
    measurementId: "G-TKSTE09X0K"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default ()=>(
    <ConfigStore>
        <Suspense fallback={null}>
            <Routes/>
        </Suspense>
    </ConfigStore>
);
