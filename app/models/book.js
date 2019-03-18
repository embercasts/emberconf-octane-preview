import DS from 'ember-data';
import { computed, get } from '@ember/object';
const { Model, attr, belongsTo, hasMany } = DS;

export default class Book extends Model {
  @attr() title
  @attr() isbn
  @attr() publishDate
  @attr() price
  @attr() username
  @belongsTo() author
  @hasMany() ratings

  get someComputedValue() {
    return this.first + this.last;
  }

  // get anotherValue() {
  //   this.someComputedValue;
  // }

  @computed('ratings.@each.value')
  get totalRating() {
    return this.get('ratings')
      .reduce((sum, rating) => sum + get(rating, 'value'), 0) ;
  }

  // totalRating: computed('ratings.@each.value', function() {
  //   return this.get('ratings')
  //     .reduce((sum, rating) => sum + get(rating, 'value'), 0) ;
  // }),

  @computed('ratings.@each.value')
  get numberOfRatings() {
    return this.get('ratings.length');
  }

  @computed('totalRating', 'numberOfRatings')
  get averageRating() {
    return this.numberOfRatings ? this.totalRating / this.numberOfRatings : 0;
  }
}
