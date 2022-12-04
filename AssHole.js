let randomMasiv = [];
for (var i = 0; i < 15; i++) {
    randomMasiv[i] = 439 + randomInteger(584);
}

function nameriNaiMaluk(masiv) {
    console.log(masiv);
    let nimKan = masiv[0];
    for (var i = 0; i < masiv.length; i++) {
        if (masiv[i] < nimKan) {
            nimKan = masiv[i];
        }
    }
    return nimKan;
}

function nameriNaiGolqm(masiv) {
    let nimKan = masiv[0];
    for (var i = 0; i < masiv.length; i++) {
        if (masiv[i] > nimKan) {
            nimKan = masiv[i];
        }
    }
    return nimKan;
}

function average(arr) {
    const average = arr.reduce((a, b) => a + b, 0) / arr.length;
    console.log(average);
}


function init() {
    console.log(nameriNaiMaluk([78, 50, 68])) 
    console.log(nameriNaiGolqm([78, 50, 68]))
    console.log(nameriNaiMaluk([-80, 1090, 798, 112.66]))
    console.log(nameriNaiMaluk([0, 6 ^ 2, 8 / -4, 2 * 0.001 - 55 / (5 + 3 ^ 6) ]))
    console.log();
    console.log();
    console.log(average([2,9,0,8,1]));
    console.log(average([5,6,4]));
}

function update() {

}


function draw() {

}