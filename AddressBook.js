/*@Description-Address Book Problem.
* Welcome to address book problem.
* Create a contact in address book.
* contact first name, last name, address, city, state, zip, phone number and email.
* Check a ensure valid contacts are added . 
* Create a new address book array.
* Add new contacts details in address book.
* find the contacs in address book by using person first name.
* Delete a contact using person first name in address book.
* Count the total number of contact in address book.
* Search the duplicate contacts.
* Search person by city and state.
* used filter to find person name in city or state.
* View a person name by city or state
*/
console.log(" Welcome to Address Book Problem ");

class Contacts {

    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    constructor(...params) {
        this.firstName = [0];
        this.lastName = [1];
        this.address = [2];
        this.city = [3];
        this.state =[4];
        this.zip = [5];
        this.phoneNumber =[6];
        this.email = [7];
    }

    /**Check the first name start with capatil name.
     * And it should be minimum 3 charaters.
     * If it is not start with capatil letter or it is not less than 3 letters then it is invalid.*/
    get firstName() {
        return this.firstName;
    }
    set firstName(firstName) {
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if (nameRegex.test(firstName)) {
            this.firstName = firstName;
        } else {
            throw "Invalid first name";
        }
    }

    /** Check the first name start with capatil name.
     * And it should be minimum 3 charaters.
     * If it is not start with capatil letter or it is not less than 3 letters then it is invalid.*/
    get lastName() {
        this.lastName;
    }
    set lastName(lastName) {
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if (nameRegex.test(lastName)) {
            this.lastName = lastName;
        } else {
            throw "Invalid last name";
        }
    }

    /** Check the address is minimum 4 characters.
     * if is less than then print it is invalid.*/
    get address() {
        this.address;
    }
    set address(address) {
        let nameRegex = RegExp("^[A-Za-z0-9]{4,}");
        if (nameRegex.test(address)) {
            this.address = address;
        } else {
            throw " Address is Invalid ";
        }
    }

    /**check the city name is less 4 letters.
     * In that any numeric value then it is invalid city name. */
    get city() {
        this.city;
    }
    set city(city) {
        let nameRegex = RegExp("^[A-Za-z]{4,}$");
        if (nameRegex.test(city)) {
            this.city = city;
        } else {
            throw "City name is invalid";
        }
    }

    /**check the state name is less 2 letters.
     * In that any numeric value then it is invalid state name. */
    get state() {
        this.state;
    }
    set state(state) {
        let nameRegex = RegExp("^[A-Za-z]{2,}$");
        if (nameRegex.test(state)) {
            this.state = state;
        } else {
            throw "State name is invalid";
        }
    }

    /**zip code is in numbers.
     * if it is less than 6 numbers then it is invalid.*/
    get zip() {
        this.zip;
    }
    set zip(zip) {
        let nameRegex = RegExp("^[1-9]{3}[ ]?[0-9]{3}$");
        if (nameRegex.test(zip)) {
            this.zip = zip;
        } else {
            throw "zip code is invalid";
        }
    }

    /**check phone number is 10 digit number .
     * if not then print a invalid phone number.*/
    get phoneNumber() {
        this.phoneNumber;
    }
    set phoneNumber(phoneNumber) {
        let nameRegex = RegExp("^((\\\\+)?(\\\\d{2}[-]))?(\\\\d{10}){1}?$");
        if (nameRegex.test(phoneNumber)) {
            this.phoneNumber = phoneNumber;
        } else {
            throw "phone number is invalid";
        }
    }

    /**check a email. */
    get email() {
        this.email;
    }
    set email(email) {
        let nameRegex = RegExp("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@" + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$");
        if (nameRegex.test(email)) {
            this.email = email;
        } else {
            throw "Email id is invalid";
        }
    }

    toString() {
        return "First Name: " + this.firstName + ", Last Name: " + this.lastName+ "Address: " + this.address+ ", City: " + this.city + ", State: "+ this.state + "Zip: " + this.zip+ ", Phone Number: " + this.phoneNumber + ", Email: " + this.email;
    }
}

/**Create a new address book array.
 * Add new contacts details in address book. 
 * find the contacs in address book by using person first name.
 * Delete a contact using person first name in address book.
 * Count the total number of contact in address book.
 * Search the duplicate contacts.
 * Search person by city and state.
 * used filter to find person name in city or state.
 * View a person name by city or state
 */
try {
    let addContactsArray = new Array();
        addContactsArray.push(new Contact("Ram", "Sharma", "Line-3", "Solapur", "Maharashtra", "330001",
        "91 1234567899", "ramsharma@gmail.com"));
        addContactsArray.push(new Contact("Sai", "Thakur", "sailpalace", "pune", "Maharashtra", "323021",
        "91 4561237866", "sai@gmail.com"));
    
    
        addContactsArray.forEach((contacts) => console.log(contacts.toString()));
        addContactsArray.filter(contacts => contacts.firstName == "Ram").map(contacts => contacts.firstName = "Shakhar");
        addContactsArray.forEach((contacts) => console.log(contacts.toString()));

        let index = addContactsArray.findIndex(contacts => contacts.firstName = "Sai");
        addContactsArray.slice(index, 1);
        addContactsArray.forEach((contacts) => console.log(contacts.toString()));

        //search person by city
        function searchPersonByCity() {
            if (searchPersonByCity == 0) 
            console.log("Person name is not found in city:" + searchPersonByCity);
            else 
            console.log( searchPersonByCity + "Person name is found in a particular city" + searchPersonByCity);
        }
        let searchPerzonByCity = "Solapur";
        let searchPersonByCity = addContactsArray.filter(contacts => contacts.city == searchPersonByCity).map(contacts => contacts);
        searchPersonByCity();

        //search person by state
        function searchPersonByState() {
            if (serchPersonByState == 0) 
            console.log("Person name is not found in address book " + searchPersonByState);
            else console.log( serchPersonByState + "Person name is found in address book" + searchPersonByState);
        }
        let searchPersonByState = "Maharashtra";
        let serchPersonByState = addContactsArray.filter(contacts => contacts.state == searchPersonByState).map(contacts => contacts);
        searchPersonByState();
 
        //search person city or state
        let contactsViewPersonByCity = "Pune";
        let contactsViewPersonByState = "Maharashtra";
        let contactsByCityArray = addContactsArray.filter(contacts => contacts.city == contactsViewPersonByCity).map(contacts => contacts);
        contactsByCityArray.forEach(contacts => console.log(contacts.toString()))
        let contactsByStateArray = addContactsArray.filter(contacts => contacts.state == contactsViewPersonByState).map(contacts => contacts);
        contactsByStateArray.forEach(contacts => console.log(contacts.toString()));
    }
catch (e) {
    console.log("Regex pattern is not valid" + e);
}