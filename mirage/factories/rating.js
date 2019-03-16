import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  value: () => faker.random.number({ min: 1, max: 10}),
  username: () => faker.internet.userName(),
});
