/*import React from "react";
import { render } from "react-dom";
import { observer } from "mobx-react";
import { observable, action } from "mobx";

@observer
class CounterParent extends React.Component {
  @observable parentCounter = 12;

  @action.bound
  onParentCounterUpdate() {
    this.parentCounter += 10;
  }

  render() {
    console.log("render CounterParent");
    return (
      <CounterChild
        onParentCounterUpdate={this.onParentCounterUpdate}
        parentCounter={this.parentCounter}  
      />
    );
  }
}

@observer
class CounterChild extends React.Component {
  @observable childCounter1 = 301;
  @observable childCounter2 = 14;

  @action.bound
  onUpdate() {
   // const { onParentCounterUpdate } = this.props;
    this.props.onParentCounterUpdate();
    this.childCounter1 += 1;
    this.childCounter2 -= 1;
  }

  render() {
    console.log("render CounterChild");
    //const { parentCounter } = this.props;
    
    return (
      <div>
        <button onClick={this.onUpdate}>Update count</button>
        <div>parentCounter: {parentCounter}</div>  
        <div>childCounter1: {this.childCounter1}</div>
        <div>childCounter2: {this.childCounter2}</div>
      </div>
    );
  }
}

//render(<CounterParent />, document.getElementById("root"));
export {CounterParent}

*/
//--------------------------------------------- Q1-----------------------------------------------







/*

import { observable, action, computed, reaction } from "mobx";

class Product {
  @observable price = 0;
  @observable amount = 0;
  @observable currency = "Rupees";

  @action
  setPriceAndAmountAndCurrencyAsynchronously = async () => {
    this.currency = "Dollars";

    // Suppose we got price and quantity from server response
    const promise = new Promise((resolve, reject) => {
      resolve({
        price: "40",
        amount: "150",
      });
    });
    //const { price, amount } =  promise.then(res=>{return res.price,res.amount})
    const{price,amount}= await promise
    this.setPriceAndAmount(price, amount)
   // console.log(price,amount,this.currency)
     // await promise.then(res=>{this.setPriceAndAmount(res.price, res.amount);})
     //console.log("hiiiii")
  
     
  };
  
  setPriceAndAmount(price, amount){
     //console.log("3,prir0[f")
    this.price = price;
    this.amount = amount;
  };

  @computed
  get total() {
    //console.log(' 1,****************')
    return this.price + this.amount + " " + this.currency;
  }
}

//export default product

export const product = new Product();

reaction(
  () => product.total,
  () => {
    console.log("2,reaction called", product.total);
  }
);
const {setPriceAndAmountAndCurrencyAsynchronously}=product
setPriceAndAmountAndCurrencyAsynchronously();
*/

//--------------------------------------------- Q2-----------------------------------------------

/*
import { observable, autorun,action } from "mobx";

class Product {
  @observable costPrice = 0;
  @observable sellingPrice = 0;
 
  @action
  setCostPriceAndSellingPrice=(costPrice, sellingPrice)=> {
    this.costPrice = costPrice;
    this.sellingPrice = sellingPrice;
}

 dispose = autorun(() => {
    //console.log("Autorun called");
    console.log("total", this.costPrice * this.sellingPrice);
  });
}

export const product = new Product();
product.setCostPriceAndSellingPrice(40,50);
product.dispose();

*/


/*

import { observable, action, computed, reaction } from "mobx";

class Product {
  @observable price = 0;
  @observable amount = 0;
  @observable currency = "Rupees";

  @action
  setPriceAndAmountAndCurrencyAsynchronously = async() => {
    this.currency = "Dollars";

   // Suppose we got price and quantity from server response
    const promise = new Promise((resolve, reject) => {
      resolve({
        price: "40",
        amount: "150",
      });
    });
    const { price, amount } = await promise;
    //this.setPriceAndAmount(price, amount);
    this.price = 20;
    this.amount = 87;
  };

  @computed
  get total() {
    return this.price + this.amount + " " + this.currency;
  }
}

export const product = new Product();

reaction(
  () => product.total,
  () => {
    console.log("reaction called", product.total);
  }
);

product.setPriceAndAmountAndCurrencyAsynchronously();

*/

/*

import React from "react";
import { render } from "react-dom";
import { observable, computed, autorun, action } from "mobx";
import { observer } from "mobx-react";

class Person {
  @observable firstName = "Tony";
  @observable lastName = "Stark";

  @computed get fullName() {
    return this.firstName + " " + this.lastName;
  }

  @action.bound
  async changeFirstNameAndLastName() {
    let promise = new Promise((resolve, reject) => {
      resolve({
        first_name: "Peter",
        last_name: "Parker",
      });
    });
    promise.then((response) => {
      this.firstName = response.first_name;
      this.lastName = response.last_name;
    });
  }
}

const newPerson = new Person();

// Reaction: log the profile info whenever it changes
autorun(() => {
  console.log("Autorun called");
  console.log(newPerson.fullName);
});

// Example React component that observes state
 export const ProfileView = observer((props) => {
  console.log("render ProfileView");

  return (
    <div>
      <p>{props.person.fullName}</p>
      <button onClick={props.person.changeFirstNameAndLastName}>
        Change first name and last name
      </button>
    </div>
  );
});

render(<ProfileView person={newPerson} />, document.getElementById("root"));

*/


