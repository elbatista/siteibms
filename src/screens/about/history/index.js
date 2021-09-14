import React, { useState, useEffect } from 'react';
import firebase from "firebase";
import View from './view';

export default () => {
    const [historyData, setData] = useState();

    useEffect(() => {
        firebase.database()
        .ref("aibms/historia")
        .once("value")
        .then(snapshot => setData(snapshot.toJSON()));
    }, []);

    return <View historyData={historyData}/>;
};
