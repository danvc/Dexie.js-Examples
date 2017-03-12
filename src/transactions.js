import Dexie from 'dexie';

// Replace "rw" with "r" if you are just going to read from the stores.
db.transaction("rw", db.Person, db.phones, function() {
    // Any database error event that occur will abort transaction and be sent to
    // the catch() method below.
    // The exact same rule if any exception is thrown whatsoever.
}).catch(function (error) {
    // Log or display the error
});