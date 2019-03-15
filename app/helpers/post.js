import { helper } from '@ember/component/helper';

export function post(/*, hash*/) {
  return JSON.stringify({
    workshop: 'Modern Ember with Octane',
    instructor: ['Erik', 'Ryan'],
  });
}

export default helper(post);
