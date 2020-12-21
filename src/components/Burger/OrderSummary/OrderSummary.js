import React,{Component} from 'react';
import Auxiliary from '../../../hoc/Auxiliary'
import Button from '../../UI/Button/Button'


class OrderSummary extends Component{

    componentWillUpdate(){
        console.log("OrderSummary componentWillUpdate");
    }
    render(){
        let ingredients=Object.keys(this.props.ingredients).map(igKey=>
            {
                return( <li key={igKey}>
                            <span style={{textTransform:'capitalize'}}>{igKey}</span>:{this.props.ingredients[igKey]}
                        </li>)
            })
        return(
            <Auxiliary>
                <h3>your ORDER:</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredients}
                </ul>
                <p>total price:<strong>{this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <Button 
                btnType='Danger'
                clicked={this.props.cancelOrder}>CANCEL</Button>
                <Button btnType='Success'>CONTINUE</Button>
            </Auxiliary>
        );
    }
}


export default OrderSummary;