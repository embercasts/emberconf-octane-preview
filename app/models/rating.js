import DS from 'ember-data';
const { Model, attr } = DS;

export default class Rating extends Model {
  @attr() value
  @attr() username
}
