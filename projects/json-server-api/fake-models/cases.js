var faker = require('faker');
var genders = [ 'female' , 'male' ];
var status = [ "positive" , "negative" , "unknown" ];
function generateCases () {
  var cases = []
  for (var id = 0; id < 5; id++) {
    var name = [ faker.name.firstName() + ' ' + faker.name.lastName()];
    var gender = faker.random.arrayElement(genders);
    var age = faker.random.number(100);
    var address = faker.streetAddress;
    var city = faker.address.city;
    var country = faker.address.country;
    var status = faker.random.arrayElement(status);
    var update = faker.date.past;
    cases.push({
      "id": id,
      "name": name,
      "gender": gender,
      "age": age,
      "address": address,
      "city": city,
      "country": country,
      "status": status,
      "updated": update
    })
  }
  return { "cases": cases }
}
module.exports = generateCases
