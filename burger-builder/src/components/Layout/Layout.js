import React from 'react';
import Aux from '../../hoc/Aux';
import cssStyles from './Layout.module.css';

const layout = (props) => (
    <Aux>
    <div>Toolbar, sidedrawer, backdrop</div>
    <main className = {cssStyles.Content}>
        {props.children}
    </main>
    </Aux>
    );

export default layout;