import DS from 'ember-data';
import { computed, get } from '@ember/object';
const { Model, attr, belongsTo, hasMany } = DS;

export default Model.extend({
  title: attr(),
  isbn: attr(),
  publishDate: attr(),
  username: attr(),
  author: belongsTo(),
  ratings: hasMany(),

  totalRating: computed('ratings.@each.value', function() {
    return this.get('ratings')
      .reduce((sum, rating) => sum + get(rating, 'value'), 0) ;
  }),

  numberOfRatings: computed('ratings.@each.value', function() {
    return this.get('ratings.length');
  }),

  averageRating: computed('totalRating', 'numberOfRatings', function() {
    return this.get('totalRating') / this.get('numberOfRatings');
  })
})
