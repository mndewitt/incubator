export default class ApiService {
  constructor(firebaseRef) {
    this.firebase = firebaseRef
  }

  now() {
    return new Date().toISOString()
  }

  getUserId() {
    const user = this.firebase.auth().currentUser
    return user ? user.uid : null
  }

  login(email, password) {
    return this.firebase.auth().signInWithEmailAndPassword(email, password)
  }

  signup(email, password) {
    return this.firebase.auth().createUserWithEmailAndPassword(email, password)
  }
}
