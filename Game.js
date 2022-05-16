class Game {
  constructor() {
    this.resetTitle = createElement("h2");
    this.resetButton = createButton("");

    this.leadeboardTitle = createElement("h2");

    this.leader1 = createElement("h2");
    this.leader2 = createElement("h2");
  }

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    mangus=createSprite(width/2-200,height-200);
    mangus.addImage(mangusImg);

    frango=createSprite(width/2+200,height-200);
    frango.addImage(frangoImg);
    frango.scale= 0.9;

    gamers = [mangus, frango];
  }


  
  handleElements() {
    form.hide();

    //C39
    this.resetTitle.html("Reiniciar");
    this.resetTitle.class("resetText");
    this.resetTitle.position(width / 2 + 200, 40);

    this.resetButton.class("resetButton");
    this.resetButton.position(width / 2 + 230, 100);

    this.leadeboardTitle.html("Placar");
    this.leadeboardTitle.class("resetText");
    this.leadeboardTitle.position(width / 3 - 60, 40);

    this.leader1.class("leadersText");
    this.leader1.position(width / 3 - 50, 80);

    this.leader2.class("leadersText");
    this.leader2.position(width / 3 - 50, 130);
  }

  play() {
    this.handleElements();
    this.handleResetButton();

    Player.getPlayersInfo();

    if (allPlayers!==undefined){
      var index=0;
    for (var plyr in allPlayers){
      index=index+1;
      var x = allPlayers[plyr].positionX;
      var y = allPlayers[plyr].positionY;

      gamers[index - 1].position.x = x;
      gamers[index - 1].position.y = y;

      if(index==player.index){
        camera.position.x = gamers[index - 1].position.x;
        camera.position.y = gamers[index - 1].position.y;

        
      }
    }
     this.movimentacao();
    drawSprites();
    }
    
  }
  handleResetButton() {
    this.resetButton.mousePressed(() => {
      database.ref("/").set({
        playerCount: 0,
        gameState: 0,
        players: {}
      });
      window.location.reload();
    });
  }
  movimentacao() {
  
      //console.log(allPlayers);
      if (keyIsDown (UP_ARROW)){
        player.positionY -=10;
        player.update();
      }
      if (keyIsDown (LEFT_ARROW)){
        player.positionX-=10;
        player.update();
      }
      if (keyIsDown (DOWN_ARROW)){
        player.positionY+=10;
        player.update();
      }
      if (keyDown (RIGHT_ARROW)){
        player.positionX-=10;
        player.update();
      }
    
    

  }
}
