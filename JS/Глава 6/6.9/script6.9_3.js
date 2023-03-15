function throttle(func, ms) {
  let Throttled = false,
    savedArgs,
    savedThis;
  function wrapper() {
    if (Throttled) { 
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments);
    Throttled = true;
    setTimeout(function() {
      Throttled = false; 
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }
  return wrapper;
}
