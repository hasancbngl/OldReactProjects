import React from "react";
import cssStyles from './BuildControl.module.css';

const buildControl = (props) => (
    <div className = {cssStyles.BuildControl}>
        <div className = {cssStyles.Label}> {props.label} </div>
        <button 
        className = {cssStyles.Less} 
        onClick = {props.removed}
        disabled = {props.disabled}>Less
        </button>
        <button className = {cssStyles.More} onClick = {props.added}>More</button>
    </div>
);

export default buildControl;