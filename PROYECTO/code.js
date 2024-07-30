

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["8a13a3e5-48f9-4edd-a0a0-20ddd480066f","d1ec9943-ac82-4395-9da7-caaedfe7a1d9","1c23ab8a-d49e-47ce-8b46-9ff693c83e7a","e85c1086-961d-482f-8690-aeb5b8d411eb","36b34de8-7416-4658-901b-9ae49c2cdb5c"],"propsByKey":{"8a13a3e5-48f9-4edd-a0a0-20ddd480066f":{"name":"rata","sourceUrl":null,"frameSize":{"x":50,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"p4bH.umKs1q7OGSFV7jIZg8LlM.gUtcU","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":50},"rootRelativePath":"assets/8a13a3e5-48f9-4edd-a0a0-20ddd480066f.png"},"d1ec9943-ac82-4395-9da7-caaedfe7a1d9":{"name":"rata_der","sourceUrl":null,"frameSize":{"x":50,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"lAK4nU58Tn42STykvUjK_k3Y_7XaLe9z","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":50},"rootRelativePath":"assets/d1ec9943-ac82-4395-9da7-caaedfe7a1d9.png"},"1c23ab8a-d49e-47ce-8b46-9ff693c83e7a":{"name":"rata_izq","sourceUrl":null,"frameSize":{"x":50,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"yRhZyJzBgM4H05xggPRlMzDxyNsJX5BY","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":50},"rootRelativePath":"assets/1c23ab8a-d49e-47ce-8b46-9ff693c83e7a.png"},"e85c1086-961d-482f-8690-aeb5b8d411eb":{"name":"rata_down","sourceUrl":null,"frameSize":{"x":50,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"OKXy1lk3x2TBzMViFItkGCCxLJW94tqG","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":50},"rootRelativePath":"assets/e85c1086-961d-482f-8690-aeb5b8d411eb.png"},"36b34de8-7416-4658-901b-9ae49c2cdb5c":{"name":"cheese_1","sourceUrl":null,"frameSize":{"x":30,"y":28},"frameCount":1,"looping":true,"frameDelay":12,"version":"R23Txqzz_p9bxsAdngqzuOdTCVE.i0ft","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":28},"rootRelativePath":"assets/36b34de8-7416-4658-901b-9ae49c2cdb5c.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var rata=createSprite(25,375,50,50);
rata.setAnimation("rata");

var laser1=createSprite(100,200,200,10);
laser1.shapeColor="red";

var laser2=createSprite(300,200,200,10);
laser2.shapeColor="green";

var queso=createSprite(375,25,30,30);
queso.setAnimation("cheese_1");

laser1.velocityY = 2;
laser1.velocityX = -5;
  
laser2.velocityY = -3;
laser2.velocityX = 4;
rata.setAnimation("rata");
  
rata.setVelocity(0,0);

function draw() {
  background("black");


  if (keyWentDown("up")){
    rata.velocityY = -10;
    rata.velocityX = 0;
    
    rata.setAnimation("rata");
  }
  if (keyWentDown("down")){
    rata.velocityY = 10;
    rata.velocityX = 0;
    rata.setAnimation("rata_down");
  }
  if (keyWentDown("right")){
    rata.velocityY = 0;
    rata.velocityX = 10;
    rata.setAnimation("rata_der");
  }
  if (keyWentDown("left")){
    rata.velocityY = 0;
    rata.velocityX = -10;
    rata.setAnimation("rata_izq");
  }
  
  createEdgeSprites();
  laser1.bounceOff(edges);
  laser2.bounceOff(queso);
  laser2.bounceOff(edges);
  
  rata.bounceOff(edges);
  
  if (laser1.isTouching(rata) || laser2.isTouching(rata)){
    
    rata.velocityY=0;
    rata.velocityX=0;
    laser1.setVelocity(0, 0);
    laser2.setVelocity(0, 0);
    
    fill("white");
    textSize(30);
    textAlign(CENTER,CENTER);
    text("LADRON CAPTURADO",200,200);
    
  }

  if (rata.isTouching(queso)){
    rata.velocityY=0;
    rata.velocityX=0;
    laser1.setVelocity(0, 0);
    laser2.setVelocity(0, 0);
    
    fill("yellow");
    textSize(45);
    textAlign(CENTER,CENTER);
    text("QUESO ROBADO",200,200);
    
  }  
  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
