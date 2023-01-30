function debounce_all(func, timeout = 300){
  let timer;

  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => { 
      func.apply(this, args); 
    }, timeout);
  };
}

function debounce_first(func, timeout = 300){
  let timer;

  return (...args) => {
    if (!timer) {
      func.apply(this, args);
    }

    clearTimeout(timer);

    timer = setTimeout(() => {
      timer = undefined;
    }, timeout);
  };
}

export {debounce_all, debounce_first};