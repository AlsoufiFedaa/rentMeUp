import React , {Component} from "react"; 
class AddProperty extends Component{
    state={
        city:' ', 
        province:'', 
        street:''


    }
    // updateValueCity=(e)=> { 
    //    let city = this.state.city
    //     this.setState({city:e.target.value})

    // }

    // updateValueProvince=(e)=> { 
    //   let  province = this.state.province
    //     this.setState({province:e.target.value})

    // }
    // updateValueStreet=(e)=> { 
    //  let  street = this.state.street
    //     this.setState({street:e.target.value})

    // }

    render() {
    return( 
        <div> 
        <h1> ADD Property</h1>
        <div> 

        City: <input type="text" placeholder="city" />  
        province: <input type="text" placeholder="province" /> 
        street: <input type="text" placeholder="street"  /> 

        </div>
        </div>
       
    )
}}
export default AddProperty; 