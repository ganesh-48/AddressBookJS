/*@Description-Address Book Problem.
* Welcome to address book problem.
* Create a contact in address book.
* contact first name, last name, address, city, state, zip, phone number and email */
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
}