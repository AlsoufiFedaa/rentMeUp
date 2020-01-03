import React , {Component} from "react"; 
import Title from '../Components/Title'
import {Link} from "react-router-dom"
import * as firebase from 'firebase';
import 'firebase/storage'



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
       downloadURL:'', 
       progress:0, 
       data :null


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
          console.log(selectedFile)
                    this.setState({selectedFile})

        }}
      }
     
    
   
    
        
 
      addPropertyToMap=()=> {

        
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
             url:this.downloadURL
        
   
         
         }) .then(function(docRef) {
           console.log("Document written with ID: ", docRef.id);
       })
       .catch(function(error) {
           console.error("Error adding document: ", error);
       })

      }
    upLoadImage=()=>{ 
      const file = this.state.selectedFile;


       var uploadTask =  firebase.storage().ref(`images/${file.name}`).put(file);

       // Register three observers:
       // 1. 'state_changed' observer, called any time the state changes
       // 2. Error observer, called on failure
       // 3. Completion observer, called on successful completion
       uploadTask.on('state_changed', (snapshot)=>{
         // Observe state change events such as progress, pause, and resume
         // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
         var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
         console.log('Upload is ' + progress + '% done');
         switch (snapshot.state) {
           case firebase.storage.TaskState.PAUSED: // or 'paused'
             console.log('Upload is paused');
             break;
           case firebase.storage.TaskState.RUNNING: // or 'running'
             console.log('Upload is running');
             break;
         }
       }, (error)=> {
         // Handle unsuccessful uploads
       }, ()=> {
         // Handle successful uploads on complete
         // For instance, get the download URL: https://firebasestorage.googleapis.com/...
         uploadTask.snapshot.ref.getDownloadURL().then((downloadURL)=> {
           console.log('File available at', downloadURL);
          
           this.setState({downloadURL})



         });
       });





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
        <div className='button'>
      <label htmlFor='multi'>
        {/* <FontAwesomeIcon icon={faImages} color='#6d84b4' size='10x' /> */}
      </label>
        <input type='file' name='selectedFile' accept="image/*" onChange={this.handleChangeImage} multiple />
        <button onClick={this.upLoadImage}>Upload image</button>
        <br/> 
        <img src={this.state.downloadURL || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="300" width="400"/>

       </div>
        
   
        </div>
        <div style={{justifyContent:'center' ,marginLeft:50}}> 
          <Link to="/MainMap" className="btn-primary" onClick={this.addPropertyToMap}> Add Property</Link>
          
        </div>

        </section>
       
    )
}}
export default AddProperty; 