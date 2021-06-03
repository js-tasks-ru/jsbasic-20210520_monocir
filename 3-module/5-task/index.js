function getMinMax(str) {

    let arrNumber = []
    arrNumber = str.split(/[\s|,!#]+/).map(item => parseFloat(item)).filter(Boolean)

    return {min: Math.min(...arrNumber), max: Math.max(...arrNumber)};

}
