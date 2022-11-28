// ### FUNCTIONS ###
/**
 * 
 * @param {*} array Nome dell'array
 * @returns numero casuale dalla lunghezza dell'array
 */
function randomElement(array){
    return Math.floor(Math.random() * array.length);
}

/**
 * 
 * @param {number} min 
 * @param {number} max 
 * @returns numero casuale tra il max e il min
 */
function randomBetween(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}



// ### CODE ###
genCanvas();

function genCanvas(){
    // Genero gli array vuoti per tipo.
    let trees = [];
    let colors = [];
    let skies = [];
    let floors = [];
    let ufos = [];
    let dragons = [];

    // Popolo gli array con l'url delle immagini
    for (var i=0; i<56; i++) {
        trees[i] = `data/FFF${i}.png`;
    }
    for (var i=0; i<30; i++) {
        colors[i] = `data/BBB${i}.png`;
    }
    for (var i=0; i<14; i++) {
        skies[i] = `data/SSS${i}.png`;
    }
    for (var i=0; i<5; i++) {
        floors[i] = `data/AAA${i}.png`;
    }
    for (var i=0; i<20; i++) {
        ufos[i] = `data/UUU${i}.png`;
    }
    for (var i=0; i<20; i++) {
        dragons[i] = `data/DDD${i}.png`;
    }

    // Genero casualmente gli elementi da stampare
    let color = { // colore casuale
        url: colors[randomElement(colors)],
        posX: 0,
        posY: 0,
    }
    let sky = { // cielo casuale
        url: skies[randomElement(skies)],
        posX: 0,
        posY: 0,
    }
    let floor = { // pavimento casuale
        url: floors[randomElement(floors)],
        posX: 0,
        posY: 0,
    }
    let ufo = { // ufo casuale
        url: ufos[randomElement(ufos)],
        posX: randomBetween(0, 1200),
        posY: randomBetween(0, 150),
        size: randomBetween(30, 300),
    }
    let dragon = { // drago casuale
        url: dragons[randomElement(dragons)],
        posX: randomBetween(0, 880),
        posY: randomBetween(0, 250),
        size: randomBetween(40, 120)
    }
    let chosenTrees = [] // alberi casuali

    for(let i=0; i<6; i++){
        // generazione randomica albero
        chosenTrees[i] = {
            url: trees[randomElement(trees)],
            posX: randomBetween(1, 1250),
            posY: randomBetween(1, 60),
            size: randomBetween(130, 250),
            index: 0
        }
        // Gestione livelli albero in base alla profondità
        let tcase = chosenTrees[i]['posY'];
        if (tcase <= 10){
            chosenTrees[i]['index'] = 6;
        } else if(tcase <= 20){
            chosenTrees[i]['index'] = 5;
        } else if(tcase <= 30){
            chosenTrees[i]['index'] = 4;
        } else if(tcase <= 40){
            chosenTrees[i]['index'] = 3;
        } else if(tcase <= 50){
            chosenTrees[i]['index'] = 2;
        } else if(tcase <= 60){
            chosenTrees[i]['index'] = 1;
        } else{
            chosenTrees[i]['index'] = 0;
        }
    }


    // ### STAMPA ###
    document.getElementById('canvas').innerHTML = `
    <!-- Randomized color -->
            <img id="color" src="${color['url']}" alt="randomized color">

    <!-- Randomized Sky -->
            <img id="sky" src="${sky['url']}" alt="randomized sky">

    <!-- Randomized Dragon -->
            <img id="dragon" src="${dragon['url']}" style="height: ${dragon['size']}px; top: ${dragon['posY']}px; left: ${dragon['posX']}px" alt="randomized dragon">

    <!-- Randomized Floor -->
            <img id="floor" src="${floor['url']}" alt="randomized floor">

    <!-- Randomized Ufo -->
            <img id="ufo" src="${ufo['url']}" style="height: ${ufo['size']}px; top: ${ufo['posY']}px; left: ${ufo['posX']}px" alt="randomized ufo">

    <!-- Randomized Trees -->
            <img id="tree-0" src="${chosenTrees[0]['url']}" style="height: ${chosenTrees[0]['size']}px; bottom: ${chosenTrees[0]['posY']}px; left: ${chosenTrees[0]['posX']}px; z-index: ${chosenTrees[0]['index']}" alt="randomized tree">
            <img id="tree-1" src="${chosenTrees[1]['url']}" style="height: ${chosenTrees[1]['size']}px; bottom: ${chosenTrees[1]['posY']}px; left: ${chosenTrees[1]['posX']}px; z-index: ${chosenTrees[1]['index']}" alt="randomized tree">
            <img id="tree-2" src="${chosenTrees[2]['url']}" style="height: ${chosenTrees[2]['size']}px; bottom: ${chosenTrees[2]['posY']}px; left: ${chosenTrees[2]['posX']}px; z-index: ${chosenTrees[2]['index']}" alt="randomized tree">
            <img id="tree-3" src="${chosenTrees[3]['url']}" style="height: ${chosenTrees[3]['size']}px; bottom: ${chosenTrees[3]['posY']}px; left: ${chosenTrees[3]['posX']}px; z-index: ${chosenTrees[3]['index']}" alt="randomized tree">
            <img id="tree-4" src="${chosenTrees[4]['url']}" style="height: ${chosenTrees[4]['size']}px; bottom: ${chosenTrees[4]['posY']}px; left: ${chosenTrees[4]['posX']}px; z-index: ${chosenTrees[4]['index']}" alt="randomized tree">
            <img id="tree-5" src="${chosenTrees[5]['url']}" style="height: ${chosenTrees[5]['size']}px; bottom: ${chosenTrees[5]['posY']}px; left: ${chosenTrees[5]['posX']}px; z-index: ${chosenTrees[5]['index']}" alt="randomized tree">
    `;
}