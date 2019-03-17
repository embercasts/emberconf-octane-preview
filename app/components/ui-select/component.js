import Component from '@ember/component';

export default Component.extend({
  tagName: 'select',
  classNames: 'author-select',
  change(ev) {
    this.get('onchange')(ev.target.value);
  }
});
