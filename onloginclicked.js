onLoginClicked() {
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const user = await auth().signInWithCredential(googleCredential);
    console.log(user)
}