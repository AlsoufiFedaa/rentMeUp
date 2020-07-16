import React from 'react';
import * as firebase from 'firebase';
import Title from '../Components/Title';
import Estate from '../Components/estate';
import '../chat/chat.css';
import ReactLoading from 'react-loading';
import { AuthContext } from '../Components/auth';

class AllEstates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      estates: [],
      user: null,
      isLoading: true,
    };
  }
  static contextType = AuthContext;
  async componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState(user);
        this.setState({ isLoading: false });
      } else {
        console.log('not logged in ');
      }
    });
    const { estates } = this.state;
    const snapshot = await firebase
      .firestore()
      .collection('estates')
      .get();

    snapshot.forEach((doc) => {
      let data = doc.data();

      data.id = doc.id;

      estates.push(data);
      this.setState({ estates });
    });
  }
  render() {
    let userEstate = this.state.estates.filter(
      (item) => item.userUid === firebase.auth().currentUser.uid
    );

    let estates;
    if (userEstate.length > 0) {
      estates = userEstate.map((estate, index) => {
        return <Estate estate={estate} key={index} />;
      });
    } else {
      estates = (
        <Title title="You don't have any estates currently add some and they will appear here" />
      );
    }
    return (
      <div>
        <section className="featured-rooms">
          <Title title="Your Estates" />
          <div className="featured-rooms-center">{estates}</div>
        </section>
        {this.state.isLoading ? (
          <div className="viewLoading">
            <ReactLoading
              type={'spin'}
              color={'#203152'}
              height={'5%'}
              width={'5%'}
            />
          </div>
        ) : null}
      </div>
    );
  }
}
export default AllEstates;
