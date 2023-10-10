function newPerson(){
    fetch("https://randomuser.me/api/?results=2")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
            const person_data = data.results[0];
            const person = new Person(
                person_data.picture,
                person_data.name.first,
                person_data.name.last,
                person_data.location.city,
                person_data.postcode,
                person_data.phone);
            person.people();
        });
}

class Person {
    constructor(picture, firstname, lastname, city, postcode, phone) {
        this.picture = picture;
        this.firstname = firstname;
        this.lastname = lastname;
        this.city = city;
        this.postcode = postcode;
        this.phone = phone;
    }
    people() {
        const character = document.createElement('div');
        character.id = 'character';
        character.className = 'character';

        const picture = document.createElement('img');
        picture.src = this.picture.large;
        character.appendChild(picture);

        const name = document.createElement('p');
        name.className = "text";
        name.innerHTML = `<b>Name:</b> ${this.firstname} ${this.lastname}`;
        character.appendChild(name);

        const city = document.createElement('p');
        city.className = "text";
        city.innerHTML = `<b>City:</b> ${this.city}`;
        character.appendChild(city);

        const postcode = document.createElement('p');
        postcode.className = "text";
        postcode.innerHTML = `<b>Postcode:</b> ${this.postcode}`;
        character.appendChild(postcode);

        const phone = document.createElement('p');
        phone.className = "text";
        phone.innerHTML = `<b>Phone:</b> ${this.phone}`;
        character.appendChild(phone);

        document.getElementById('people').appendChild(character);
    }
}
