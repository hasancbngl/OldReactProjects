import React from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import cssStyles from './Layout.module.css';

const layout = (props) => (
    <Aux>
    <Toolbar />
    <main className = {cssStyles.Content}>
        {props.children}
    </main>
    </Aux>
    );

export default layout;