var header = document.getElementById("header");
var ok = document.getElementById("ok-button");
var pass = document.getElementById("pass");

function generatePassword() {
    var length = 9,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

var worked = 0;

ok.onclick = function(){
    var timer = setInterval(function(){
        worked+=1;
        var created = generatePassword();
        pass.innerHTML = created;
        console.log(created);
        if(worked>20){
            worked = 0;
            clearInterval(timer);
        }
    },70);

}