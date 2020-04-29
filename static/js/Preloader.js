
BunnyDefender.Preloader = function(game) {
	this.preloadBar = null;
	this.titleText = null;
	this.ready = false;
}

BunnyDefender.Preloader.prototype = {
	
	preload: function () {
		this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
		this.preloadBar.anchor.setTo(0.5, 0.5);
		this.load.setPreloadSprite(this.preloadBar);
		this.titleText = this.add.image(this.world.centerX, this.world.centerY-220, 'titleimage');
		this.titleText.anchor.setTo(0.5, 0.5);
		
		// Loading the Images and Fonts
		this.load.image('titlescreen', 'static/images/TitleBG.png')
		this.load.bitmapFont('eightbitwonder', 'static/fonts/eightbitwonder.png', 'static/fonts/eightbitwonder.fnt');
		this.load.image('hill', 'static/images/hill.png');
		this.load.image('sky', 'static/images/sky.png');
		this.load.atlasXML('bunny', 'static/images/spritesheets/bunny.png', 'static/images/spritesheets/bunny.xml');
		this.load.atlasXML('spacerock', 'static/images/spritesheets/SpaceRock.png', 'static/images/spritesheets/SpaceRock.xml');
	},

	create: function () {
		this.preloadBar.cropEnabled = false; //force show the whole thing
	},

	update: function () {
	   	this.ready = true;
		this.state.start('StartMenu');
	}
};
