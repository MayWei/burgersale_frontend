import React from 'react';
import Logo from '../../logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './Sidedrawer.css'
import Auxiliary from '../../../hoc/Auxiliary'
import Backdrop from '../../UI/Backdrop/Backdrop'

const sidedrawer =(props)=>{

    let attachClass=[classes.Sidedrawer,classes.Close];
    if(props.show){
        attachClass=[classes.Sidedrawer,classes.Open];
    }

    return (
        <Auxiliary>
            <Backdrop show={props.show}
                      clicked={props.clicked}
            />
            <div className={attachClass.join(' ')}>
                    <div className={classes.Logo}> 
                        <Logo />
                    </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Auxiliary>

    );

}

export default sidedrawer;