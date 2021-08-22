import React from 'react';
import Page from '../../../components/page';
import MainContent from '../../../components/maincontent';

export default props => {
    return (
        <Page>
            <MainContent 
                breadcrumb={[
                    {text: "Missōes", link: "/missao"},
                    {text: props.data?.nome}
                ]}
                title={props.data?.nome}
                image={props.image}
                desc={props.data?.descricao}
                text={props.data?.texto}
                footerText={props.data?.footer?.texto}
                btnGo={props.data?.footer?.va}
                btnText={props.data?.footer?.botao}/>

        </Page>
    );
};
