import React, { useState, useEffect } from 'react';
import firebase from "firebase";
//import { useTranslation } from 'react-i18next';
import View from './view';

export default () => {
    const [valueData, setData] = useState();

    useEffect(() => {
        firebase.database()
        .ref("aibms/valores")
        .once("value")
        .then(snapshot => setData(snapshot.toJSON()));
    }, []);

    return <View valueData={valueData}/>;
};
