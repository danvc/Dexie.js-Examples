import Dexie from 'dexie';

// we create our instance
var db = new Dexie('MyDB');

// we define our schema
db.version(1).stores({
    Person: "id, name, age",
    phones: "id, perId, number",
    emailList: "id, perId, email",
    socialNetworkAccounts: "perId, socialNetwork"
});

// open th db
db.open().then(function(){
    alert('database opened');
}).catch(function(e){
    console.error("Open failed: ", e);
});