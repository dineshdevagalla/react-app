// import { observable, action } from 'mobx'

// class CounterStore {
//    @observable count = {key1:xxxxxxxx,key2:xxxxxxx
        
//}

//    @action.bound
//    incrementCounter() {
//       this.count = this.count + 1
//    }

//    @action.bound
//    decrementCounter() {
//       this.count = this.count - 1
//    }
// }

// export default CounterStore
import {observable,action} from 'mobx'



class CounterStore{
    @observable count=0
    
    
    
  @action.bound  onIncrementCounter()
   {   
       let count=this.count
       if(count.toString().search(/^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/)!=-1)
       
       {
       this.count=parseInt(count)+1    
       
       }
       else
       {
          
       this.count=1    
           
       }
       
       
   }
    @action.bound  onDecrementCounter(){
     let count=this.count
       if(count.toString().search(/^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/)!=-1)
       
       {
       this.count=Number(count)-1    
       
       }
       else
       {
       
       this.count=-1    
           
       }
   }
    
    onChangeCount(value)
   {
      
         if(value==="")
        {
            
            this.count=value    
            
        }
        
        else if((value.search(/^[-+\.0-9eE]*$/)!=-1))
        {
              this.count= (value)
        }
    
   }


} 

export default CounterStore