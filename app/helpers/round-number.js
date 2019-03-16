import { helper } from '@ember/component/helper';

export function roundNumber([num = 0, digits = 2]/*, hash*/) {
  return num.toFixed(digits);
}

export default helper(roundNumber);
