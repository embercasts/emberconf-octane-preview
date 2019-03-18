import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  title: () => faker.company.catchPhrase(),
  isbn: () => faker.random.alphaNumeric(15),
  publishDate: () => faker.date.past().toISOString(),
  username: () => faker.internet.userName(),
  price: () => parseFloat(faker.commerce.price(2.45, 43.25)),
});
