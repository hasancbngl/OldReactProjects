import React, {Component} from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentDidUpdate() {
        console.log('ordersummary componentDidUpdate ');
    }
    
    render () {
        const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
        return (
            <li key = {igKey}>
            <span style={{textTransform: 'capitalize'}}>{igKey}</span> : {this.props.ingredients[igKey]}
            </li>);
    });

        return (
            <Aux>
            <h3>Your Order!</h3>
            <p>A delicious Burger with the folloeing Ingridiends:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p> <strong>Total Price:{this.props.price.toFixed(2)} </strong> </p>
            <p>Continue to check out?</p>
            <Button buttonType = "Danger" clicked = {this.props.cancel}>CANCEL</Button>
            <Button buttonType = "Success" clicked={this.props.continue}>CONTINUE</Button>
        </Aux>
        );
    }
}

export default OrderSummary;