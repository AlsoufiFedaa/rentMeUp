// import React, { Component } from "react";

// import Card from "../Components/Card";
// import data from '../data/data';

// class component
// class Feedbacks extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       properties: data.properties,
//       property: data.properties[0]
//     };
//   }

//   nextProperty = () => {
//     const newIndex = this.state.property.index + 1;
//     this.setState({
//       property: data.properties[newIndex]
//     });
//   };

//   prevProperty = () => {
//     const newIndex = this.state.property.index - 1;
//     this.setState({
//       property: data.properties[newIndex]
//     });
//   };

//   render() {
// const { properties, property } = this.state;
// return <data/>
//   <div className="App">
//     <button
//       onClick={() => this.nextProperty()}
//       disabled={property.index === data.properties.length - 1}
//     >
//       Next
//     </button>
//     <button
//       onClick={() => this.prevProperty()}
//       disabled={property.index === 0}
//     >
//       Prev
//     </button>

//     <div className="page">
//       <section>
//         <h1>Feedbacks.</h1>
//       </section>

//       <div className="col">
//         <div className={`cards-slider active-slide-${property.index}`}>
//           <div
//             className="cards-slider-wrapper"
//             style={{
//               transform: `translateX(-${property.index *
//                 (100 / properties.length)}%)`
//             }}
//           >
//             {properties.map(property => (
//               <Card key={property._id} property={property} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>

//   }
// }

// export default Feedbacks;

import * as firebase from "firebase";
import React, { Component } from "react";
class Feedbacks extends Component {
  state = {
    feedbacks:[]
  };
  async componentDidMount() {
    let { feedbacks } = this.state;
    const snapshot = await firebase
      .firestore()
      .collection("FeedBacks")
      .get();
    const collection = {};
    snapshot.forEach(doc => {
      collection[doc.id] = doc.data();

      feedbacks.push(collection[doc.id]);
      this.setState({ feedbacks });
      console.log(feedbacks);
    });
  }

  render() {
    let data = { properties: this.state.feedbacks };
    return <h4>{data[0]}</h4>;
  }
}

export default Feedbacks;
