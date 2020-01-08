import React , {Component} from "react"; 
import Title from '../Components/Title'
import {Link} from "react-router-dom"
import * as firebase from 'firebase';
import 'firebase/storage'
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Geocode from "react-geocode";
import Autocomplete from 'react-google-autocomplete';
Geocode.setApiKey( "AIzaSyA2loHLnnXg7c8A9LzTpkJ_N-kKvYlmO4s" );
Geocode.enableDebug();
class AddProperty extends Component{
  constructor( props ){
    		super( props );
    		this.state = {
        type:"all", 
        address: '',
        city: '',
          area: '',
          street:'',
       
        mapPosition: {
          lat: this.props.center.lat,
          lng: this.props.center.lng
      	},
      	markerPosition: {
      lat: this.props.center.lat,
    	lng: this.props.center.lng
        },
        price:100,
       space:0,
        roomNum:1, 
       downtown:false, 
       overLookingSea: false, 
       selectedFile:null, 
       downloadURLs:[], 

      
      
      }
      
   


    }



  //   	 * Get the current address from the default map position and set those values in the state
	//  */
	componentDidMount() {
    		Geocode.fromLatLng( this.state.mapPosition.lat , this.state.mapPosition.lng ).then(
    			response => {
    				const address = response.results[0].formatted_address,
    				      addressArray =  response.results[0].address_components,
    				      city = this.getCity( addressArray ),
    				      area = this.getArea( addressArray );
    				     
    
    				console.log( 'city', city, area );
    
    				this.setState( {
    					address: ( address ) ? address : '',
    					area: ( area ) ? area : '',
    					city: ( city ) ? city : '',
    				
    				} )
    			},
    			error => {
    				console.error( error );
    			}
    		);
    	};
  

  	/**
	 * Component should only update ( meaning re-render ), when the user selects the address, or drags the pin
	 *
	 * @param nextProps
	 * @param nextState
	 * @return {boolean}
	 */
	shouldComponentUpdate( nextProps, nextState ){
		if (
			this.state.markerPosition.lat !== this.props.center.lat ||
			this.state.address !== nextState.address ||
			this.state.city !== nextState.city ||
			this.state.area !== nextState.area 
			
		) {
			return true
		} else if ( this.props.center.lat === nextProps.center.lat ){
			return false
		}
	}
	/**
	 * Get the city and set the city input value to the one selected
	 *
	 * @param addressArray
	 * @return {string}
	 */
	getCity = ( addressArray ) => {
		let city = '';
		for( let i = 0; i < addressArray.length; i++ ) {
			if ( addressArray[ i ].types[0] && 'administrative_area_level_2' === addressArray[ i ].types[0] ) {
				city = addressArray[ i ].long_name;
				return city;
			}
		}
	};
	/**
	 * Get the area and set the area input value to the one selected
	 *
	 * @param addressArray
	 * @return {string}
	 */
	getArea = ( addressArray ) => {
		let area = '';
		for( let i = 0; i < addressArray.length; i++ ) {
			if ( addressArray[ i ].types[0]  ) {
				for ( let j = 0; j < addressArray[ i ].types.length; j++ ) {
					if ( 'sublocality_level_1' === addressArray[ i ].types[j] || 'locality' === addressArray[ i ].types[j] ) {
						area = addressArray[ i ].long_name;
						return area;
					}
				}
			}
		}
	};
	/**
	 * Get the address and set the address input value to the one selected
	 *
	 * @param addressArray
	 * @return {string}
	 */

  	onInfoWindowClose = ( event ) => {

	};

	/**
	 * When the marker is dragged you get the lat and long using the functions available from event object.
	 * Use geocode to get the address, city, area and state from the lat and lng positions.
	 * And then set those values in the state.
	 *
	 * @param event
	 */
	onMarkerDragEnd = ( event ) => {
		let newLat = event.latLng.lat(),
			newLng = event.latLng.lng();
			console.log(newLat , newLng)

		Geocode.fromLatLng( newLat , newLng ).then(
			response => {
				console.log('res',response)
				const address = response.results[0].formatted_address,
				      addressArray =  response.results[0].address_components,
				      city = this.getCity( addressArray ),
				      area = this.getArea( addressArray );
				     
				this.setState( {
					address: ( address ) ? address : '',
					area: ( area ) ? area : '',
					city: ( city ) ? city : '',
					
					markerPosition: {
						lat: newLat,
						lng: newLng
					},
					mapPosition: {
						lat: newLat,
						lng: newLng
					},
				} )
			},
			error => {
				console.error(error);
			}
		);
		console.log(this.state.map)
	};

	/**
	 * When the user types an address in the search box
	 * @param place
	 */
	onPlaceSelected = ( place ) => {
		console.log( 'plc', place );
		const address = place.formatted_address,
		      addressArray =  place.address_components,
		      city = this.getCity( addressArray ),
		      area = this.getArea( addressArray ),
		      
		      latValue = place.geometry.location.lat(),
		      lngValue = place.geometry.location.lng();
		// Set these values in the state.
		this.setState({
			address: ( address ) ? address : '',
			area: ( area ) ? area : '',
			city: ( city ) ? city : '',
  
      
			markerPosition: {
				lat: latValue,
				lng: lngValue
			},
			mapPosition: {
				lat: latValue,
				lng: lngValue
			},
		})
	};
	
