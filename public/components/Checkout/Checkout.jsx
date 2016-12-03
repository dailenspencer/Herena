import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

class Checkout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exp_month_value: ''
    };
}

  handleExpMonthChange(event, index, value) {
    this.setState({exp_month_value: value});
  }
  
  render() {
    return (
        <div id="CheckoutPage">
          <form action="/your-charge-code" method="POST" id="payment-form">
            <span className="payment-errors"></span>
            <div className="form-row">
              <h1>1. Contact Details</h1>
                <div className="form-input">
                  <MuiThemeProvider>
                    <TextField hintText="Email" data-stripe="number"/>
                  </MuiThemeProvider>
                </div>    
            </div>
            <div className="form-row">
              <h1>2. Shipping Address</h1>
                <div className="form-input">
                  <MuiThemeProvider>
                    <TextField hintText="Street" data-stripe="number"/>
                  </MuiThemeProvider>
                  <MuiThemeProvider>
                    <TextField hintText="City" data-stripe="number"/>
                  </MuiThemeProvider>
                  <MuiThemeProvider>
                    <TextField hintText="State" data-stripe="number"/>
                  </MuiThemeProvider>
                  <MuiThemeProvider>
                    <TextField hintText="Zipcode" type="text" size="6" data-stripe="address_zip"/>
                  </MuiThemeProvider>
                </div>    
            </div>
            <div className="form-row">
              <h1>3. Payment Method</h1>
                <div className="form-input">
                  <MuiThemeProvider>
                    <TextField hintText="Name" data-stripe="number"/>
                  </MuiThemeProvider>
                  <MuiThemeProvider>
                    <TextField hintText="Card Number" type="text" size="20" data-stripe="number"/>
                  </MuiThemeProvider>
                  
                  <MuiThemeProvider>
                    <SelectField
                      hintText="Expiration Month"
                      value={this.state.exp_month_value}
                      onChange={() => this.handleExpMonthChange()}
                      maxHeight={150}
                      type="text" size="2" data-stripe="exp_month"
                    >
                      <MenuItem value={1} primaryText="Jan(01)" />
                      <MenuItem value={2} primaryText="Feb(02)" />
                      <MenuItem value={3} primaryText="Mar(03)" />
                      <MenuItem value={4} primaryText="Apr(04)" />
                      <MenuItem value={5} primaryText="May(05)" />
                      <MenuItem value={1} primaryText="June(06)" />
                      <MenuItem value={2} primaryText="July(07)" />
                      <MenuItem value={3} primaryText="Aug(08)" />
                      <MenuItem value={4} primaryText="Sep(09)" />
                      <MenuItem value={5} primaryText="Oct(10)" />
                      <MenuItem value={5} primaryText="Nov(11)" />
                      <MenuItem value={5} primaryText="Dec(12)" />
                    </SelectField>
                  </MuiThemeProvider>
                  <MuiThemeProvider>
                    <SelectField
                      hintText="Expiration Year"
                      value={this.state.exp_month_value}
                      onChange={() => this.handleExpMonthChange()}
                      maxHeight={150}
                      type="text" size="2" data-stripe="exp_year"
                    >
                      <MenuItem value={1} primaryText="2016" />
                      <MenuItem value={2} primaryText="2017" />
                      <MenuItem value={3} primaryText="2018" />
                      <MenuItem value={4} primaryText="2019" />
                      <MenuItem value={5} primaryText="2020" />
                      <MenuItem value={1} primaryText="2021" />
                      <MenuItem value={2} primaryText="2022" />
                      <MenuItem value={3} primaryText="2023" />
                      <MenuItem value={4} primaryText="2024" />
                      <MenuItem value={5} primaryText="2026" />
                    </SelectField>
                  </MuiThemeProvider>
                  <MuiThemeProvider>
                    <TextField hintText="Security Code" type="text" size="4" data-stripe="cvc"/>
                  </MuiThemeProvider>
                </div>    
            </div>
            <MuiThemeProvider>
              <RaisedButton label="Place Your Order" backgroundColor="#5CB85C" style={{'textColor':'#ffffff','color':'#ffffff'}}/>
            </MuiThemeProvider>
          </form>
        </div>
    );
  }
}

module.exports = Checkout