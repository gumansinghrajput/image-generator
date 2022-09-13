import React, { Component } from 'react';
import * as htmlToImage from 'html-to-image';
import './App.css';

class App extends Component {
  state = {
    borrower: '',
    principal: 0,
    usdcInterestRate: 0,
    monthlyInterestRate: 0,
    paymentFrequency: 0,
    termRemaining: 0,
    totalLoanSize: 0,
    totalAmountRepaid: 0,
    paymentStatus: '',
    updatedAt: '',
  }

  handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })
  convertDataToImage = () => {
    const node =  document.getElementById('image-container') 

    htmlToImage.toPng(node)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);

        var link = document.createElement('a');
        link.download = 'NFT.jpeg';
        link.href = dataUrl;
        link.click();
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
  }
  render() {
    return (
      <div className="App">
        <input type="text" placeholder="Borrower" name="borrower" onChange={this.handleChange}/>
        <input type="number" placeholder="Principal" name="principal" onChange={this.handleChange} />
        <input type="number" placeholder="USDC Interest Rate" name="usdcInterestRate" onChange={this.handleChange} />
        <input type="number" placeholder="Monthly Interest Payment" name="monthlyInterestRate" onChange={this.handleChange} />
        <input type="number" placeholder="Payment Frequency" name="paymentFrequency" onChange={this.handleChange} />
        <input type="number" placeholder="Term Remaining" name="termRemaining" onChange={this.handleChange} />
        <input type="number" placeholder="Total Loan Size" name="totalLoanSize" onChange={this.handleChange} />
        <input type="number" placeholder="Total Amount Repaid" name="totalAmountRepaid" onChange={this.handleChange} />
        <input type="text" placeholder="Payment Status" name="paymentStatus" onChange={this.handleChange} />
        <input type="text" placeholder="Updated At" name="updatedAt" onChange={this.handleChange} />
        <button onClick={this.convertDataToImage}>Download JPEG</button>

        <br/>
        <div id='image-container' style={{backgroundColor: '#000000', color:'#fff', height:300, width:300}}>

          <p>
            <b>Borrower: </b>{this.state.borrower} <br/>
            <b>Principal: </b>{this.state.principal}<br/>
            <b>USDC Interest Rate: </b>{this.state.usdcInterestRate}<br/>
            <b>Monthly Interest Payment: </b>{this.state.monthlyInterestRate}<br/>
            <b>Payment Frequency: </b>{this.state.paymentFrequency}<br/>
            <b>Term Remaining: </b>{this.state.termRemaining}<br/>
            <b>Total Loan Size: </b>{this.state.totalLoanSize}<br/>
            <b>Total Amount Repaid: </b>{this.state.totalAmountRepaid}<br/>
            <b>Payment Status: </b>{this.state.paymentStatus}<br/>
            <b>Updated At: </b>{this.state.updatedAt}<br/>

          </p>

        </div>
      </div>
    );
  }
}

export default App;
