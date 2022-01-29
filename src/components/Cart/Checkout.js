import React,{useRef, useState} from "react";
import classes from './Checkout.module.css';


const isEmpty = (value) => value.trim() === '';
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
   
    const [formInputValidity, setFormInputValidity] = useState({
        name:true,
        street: true,
        post: true,
        city:true
    })

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postInputRef = useRef();
    const cityInputRef = useRef();


    const confirmHandler = (event) =>{
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPost = postInputRef.current.value;
        const enteredCity = nameInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredPostIsValid = isFiveChars(enteredPost)

        setFormInputValidity({
            name: enteredNameIsValid,
            street:enteredStreetIsValid,
            city: enteredCityIsValid,
            post:enteredPostIsValid,    
        })

        const formIsValid = enteredNameIsValid && enteredCityIsValid && enteredStreetIsValid && enteredPostIsValid;

        if(!formIsValid){
            return;
        }

      props.onConfirm({
          name:enteredName,
          street:enteredStreet,
          city:enteredCity,
          post: enteredPost

      })

    }

  const nameClasses = `${classes.control} ${formInputValidity.name ? '' : classes.invalid}`;

  const streetClasses = `${classes.control} ${formInputValidity.street ? '' : classes.invalid}`;

  const postClasses = `${classes.control} ${formInputValidity.post ? '' : classes.invalid}`;

  const cityClasses = `${classes.control} ${formInputValidity.city ? '' : classes.invalid}`;

    return(
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={nameClasses}>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" ref={nameInputRef} />
                {!formInputValidity.name && <p>Please enter a Valid Name</p>}
            </div>
            <div className={streetClasses}>
                <label htmlFor="street">Street</label>
                <input type="text" id="street" ref={streetInputRef} />
                {!formInputValidity.street && <p>Please enter a vailid input</p>}
            </div>
            <div className={postClasses}>
                <label htmlFor="postal">Postal code</label>
                <input type="text" id="postal"  ref={postInputRef}/>
                {!formInputValidity.post && <p>Please enter a valid postal code</p>}
            </div>
            <div className={cityClasses}>
                <label htmlFor="city">City</label>
                <input type="text" id="city" ref={cityInputRef} />
                {!formInputValidity.city && <p>PLease enter a valid city</p>}
            </div>
            <div className={classes.actions}>
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button>Confirm</button>
            </div>
           
        </form>
    )
 
}

export default Checkout;