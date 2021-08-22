import React from 'react';
//import { useTranslation } from 'react-i18next';
import Page from '../../components/page';
import Pastors from './pastors';
import Values from './values';

export default props => {
    //onst { t } = useTranslation();
    const paginas = [];
    paginas['valores'] = <Values/>;
    paginas['pastores'] = <Pastors/>;
    return (
        <Page padding>
            {paginas[props.location?.state?.pagina || 'valores']}
        </Page>
    );
};
