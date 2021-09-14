import React from 'react';
//import { useTranslation } from 'react-i18next';
import Page from '../../components/page';
import Pastors from './pastors';
import Values from './values';
import History from './history';

export default props => {
    //onst { t } = useTranslation();
    const paginas = [];
    paginas['valores'] = <Values/>;
    paginas['pastores'] = <Pastors/>;
    paginas['historia'] = <History/>;
    return (
        <Page padding={(props.location?.state?.pagina || 'valores') !== 'historia'}>
            {paginas[props.location?.state?.pagina || 'valores']}
        </Page>
    );
};
