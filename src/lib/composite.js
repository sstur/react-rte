// @flow

function composite<T, U>(
  defaultFunc: (input: T) => U,
  customFunc?: (input: T) => ?U,
): (input: T) => U {
  return (input: T) => {
    if (customFunc) {
      let result = customFunc(input);
      if (result != null) {
        return result;
      }
    }
    return defaultFunc(input);
  };
}

export default composite;
