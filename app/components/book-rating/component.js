import { computed } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
  tagName: 'li',
  classNames: ['review'],
  ratingColor: computed('rating.value', function() {
    return this.get('rating.value') > 3 ? 'gold' : 'red';
  })
});
