import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { Router, Route, withRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import { createMemoryHistory } from "history";
import {signInPath} from '../../constants'
import { ProductPagePath} from '../../../E-commerceDashboard/constants/ProductPagePath'
import AuthService from '../../services/AuthService/AuthAPI.js'
import AuthStore from '../../stores/AuthStore'
import {getUserSignInResponse} from '../../fixtures/getUserSignInResponse.json'
import {SigninRoute} from ".";

const LocationDisplay =withRouter(({ location }) => (
  <div data-testid="location-display">{location.pathname}</div>
));
describe("SignInRoute test",()=>{
    
    let authService;
    let  authStore ;
    
    
    beforeEach(()=>{
        authService=new AuthService()
        authStore=new AuthStore(authService)
        
    })
    
    afterEach(()=>{
        jest.resetAllMocks();
    })  
    
    
it("should render username empty error message", () => {
    const { getByText, getByRole } = render(
    <Router history={createMemoryHistory()}>
    <SigninRoute authStore={authStore} />
    </Router>)
    const signInButton = getByRole("button", { name: "Sign in" });

    fireEvent.click(signInButton);

    getByText(/please Enter Username/i);
  });
  
  
  it("should render password empty error message",()=>{
          const { getByText, getByRole,getByPlaceholderText } = render(
    <Router history={createMemoryHistory()}>
    <SigninRoute authStore={authStore} />
    </Router>)
    const username = "test-user";
    const usernameField = getByPlaceholderText("Username");
    const signInButton = getByRole("button", { name: "Sign in" });
    fireEvent.change(usernameField, { target: { value: username } });
    fireEvent.click(signInButton);
    getByText(/please Enter Password/i);
    
    
  })
  
  it("should render Loading State",()=>{
      const{getByRole,getByPlaceholderText}=render(<Router history={createMemoryHistory()}>
    <SigninRoute authStore={authStore} />
    </Router>)
    const username="test-user"
    const usernameField=getByPlaceholderText("Username")
    const password="test-password"
    const passwordField=getByPlaceholderText("Password")
    const signInButton = getByRole("button", { name: "Sign in" });
    fireEvent.change(usernameField,{target:{value:username}})
    fireEvent.change(passwordField,{target:{value:password}})
    fireEvent.click(signInButton)
    
     getByRole('button',{name:"Loading..."});
  })
  
  
  
  it("should render signInRoute loading state", async () => {
    const { getByLabelText, getByPlaceholderText, getByRole } = render(
      <Router history={createMemoryHistory()}>
        <SigninRoute authStore={authStore} />
      </Router>
    );
    const username = "test-user";
    const password = "test-password";

    const usernameField = getByPlaceholderText("Username");
    const passwordField = getByPlaceholderText("Password");
    const signInButton = getByRole("button", { name: "Sign in" });

    const mockLoadingPromise = new Promise(function(resolve, reject) {});
    const mockSignInAPI = jest.fn();
    mockSignInAPI.mockReturnValue(mockLoadingPromise);
    authService.signInAPI = mockSignInAPI;
    
     authStore. userSignIn()
    fireEvent.change(usernameField, { target: { value: username } });
    fireEvent.change(passwordField, { target: { value: password } });
    fireEvent.click(signInButton);

       await getByRole('button',{name:"Loading..."});
  });
  
  it("should render Signin Success  state",async()=>{
      
       const history=createMemoryHistory()
        const newPathRoute=ProductPagePath
        history.push(newPathRoute)
        
        
        
         const {getByPlaceholderText,getByRole,queryByRole,getByTestId,debug}=render(
         <Provider authStore={authStore}>
         <Router history={history}>
           <Route path={signInPath}>
           <SigninRoute/></Route>
            <Route path={ProductPagePath}>
               <LocationDisplay/>
            </Route>         
         </Router>
         </Provider>)
         
         
         
    const username = "test-user";
    const password = "test-password";

    const usernameField = getByPlaceholderText("Username");
    const passwordField = getByPlaceholderText("Password");
    const signInButton = getByRole("button", { name: "Sign in" });

    const mockLoadingPromise = new Promise(function(resolve, reject) {});
    const mockSignInAPI = jest.fn();
    mockSignInAPI.mockReturnValue(mockLoadingPromise);
    authService.signInAPI = mockSignInAPI;
    
     authStore. userSignIn()
     debug()
    fireEvent.change(usernameField, { target: { value: username } });
    fireEvent.change(passwordField, { target: { value: password } });
    fireEvent.click(signInButton);
        
await waitFor(()=>{expect(queryByRole('button',{name:"Sign in"})).not.toBeInTheDocument()
            expect(getByTestId("location-display")).toHaveTextContent(ProductPagePath)
            
})
  
  
  
  
    })
    
    
    
    
    it("should render signinRRoute Faillure case",async()=>{
        
        const{getByText,getByPlaceholderText,getByRole}=render(<Router history={createMemoryHistory()}>
        <SigninRoute authStore={authStore}/>
        </Router>)
        const username="test-user"
        const password="test-password"
        const usernameField=getByPlaceholderText("Username")
        const passwordField=getByPlaceholderText("Password")
        const signInButton=getByRole("button",{name:"Sign in"})
        
        const mockFailurePromise=new Promise(function(resolve,reject){
            
            reject(new Error("error"))
            
        }).catch(()=>{})
        
        
        const mockSignInAPI=jest.fn()
        mockSignInAPI.mockReturnValue(mockFailurePromise)
        authService.signInAPI = mockSignInAPI;
           
     
    fireEvent.change(usernameField, { target: { value: username } });
    fireEvent.change(passwordField, { target: { value: password } });
    fireEvent.click(signInButton);
        await waitFor(()=>{("Retry")})
        
        
    })
    
})