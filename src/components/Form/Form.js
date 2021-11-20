import classes from './Form.module.css';
import Button from './Button';

const Form = (props) => {
return(
    <form className={classes.form}>
          <div>
          <label htmlFor="bill">Bill</label>
            <input type="number" id="bill"  />
            <label>Select Tip %</label>
            <div class="calculator__buttons-grid">
              <Button value="5">5%</Button>
              <Button value="10">10%</Button>
              <Button value="15">15%</Button>
              <Button value="25">25%</Button>
              <Button value="50">50%</Button>
              <Button value="custom">Custom</Button>
            </div>
            <label htmlFor="numberOfPeople">Number of People</label>
            <input type="number" id="numberOfPeople"/>
          </div>
            
        
        <div className="calculator__results">
          <div className="tip-amount">
            <div>
              <h2>Tip Amount</h2>
              <p>/ person</p>
            </div>
            <div>$0.00</div>
          </div>
          <div>
            <div>
              <h2>Total</h2>
              <p>/ person</p>
            </div>
            <div>$0.00</div>
          </div>
          <button className="reset">Reset</button>
        </div>
        </form>
);
}

export default Form;