function isPlusMinus(n) {
    if (n !== 0) {
            if (n>0) {
                return 'Geras';
            } else {
                return 'Blogas';
            }
    } else {
        return 'Nulis';
    }
}
module.exports.pirma = isPlusMinus;