    handleChange=(event)=>{ 
        const target = event.target; 
        const value = target.type ===  'checkbox'? 
        target.checked : target.value;
        const name = event.target.name;
        this.setState({[name]:value});
      };
      handleChangeImage=(e)=>{ 
        {if(e.target.files){ 
          
          const selectedFile = e.target.files
          console.log(selectedFile)
           this.setState({selectedFile})

        }}
      }
     
 
      addPropertyToMap=()=> {

		let user = firebase.auth().currentUser;
		let name, email, phone;

		if (user != null) {
		name = user.name;
		email = user.email;
		phone = user.mobile
	 }
        let {downloadURLs} = this.state;
        
        var db = firebase.firestore();
        
            db.collection("estates").add({
				
			 type: this.state.type, 
			 name: name,
			 email:email,
			 phone:phone,
             city: this.state.city, 
             street: this.state.street, 
             price:this.state.price, 
             space:this.state.space, 
             roomNum:this.state.roomNum, 
             downtown:this.state.downtown, 
             overLookingSea:this.state.overLookingSea, 
             url: downloadURLs, 
             lat : this.state.markerPosition.lat, 
             lng:this.state.markerPosition.lng     
   
         
         }) .then(function(docRef) {
           console.log("Document written with ID: ", docRef.id);
       })
       .catch(function(error) {
           console.error("Error adding document: ", error);
       })

      }
    upLoadImage=()=>{ 
     
      let {downloadURLs} = this.state;
        var uploadTask =  firebase.storage().ref();
        
        Object.keys(this.state.selectedFile).map((key)=>{
         
          uploadTask.child(`images/${this.state.selectedFile[key].name}`).put(this.state.selectedFile[key]).then((snapshot) =>
          snapshot.ref.getDownloadURL().then((downloadURL) => {
          
           downloadURLs.push(downloadURL)
           this.setState({downloadURLs})
           
          })

          )})
          console.log(downloadURLs)
          
       
	}
   
    render() {
    
      	const AsyncMap = withScriptjs(
			withGoogleMap(
				props => (
					<GoogleMap google={ this.props.google }
					           defaultZoom={ this.props.zoom }
					           defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
					>
						{/* InfoWindow on top of marker */}
						<InfoWindow
							onClose={this.onInfoWindowClose}
							position={{ lat: ( this.state.markerPosition.lat + 0.0018 ), lng: this.state.markerPosition.lng }}
						>
							<div>
								<span style={{ padding: 0, margin: 0 }}>{ this.state.address }</span>
							</div>
						</InfoWindow>
						{/*Marker*/}
						<Marker google={this.props.google}
						        name={'Dolores park'}
						        draggable={true}
						        onDragEnd={ this.onMarkerDragEnd }
						        position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
						/>
						<Marker />
						{/* For Auto complete Search Box */}
						<Autocomplete
							style={{
								width: '100%',
								height: '40px',
								paddingLeft: '16px',
								marginTop: '2px',
								marginBottom: '50px',
							}}
							onPlaceSelected={ this.onPlaceSelected }
							types={['(regions)']}
						/>
               <div style={{justifyContent:'center' ,marginTop:50 }}> 
             <Link to="/MainMap" className="btn-primary" onClick={this.addPropertyToMap}> Add Property</Link>
          
             </div> 
					</GoogleMap>
				)
			)
		);
		let map;
		if( this.props.center.lat !== undefined ) {
			map = <div style={{marginTop:150 ,textAlign: "center"}}>

				<div>
				<Title title='Add Property'/>
					<div className="form-group">
						<label htmlFor="">City</label>
						<input type="text" name="city"  onChange={ this.handleChange } value={ this.state.city }/>
					</div>
					<div className="form-group">
						<label htmlFor="">Area</label>
						<input type="text" name="area"  onChange={ this.handleChange }  value={ this.state.area }/>
					</div>
	
					<div className="form-group">
						<label htmlFor="">Address</label>
						<input type="text" name="address" onChange={ this.handleChange }value={ this.state.address }/>
					</div>

						<div className='form-group'> 
					<label htmlFor="price">Price</label> 
						<input type="number" placeholder="price"  value={this.state.price} onChange={this.handleChange} name='price'/> 
						</div> 
						<div className='form-group'> 
					<label htmlFor="space">Space</label> 
					<input type="number" placeholder="space"  value={this.state.space} onChange={this.handleChange} name='space'/> 
						</div> 
						<div className='form-group'> 
					<label htmlFor="type">Type</label> 
					<input type="text" placeholder="write either buying or renting"  value={this.state.type} onChange={this.handleChange} name='type'/> 
						</div> 
					<div className='form-group'> 
						<label htmlFor="rooms">Rooms</label> 
						<input type="number" placeholder="rooms"  value={this.state.roomNum} onChange={this.handleChange} name='roomNum'/> 
						</div> 
						<br/> 
						<div className='button'>
					<label htmlFor='multi'></label>
					<input type='file' name='selectedFile' accept="image/*" onChange={this.handleChangeImage} multiple />
					<button onClick={this.upLoadImage}>Upload image</button>
					<br/> 
					
				
					{this.state.downloadURLs.map((item , index)=> { 
						return <img src={item || 'http://via.placeholder.com/40x30'} alt="Uploaded images" height="100" width="100" key={index}/>
					})  }
					</div>
					<br/> 
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

				</div>

				<AsyncMap
					googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDGe5vjL8wBmilLzoJ0jNIwe9SAuH2xS_0&libraries=places"
					loadingElement={
						<div style={{ height: `100%` }} />
					}
					containerElement={
						<div style={{ height: this.props.height }} />
					}
					mapElement={
						<div style={{ height: `100%` }} />
					}
				/>
			</div>
		} else {
			map = <div style={{height: this.props.height}} />
    }


      
    return(
        map  )
}}
export default AddProperty; 