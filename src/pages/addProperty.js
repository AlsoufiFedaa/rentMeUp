import React , {Component} from "react"; 
import Title from '../Components/Title'
import {Link} from "react-router-dom"
import * as firebase from 'firebase';
import 'firebase/storage'
import {storage} from 'firebase';
class AddProperty extends Component{
    state={
        type:"all", 
        city: "", 
        street: "", 
        price:100,
       space:0,
        roomNum:1, 
       downtown:false, 
       overLookingSea: false, 
       selectedFile:null, 
       url:''


    }
    handleChange=(event)=>{ 
        const target = event.target; 
        const value = target.type ===  'checkbox'? 
        target.checked : target.value;
        const name = event.target.name;
        this.setState({[name]:value});
      };
      handleChangeImage=(e)=>{ 
        {if(e.target.files[0]){ 
          const selectedFile = e.target.files[0]
          this.setState({selectedFile})

        }}
      }
 
      addPropertyToMap=()=> {

        console.log(this.state.selectedFile)
        var db = firebase.firestore();
        
            db.collection("estates").add({
            
             type: this.state.type, 
             city: this.state.city, 
             street: this.state.street, 
             price:this.state.price, 
             space:this.state.space, 
             roomNum:this.state.roomNum, 
             downtown:this.state.downtown, 
             overLookingSea:this.state.overLookingSea, 
        
   
         
         }) .then(function(docRef) {
           console.log("Document written with ID: ", docRef.id);
       })
       .catch(function(error) {
           console.error("Error adding document: ", error);
       })
      const image = this.state.selectedFile

      

      

     const uploadTask=  firebase.storage().ref(`images${image.name}`).put(image);
     uploadTask.on('state changed', 
     (snapshot)=>{
       //progress function


      } , (error)=>{
        //error function 
        console.log(error)
      } , ()=> {
        //complete function
        storage.ref('images').child(image.name).getDownloadURL().then(url=>{
          console.log(url)
        })

      })
      }
    render() {
      console.log(firebase.storage())
    return( 
        <section className='filter-container'> 
        <div style={{marginTop:250, marginLeft:50}}> 
        <Title title='Add Property'/>
     
        <div className='form-group'> 
        <label htmlFor="city">City</label> 
         <input type="text" placeholder="city"  value= {this.state.city} onChange={this.handleChange} name='city' /> 
        </div> 
         <div className='form-group'> 
        <label htmlFor="street"> street</label> 
        <input type="text" placeholder="street"  value={this.state.street} onChange={this.handleChange} name='street'/> 
         </div> 
         <div className='form-group'> 
        <label htmlFor="price"> Price</label> 
        <input type="number" placeholder="price"  value={this.state.price} onChange={this.handleChange} name='price'/> 
         </div> 
         <div className='form-group'> 
        <label htmlFor="space"> Space</label> 
        <input type="number" placeholder="space"  value={this.state.space} onChange={this.handleChange} name='space'/> 
         </div> 
         <div className='form-group'> 
        <label htmlFor="type"> Type</label> 
        <input type="text" placeholder="write either buying or renting"  value={this.state.street} onChange={this.handleChange} name='type'/> 
         </div> 
         <div className='form-group'> 
        <label htmlFor="rooms">Rooms</label> 
        <input type="number" placeholder="rooms"  value={this.state.roomNum} onChange={this.handleChange} name='roomNum'/> 
         </div> 
          {/* extras */}
        <div className ='form-group'>
        <div className='single-extra'> 
        <input type='checkbox' name='downtown' id = 'downtown'  checked={this.state.downtown}  onChange={this.handleChange} /> 
        <label htmlFor='downtown'>downtown</label>

        </div>
        <div className='single-extra'> 
        <input type='checkbox' name='overLookingSea' id = 'overLookingSea'  checked={this.state.overLookingSea}  onChange={this.handleChange}/> 
        <label htmlFor='overLookingSea'>overLookingSea</label>
        </div>
        </div> 
        <input type='file' name='selectedFile' accept="image/*" onChange={this.handleChangeImage} />
       
        
   
        </div>
        <div style={{justifyContent:'center' ,marginLeft:50}}> 
          <Link to="/MainMap" className="btn-primary" onClick={this.addPropertyToMap}> Add Property</Link>
          
        </div>

        </section>
       
    )
}}
export default AddProperty; 