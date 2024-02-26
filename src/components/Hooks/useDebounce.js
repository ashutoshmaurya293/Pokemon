const useDebounce = (cd, delay = 1000) => {
  let timerId;
  return (...argu) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      cd(...argu);
    }, delay);
  };
};

export default useDebounce;
