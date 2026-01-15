function makeArray(firstArray, secondArray, maxLength) {
  const result = firstArray.concat(secondArray);
  if (result.length > maxLength) {
    return result.slice(0, maxLength);
  } else {
    return result;
  }
}


