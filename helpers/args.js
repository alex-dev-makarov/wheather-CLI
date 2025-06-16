const getArgs = (args) => {
  const res = {};
  const [, , ...rest] = args;
  rest.forEach((value, index, array) => {
    if (value.startsWith("-")) {
      const key = value.slice(1);
      const nextValue = array[index + 1];
      if (!nextValue || nextValue.startsWith("-")) {
        res[key] = true;
      } else {
        res[key] = nextValue;
      }
    }
  });
  return res;
};

export { getArgs };
