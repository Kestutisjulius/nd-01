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

function degtukai(n) {
    if(n%3 === 0){
        return 'Trikampį sudėlioti galima.';
    }else {
        return 'Trikampį sudėlioti negalima.';
    }
}
module.exports.sesta = degtukai;

function daysInMonth(n) {
    if (n%2 === 1 && n <= 7 && n !== 2){
        return 31;
    }else if (n%2 === 0 && n >= 8) {
        return 31;
    } else if (n > 0 && n < 12 && n !== 2) {
        return 30;
    } else if (n === 2) {
        return 28;
    } else {
        return 'wrong month';
    }
}
module.exports.septinta = daysInMonth;

function kauliukas(n) {
    if(n <= 6 && n >= 1) {
        if (n % 2 === 1) {
            return 'Kambarį tvarkys jaunėlis.';
        } else {
            return 'Kambarį tvarkys vyresnėlis.';
        }
    } else {
        return 'nesukčiauk!';
    }
}
module.exports.astuntas = kauliukas;

function olimpiniai(m) {
    let metai = m;
    let count = 1;
    let metuSkirtumas = metai - 1896;
    if (metuSkirtumas % 4 === 0) {
        count += metuSkirtumas / 4;
        return `${count} - iosios Olimpines`;
    } else { return `Metai neolimpiniai iki olimpiniu liko ${4 - metuSkirtumas % 4} metai`;
        }
}
module.exports.devintas = olimpiniai;

function paveluos(v1, m1, v2) {
    const v = 9; const m = 5;
    let timeLeft = ((v - v1) * 60) + m - m1;
    if(timeLeft <= v2) {
        return 'Petras į pamoką nepavėluos.';
    } else {
       return `Petras į pamoką pavėluos ${v2 - timeLeft} min.`;
    }
}
module.exports.desimtas = paveluos;