export default function(el) {
  el.animate([
    { filter: 'brightness(100%)' },
    { filter: 'brightness(140%)' },
    { filter: 'brightness(100%)' }
  ], {
    duration: 300,
    iterations: 1
  });
}
