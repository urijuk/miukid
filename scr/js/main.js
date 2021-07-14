function myModule() {
    
    this.hello = function() {
        console.log('hello Urmat!');
    };

    this.bye = function() {
        console.log('bye Urmat!');
    };
}

myModule.exports = myModule;