const findTheOldest = function (people) {
  let birth, death, greatestAge;
  let greatest = people[0];
  people.forEach((person) => {
    birth = person.yearOfBirth;
    death = person.yearOfDeath;
    greatestAge = greatest.yearOfDeath - greatest.yearOfBirth;
    if (person.yearOfDeath == undefined) {
      death = new Date().getFullYear();
    }
    if (greatest.yearOfDeath == undefined) {
      let greatestDeath = new Date().getFullYear();
      greatestAge = greatestDeath - greatest.yearOfBirth;
    }
    let personAge = death - birth;
    if (personAge > greatestAge) {
      greatest = person;
    }
  });
  return greatest;
};

// Do not edit below this line
module.exports = findTheOldest;
