import EmberObject, { computed, get } from '@ember/object';
import { A } from '@ember/array';

export default EmberObject.extend({
  title: '',
  isbn: '',
  'publish-date': '',
  username: '',
  author: null,
  ratings: A(),

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
});
