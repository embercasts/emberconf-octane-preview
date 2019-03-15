import { helper } from '@ember/component/helper';

export function formatNumber([num = 0]/*, hash*/) {
  return num.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

export default helper(formatNumber);
