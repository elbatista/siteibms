import React from 'react';
import Page from '../../components/page';
import MainContent from '../../components/maincontent';
//import RangeMap from '../../components/rangemap';
import Engage from '../../components/engage';

export default props => {
    return (
        <Page>
            <MainContent 
                title="Missōes"
                image={props.image}
                desc={props.data?.descricao}
                text={props.data?.texto}
                footerText={props.data?.footer?.texto}
                btnText={props.data?.footer?.botao}/>
            {/* <RangeMap/> */}
            <Engage/>
        </Page>
    );
};
