function sumSalary(salaries) {
  let sum = 0;
    for (let key in salaries) {
        if ( ( isNaN(salaries[key]) == true ) || ( salaries[key] == Infinity ) || ( salaries[key] == -Infinity ) ) {continue}
        else { sum += salaries[key] }
    }
    return sum;
}
