import React , {Component} from "react"; 
import Title from './Title'; 
import {FaBuilding , FaRegClock
    , FaDollarSign
,FaRegSmile} from 'react-icons/fa';

class Services extends Component{
    state={ 
        services:[
            {
                icon:<FaDollarSign/>, 
                title:"Save Your Money", 
                info: "Find the best estate with the lowest and most suitable price"
        
                },


            {
                icon:<FaRegClock/>, 
                title:"Save Your Time", 
                info: "We made the process easier, just with some clicks!"
        
                },
                {
                    icon:<FaBuilding/>, 
                    title:"Best Estates", 
                    info: "Our estates match your needs"
            
                    }, 

                    {
                        icon:<FaRegSmile/>, 
                        title:"Loads Of Happiness", 
                        info: "Be Happy Not Nervous"
                
                        },
        

        ]
    }
    render() {
    return( 
        <section className="services"> 
           <Title title="Services"/> 
           <div className="services-center"> 
           {this.state.services.map((item, index) => {
               return (
                <>
                <article key={index}  className="service">
               <span>{item.icon}</span>
               <h5 style={{fontSize:'18px', fontFamily:'Tahoma'}} > {item.title}</h5>
               <p style={{fontSize:'17px', fontFamily:'Geneva'}}> {item.info}</p>
               </article>
               </>
               );
           })}
           </div>

           
        </section>
       
    );
}}
export default Services; 