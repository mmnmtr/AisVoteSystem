import Firebase from 'firebase'

  var config = {
    apiKey: "AIzaSyBF3JGufvUpQ47570rhG7OmUzMAavdVYnU",
    authDomain: "vuefirebase-af5e5.firebaseapp.com",
    databaseURL: "https://vuefirebase-af5e5.firebaseio.com",
    projectId: "vuefirebase-af5e5",
    storageBucket: "vuefirebase-af5e5.appspot.com",
    messagingSenderId: "559915712945"
  };


  const firebaseApp = Firebase.initializeApp(config);
  const db = firebaseApp.database()
  export const dbAuth = firebaseApp.auth()
  export const postRef = db.ref('posts')
  export const numberRef = db.ref('numbers')
  export const storage = firebaseApp.storage()