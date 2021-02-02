import React from 'react';
import cssClasses from './Burger.module.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const Burger = (props) => {
    let ingredientsArray = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
           return <BurgerIngredients key=  {igKey + i} type = {igKey} />;
        });
    })
    .reduce((arr, el) => {
        return arr.concat(el);
    }, []);

    if(ingredientsArray.length === 0) {
        ingredientsArray = <p>Please Add some Ingredients!</p>
    }

    return (
        <div className={cssClasses.Burger}>
            <BurgerIngredients type="bread-top"/>
            {ingredientsArray}
            <BurgerIngredients type="bread-bottom"/>
        </div>
    );
}

export default Burger;