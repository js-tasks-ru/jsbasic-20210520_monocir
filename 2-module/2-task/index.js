function isEmpty(obj) {
  let sum = 0;
    for (let key in obj) {
        sum += obj.key;
    }
    if (sum === 0) {
        return true
    }
    return false
}