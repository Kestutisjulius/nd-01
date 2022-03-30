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

function sviesoforas(n) {
    switch (n) {
        case 1: return 'Eikite';
        break;
        case 2: return 'Palaukite';
        break;
        case 3: return 'Sustokite';
        break;
        default: return 'Sviesoforas neveikia';
    }
}
module.exports.antra = sviesoforas;

function knygos(d, k, n) {
    const viso = d*n;
    if(viso - k >= 0 ) {
        return 'Knygos telpa į dėžes.';
    } else {
        return 'Knygos netelpa į dėžes.';
    }
}
module.exports.trecia = knygos;

function plusMinus(a, b) {
    if (a !== b ) {
        if (a > b){
            -- a;
            ++ b;
            return `sumazejo pirmasis iki "${a}", padidejo antrasis iki "${b}"`;
        } else {
            ++ a;
            -- b;
            return `padidejo pirmasis iki "${a}", pamazejo antrasis iki "${b}"`;
        }
    } else {
        return 'iveskite bent viena kitoki skaiciu!' ;
    }
}
module.exports.ketvirta = plusMinus;

function ledu(c, p) {
    let k = 0; let m = 0;
    m = c%p;
    k = c/p;
    return ` Saulius nusipirks ${Math.floor(k)} vnt. ledu ir liks ${m} centu`;
}
module.exports.penkta = ledu;