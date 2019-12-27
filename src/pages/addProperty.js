import React , {Component} from "react"; 
class AddProperty extends Component{
    state={
        city:' ', 
        province:'', 
        street:''


    }
    updateValueCity=(e)=> { 
        this.setState({city:e.target.value})

    }

    updateValueProvince=(e)=> { 
        this.setState({province:e.target.value})

    }
    updateValueStreet=(e)=> { 
        this.setState({street:e.target.value})

    }

    render() {
    return( 
        <div> 
        <h1> ADD Property</h1>
        <div> 

        City: <input type="text" placeholder="city"  value= {this.state.city} onChange={this.updateValueCity} className='City'/> 
        province:<input type="text" placeholder="province"  value={this.state.province} onChange={this.updateValueProvince} className='Province'/> 
        street: <input type="text" placeholder="street"  value={this.state.street} onChange={this.updateValueStreet} className='Street'/> 

        </div>
        </div>
       
    )
}}
export default AddProperty; 