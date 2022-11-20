type LetandNum = string | number ;

export class UserModel{

    User:LetandNum;
    Password:LetandNum;
    
    constructor(User:LetandNum, Password:LetandNum){
        this.User = User;
        this.Password = Password;
    }
}