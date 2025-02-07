import { firestore } from "./firebase";

function addUser(email, uid, fullname, IDnum, isAdmin) {
  firestore.collection("users").doc(uid).set({
    admin: isAdmin,
    IDnum: IDnum,
    email: email,
    fullname: fullname,
    uid: uid,
  });
}
function getUserDetails(uid) {
  firestore
    .collection("users")
    .doc(uid)
    .get()
    .then((snapshot) => {
      console.log(snapshot.data());
    });
}

export { addUser, getUserDetails };
