var cat, mouse, c1, c2, c3, c4, m1, m2, m3, m4, back, b1;


function preload() {
    //load the images here
    b1 = loadImage("garden.png");
    c1 = loadImage("cat1.png");
    c2 = loadImage("cat2.png");
    c3 = loadImage("cat3.png");
    c4 = loadImage("cat4.png");
    m1 = loadImage("mouse1.png");
    m2 = loadImage("mouse2.png");
    m3 = loadImage("mouse3.png");
    m4 = loadImage("mouse4.png");
}

function setup() {
    createCanvas(1000, 800);
    //create tom and jerry sprites here
    back = createSprite(width / 2, height / 2, 5, 5);
    back.addImage(b1);

    cat = createSprite(800, 600);
    cat.addImage(c1);
    cat.scale = 0.2;

    mouse = createSprite(150, 600)
    mouse.addImage(m1);
    mouse.scale = 0.2
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if (cat.x - mouse.x < mouse.width / 2 - cat.width / 2 + 150) {
        mouse.addImage("MT", m4);
        cat.addImage("CM", c4);
        cat.velocityX = 0;
    }

    drawSprites();
}


function keyPressed() {
    //For moving and changing animation write code here
    if (keyCode === LEFT_ARROW) {
        mouse.addAnimation("MT", m2, m3);
        mouse.changeAnimation("MT");
        cat.addAnimation("CM", c2, c3);
        cat.changeAnimation("CM");
        cat.velocityX = -4
    }

}
