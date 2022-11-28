let alberi = [];
let color = [];
let cielo = [];
let pavimento = [];
let ufo = [];
let dragon = [];

for (var i=0; i<56; i++) {
  // alberi[i] = loadImage( "data/FFF" + i + ".png");
  alberi[i] = `data/FFF${i}.png`;
}

for (var i=0; i<30; i++) {
  // color[i] = loadImage( "data/BBB" + i + ".png");
  color[i] = `data/BBB${i}.png`;
}

for (var i=0; i<14; i++) {
  // cielo[i] = loadImage( "data/SSS" + i + ".png");
  cielo[i] = `data/SSS${i}.png`;
}

for (var i=0; i<5; i++) {
  // pavimento[i] = loadImage( "data/AAA" + i + ".png");
  pavimento[i] = `data/AAA${i}.png`;
}

for (var i=0; i<20; i++) {
  // ufo[i] = loadImage( "data/UUU" + i + ".png");
  ufo[i] = `data/UUU${i}.png`;
}

for (var i=0; i<20; i++) {
  // dragon[i] = loadImage( "data/DDD" + i + ".png");
  dragon[i] = `data/DDD${i}.png`;
}

function setup() {
    createCanvas(1500, 500);

    let r1 = Math.floor(random(color.length));
    image(color[r1], 0,0, 1500, 500);

    let r2 = Math.floor(random(cielo.length));
    image(cielo[r2], 0,0, 1500, 500);

    let r3 = Math.floor(random(pavimento.length));
    image(pavimento[r3], 0,0, 1500, 500);

    let u = Math.floor(random(ufo.length));
    
    var gradezzaUfo = random(120, 140);
        
    image(ufo[u], random(150, 1350), random(0, 140), gradezzaUfo, gradezzaUfo);

    let d = Math.floor(random(dragon.length));

    image(dragon[d], random(150,950),random(170, 220), 350, 145.775);

    // let a0 = Math.floor(random(alberi.length));
    // let a1 = Math.floor(random(alberi.length));
    // let a2 = Math.floor(random(alberi.length));
    // let a3 = Math.floor(random(alberi.length));
    // let a4 = Math.floor(random(alberi.length));
    // let a5 = Math.floor(random(alberi.length));
    let treePos5 = [];
    for(let i=0; i<=5; i++){
      treePos5[i] = Math.floor(Math.random() * (alberi.length + 1));
    }
    
    var grandezza = random(130, 175);
    var grandezzaUno = random(130, 175);
    var grandezzaDue = random(130, 175);
    var grandezzaTre = random(130, 170);
    var grandezzaQuattro = random(130, 170);
    var grandezzaCinque = random(130, 175);
    
    image(treePos5[0], random(-40,140), random (225,320), grandezza, grandezza);
    image(treePos5[1], random(220,418), random (275,320), grandezzaUno, grandezzaUno);
    image(treePos5[2], random(515,650), random (245,320), grandezzaDue, grandezzaDue);
    image(treePos5[3], random(770,910), random (245,330), grandezzaTre, grandezzaTre);
    image(treePos5[4], random(1040,1100), random (245,330), grandezzaQuattro, grandezzaQuattro);
    image(treePos5[5], random(1280,1390), random (225,320), grandezzaCinque, grandezzaCinque);
}