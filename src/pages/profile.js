import React, { useEffect, useState } from "react";
import Title from "../Components/Title";
import * as firebase from "firebase";
import userP from "../assets/user1.png";
const Profile = () => {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [mobile, setMobile] = useState([]);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User logged in already or has just logged in.

        firebase
          .firestore()
          .collection("users")
          .doc(user.uid)
          .get()
          .then(doc => {
            setName(doc.data().name);
            setEmail(doc.data().email);
            setMobile(doc.data().mobile);
            console.log(name, email, mobile);
          })
          .catch(function(error) {
            console.log("Error getting documents: ", error);
          });
      } else {
        console.log("not logged in ");
        // User not logged in or has just logged out.
      }
    });
  });

  return (
    <div
      style={{
        marginTop: 100,
        justifyContent: "center"
      }}
    >
      <Title title="Your Profile" />
      <div className="uPro">
        <div className="uImg">
          <img src={userP} height={100} width={100} />
        </div>
        <div className="DATA">
          <h3>Name : {name}</h3>
          <h3>Email : {email}</h3>
          <h3>Mobile : {mobile}</h3>
        </div>
      </div>
    </div>
  );
};
export default Profile;
