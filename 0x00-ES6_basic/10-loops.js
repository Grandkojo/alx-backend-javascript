export default function appendToEachArrayValue(array, appendString) {
    let newarray = [];
    for (let idx of array) {
      newarray.push(appendString + idx);
    }
  
    return newarray;
  }