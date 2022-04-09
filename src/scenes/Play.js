class Play extends Phaser.Scene 
{

    constructor(){
        super("playScene");//used to identify the scene (called insisde Phaser.scene)
    }
    preload()
    {
        //preload sprites for scene
        this.load.image('rocket', './assets/rocket.png'); // (identifier, sprite path)
        
        this.load.image('spaceship', './assets/spaceship.png');
        this.load.image('starfield', './assets/starfield.png');
    }
    create()
    {



        
        this.starfield = this.add.tileSprite(0,0,640,480, 'starfield').setOrigin(0,0); //tilesprite has innate scrolling
        // green UI background
        this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0x00FF00).setOrigin(0, 0);
        // white borders
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);

        // add rocket (p1)

        
        
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        this.p1Rocket = new Rocket(this, game.config.width/2, 
            game.config.height - borderUISize - borderPadding, 'rocket').setOrigin(0.5, 0);
        //set the global key values, (why dont we do this in main?)

    }
    update()
    {
        this.starfield.tilePositionX -= 4;
        this.p1Rocket.update();
    }
}