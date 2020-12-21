import React,{Component} from 'react';

import Auxiliary from '../Auxiliary.js/index.js.js';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/Sidedrawer/Sidedrawer'

class Layout extends Component{

    state={
        showBackdrop:false
    }

    menuClickedHandler=()=>{
        this.setState((prevState)=>{
            return{showBackdrop:!prevState.showBackdrop};
        });
        console.log(this.showBackdrop);       
    }
    cancelBackdropHandler=()=>{
        this.setState({showBackdrop:false});
        console.log(this.showBackdrop);
    } 

    render(){
        return(
    <Auxiliary>
        <Toolbar clicked={this.menuClickedHandler}/>
        <SideDrawer  
        show={this.state.showBackdrop}
        clicked={this.cancelBackdropHandler}/>
        {/* <div>Toolbar, SideDrawer, Backdrop</div> */}
        <main className={classes.Content}>
            {this.props.children}
        </main>
    </Auxiliary>)};
}

export default Layout;