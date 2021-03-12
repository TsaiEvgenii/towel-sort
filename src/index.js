module.exports = function towelSort(matrix) {
    if (typeof matrix === 'undefined') {
        return [];
    }

    let preparedMatrix = [];
    matrix.forEach((element, id) => {
        if ((id + 1) % 2 !== 0) {
            preparedMatrix.push(element);
        } else {
            preparedMatrix.push(element.reverse());
        }
    });

    return preparedMatrix.flat();
};
