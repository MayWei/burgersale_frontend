import React from 'react';
import burgerLogo from '../../assets/images/burger-logo (1).png';
import classes from './Logo.css'

const logo =(props)=>(
    // style={{height:props.height}
    <div className={classes.Logo} >
        <img src={burgerLogo}
             alt='MyBurgerLogo' />
    </div>
)

export default logo;