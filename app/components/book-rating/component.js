import { computed } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
  tagName: 'li',
  classNames: ['review'],
  classNameBindings: ['ratingColor'],
  ratingColor: computed('rating.value', function() {
    if (this.get('rating.value') >= 8) {
      return 'green';
    }

    if (this.get('rating.value') <= 3) {
      return 'red';
    }
  })
});
