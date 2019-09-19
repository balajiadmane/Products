var message =(message)=> {
    this.message = message;
    function getMessage(){
        return this.message;
    }
}

module.exports = message;