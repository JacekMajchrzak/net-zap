class Auth {

    constructor(){
        this.TOKEN = "token";
        this.jwt = localStorage.getItem(this.TOKEN);
        this.claims = this.parseJwt();
    }

    isAuthenticated() {
        return this.claims !== null;
    }

    parseJwt(){
        if(this.jwt === null){
            return null;
        }
        return JSON.parse(atob(this.jwt.split('.')[1]));
    }

}

export default Auth;