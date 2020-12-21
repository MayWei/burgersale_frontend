import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import ToggleButton from '../ToggleButton/ToggleButton';

const toolbar =(props)=>{
    
        return( <header className={classes.Toolbar}>
                    <ToggleButton clicked={props.clicked}/>
                    {/* <div onClick={props.clicked}>MENU</div> */}
                    <div className={classes.Logo}> 
                    <Logo />
                    </div>
                    <nav className={classes.DesktopOnly}>
                    <NavigationItems/>
                    </nav>
                    
                </header>);
}

export default toolbar;