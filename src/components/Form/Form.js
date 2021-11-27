import classes from './Form.module.css'
const Form = props => {
    return (
        <div className={classes.formContainer}>
            <div className={classes.header}>
               <h1>Shopping Details</h1>
            </div>
    <form>
        <div>
            <input type="text" name="fName" placeholder="First Name" className={classes['half-name']} />
            <input type="text" name="lName" placeholder="Last Name" className={classes['half-name']}/>
        </div>
        <div>
            <input type="text" name="address" placeholder="Address" className={classes.fullName}/>
            
        </div>
        <div>
            <input type="text" name="address" placeholder="Address 2" className={classes.fullName} />
        </div>
        <div>
            <input type="text" name="country" placeholder="Country" className={classes['half-name']} />
            <input type="text" name="city" placeholder="City" className={classes['half-name']} />
        </div>
        <div>
            <input type="number" name="pCode" placeholder="Postal Code" className={classes['half-name']} />
            <input type="number" name="pNumber" placeholder=" Phone Number" className={classes['half-name']} />
        </div>
        <input type="submit" value="Submit" className={classes.btn}/>
</form>
</div>

    )
}

export default Form;