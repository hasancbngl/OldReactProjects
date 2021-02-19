import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const sideDrawer = (props) => {
    let cssStyles = [styles.SideDrawer, styles.Close];
    if(props.open) {
        cssStyles[1] = [styles.Open];
    }
    return (
        <Aux>
        <Backdrop show={props.open} clicked= {props.closed}/>
        <div className={cssStyles.join(' ')}>
            <div className={styles.Logo}>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
        </Aux>
    );
};

export default sideDrawer;