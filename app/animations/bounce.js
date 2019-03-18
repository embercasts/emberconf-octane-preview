export default function(el) {
  el.animate([
    { transform: 'translateY(0)' },
    { transform: 'translateY(-100%)' },
    { transform: 'translateY(0)' }
  ], {
    duration: 300,
    iterations: 1
  });
}
