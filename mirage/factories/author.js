import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  first: () => faker.name.firstName(),
  last: () => faker.name.lastName(),
  username: () => faker.internet.userName(),
});
