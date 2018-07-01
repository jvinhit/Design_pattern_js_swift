var User = (function(){
    var instance; 
    var self = this;
    function init(userName) {
        self.UserName = userName;
        return {
            showUsername : function(){
                return self.UserName;
            },
            changeUserName: function(newValue){
                self.UserName = newValue;
            }
        }

    }
    return {
        getInstance : function(userName){
            if (!instance){
                instance = init(userName);
            }
            return instance;
        }
    }
}())

var userAbc = User.getInstance('user_abc')
var userCef = User.getInstance('user_cef')

console.log(userAbc.showUsername())
console.log(userCef.showUsername())
userAbc.changeUserName('user_abcs')
console.log(userAbc.showUsername())