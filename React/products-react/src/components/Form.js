import React from "react";

const Form = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
        <label htmlFor='productName'>Product Name</label>
        {/* To connect to state, you use this.state.whateveryou'reconnecting*/}
        {/*onChange allows us to calls on handleChange which allows state to render the page when something is inputed*/}
        <input type = "text" 
        value = {props.productName}
        onChange = {props.handleChange}
        id='productName'
        />
       
        <br />
        
        <label htmlFor='productPrice'>Product Price</label>
        <input
        type='number'
        value = {props.productPrice} 
        onChange = {props.handleChange} 
        id ='productPrice'
        />

        <label htmlFor='productDescription'> Product Description </label>
        <input 
        type = 'text'
        value = {props.productDescription} 
        onChange = {props.handleChange} 
        id ='productDescription'></input>

        <input 
        type = 'submit'
         />
        </form>
    )
}

export default Form