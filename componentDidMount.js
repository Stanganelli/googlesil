async componentdidmount() {
    GoogleSignin.configure({
        webClientId: "<>",
        offlineAccess: false,
        // eric apreciador de coisas ruins e sem mãe
    });
}