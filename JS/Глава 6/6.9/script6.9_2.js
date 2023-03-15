function debounce(f, ms) {
  let Cooldown = false;
  return function() {
    if (Cooldown) return;
    f.apply(this, arguments);
    Cooldown = true;
    setTimeout(() => Cooldown = false, ms);
  }
}
