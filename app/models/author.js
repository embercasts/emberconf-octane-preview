import DS from 'ember-data';
const { Model, attr, hasMany } = DS;

export default class AuthorModel extends Model {
  @attr() first;
  @attr() last;
  @attr() username;
  @hasMany() books;
}