/*
import React from "react";
import { render } from "react-dom";
import { observable, computed, reaction,action } from "mobx";
import { observer } from "mobx-react";

class Person {
  @observable age = 5;
  @observable gender = "male";

  @computed get ageAndGender() {
    return this.gender + " " + this.age;
  }
  
    changeAgeAndGender = () => {
    this.age = 15;
    this.gender = "female";
  };
}

export const newPerson = new Person();

reaction(
  () => newPerson.ageAndGender,
  () => {
    console.log("reaction called");
  }
);

// Example React component that observes state
const Product = observer((props) => {
  console.log("Render profileView");
  return (
    <div>
      {props.person.ageAndGender}
      <button onClick={props.person.changeAgeAndGender}>
        Change age and gender
      </button>
    </div>
  );
});

export {Product}

//render(<ProfileView person={newPerson} />, document.getElementById("root"));

*/

/*
import React from "react";
import { render } from "react-dom";
import { observer } from "mobx-react";
import { observable, action ,autorun} from "mobx";

class CounterChild1 extends React.Component {
  render() {
    console.log("render CounterChild1");

    return <p>childCounter1: {this.props.childCounter1}</p>;
  }
}

class CounterChild2 extends React.Component {
  render() {
    console.log("render CounterChild2");

    return <p>childCounter2: {this.props.childCounter2}</p>;
  }
}

@observer
export class CounterParent extends React.Component {
  @observable childCounter1 = 2;
  @observable childCounter2 = 123;

   
  onUpdateCounterChild1() {
    this.childCounter1 += 3;
  }
  
 
  onUpdateCounterChild2() {
    this.childCounter2 -= 12;
  }
   @action
  onUpdate=()=> {
    this.onUpdateCounterChild1();
   this.onUpdateCounterChild2();
  
  
  }
 dispose=autorun(()=>{
    console.log("hiiiiii",this.childCounter1,this.childCounter2)
  })

  render() {
    console.log("render CounterParent");
    return (
      <div>
        <CounterChild1 childCounter1={this.childCounter1} />
        <CounterChild2 childCounter2={this.childCounter2} />
        <button onClick={this.onUpdate}>Update count</button>
      </div>
    );
  }
}

//render(<CounterParent />, document.getElementById("root"));
*/
/*
import React, { Component } from "react";
import { render } from "react-dom";

export class PersonDetails extends Component {
  state = {
    name: "Michael",
    address: {
      city: "Hyderabad",
      country: "India",
    },
  };

  obj = {
    a: 1,
    b: 2,
    c: 3,
  }
  array = [1, 2, 3]
  prevState = this.state;
  nextState = this.state;

  updateAddress = () => {

    this.prevState = this.state;

    this.setState({
      ...this.state,
      address: {

        ...this.state.address,
        city: "Delhi",
      },
    });
  };

  render() {

    //console.log("restdtfy", ...this.state.address)
    this.nextState = this.state;
    console.log({ ...this.obj, a: 7 })
    console.log(this.nextState === this.prevState);
    console.log(this.nextState.name === this.prevState.name);

    return (
      <div>
        <p>Name: {this.state.name}</p>
        <p>City: {this.state.address.city}</p>
        <p>Name: {this.state.address.country}</p>
        <button onClick={this.updateAddress}>Update address</button>
      </div>
    );
  }
}

/*
import React, { Component } from "react";
import { render } from "react-dom";
import { observable } from "mobx";
import { observer } from "mobx-react";

@observer
export class UserProfile extends Component {
  @observable userDetails = null;
  @observable count = 0;
  @observable secondCount = 0;
  @observable name = ""
  @observable company = ""

  getUserDetails = async() => {
    await null;
    this.count = this.count + 1;
    this.secondCount = this.secondCount + 1;
    let promise = new Promise((resolve, reject) => {
      this.name = "ed"
      this.company = "ehhfidjdkvejidc"
      resolve({
        name: "Tom Preston-Werner",
        company: "Facebook",
      });
    });
    let response = await promise;
    this.userDetails = response;
  };

  render() {
    console.log("render UserProfile")
    console.log(this.name);
    console.log(this.count, this.secondCount);

    if (this.userDetails === null) {
      return <button onClick={this.getUserDetails}>Get user details</button>;
    }
    return (
      <div>
      
        <p>Name: {this.userDetails.name}</p>
        <p>Company: {this.userDetails.company}</p>
      </div>
    );
  }
}

//render(<UserProfile />, document.getElementById("root"));




*/






//render(<PersonDetails />, document.getElementById("root"));

//render(<Months />, document.getElementById("root"));

//import React, { Component } from "react";
import React from 'react'
import ReactDOM from "react-dom";
import Pagination from "react-js-pagination";
//require("bootstrap/less/bootstrap.less");

export class Pages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 15
    };
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }

  render() {
    return (
      <div>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange = { this.handlePageChange.bind(this) }
        />
      </div>
    );
  }
}

//ReactDOM.render(<App />, document.getElementById("root"));
