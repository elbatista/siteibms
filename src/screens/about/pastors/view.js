import React from 'react';
import Card from '../../../components/card';
//import { useTranslation } from 'react-i18next';

export default props => {
    //onst { t } = useTranslation();
    return (
        <>
            <h1>Famílias pastorais</h1>
            <h2>Pastor sênior</h2>

            <Card 
                title={props.pastorData?.senior.nome} 
                desc={props.pastorData?.senior.texto['pt-br']}
                image="pastores/senior.png"/>

            <h2>Pastores auxiliares</h2>

            {props.pastorData && Object.keys(props.pastorData.auxiliares).map(key=>{
                return <Card key={key} title={props.pastorData.auxiliares[key].nome} desc={props.pastorData.auxiliares[key].texto['pt-br']} />
            })}

            <h2>Pastores plantadores</h2>

            {props.pastorData && Object.keys(props.pastorData.plantadores).map(key=>{
                return <Card key={key} title={props.pastorData.plantadores[key].nome} desc={props.pastorData.plantadores[key].texto['pt-br']} />
            })}

        </>
    );
};
