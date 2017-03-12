import Dexie from 'dexie';

// we create our instance
var db = new Dexie('MyDB');


db.version(1).stores({
    Person: "id, name, age",
    phones: "id, perId, number",
    emailList: "id, perId, email",
    socialNetworkAccounts: "perId, socialNetwork"
});

/**
 * we define a new version and update the entity that we want to (in this case, Person)
 */
db.version(2).stores({
    Person: "id, name, age, sex",
});

// open th db
db.open().then(function(){
    alert('database opened');
}).catch(function(e){
    console.error("Open failed: ", e);
});