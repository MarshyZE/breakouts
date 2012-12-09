ig.module( 'game.levels.level' )
.requires( 'impact.image','game.entities.paddle' )
.defines(function(){
LevelLevel=/*JSON[*/{"entities":[{"type":"EntityPaddle","x":48,"y":432}],"layer":[{"name":"bg","width":20,"height":30,"linkWithCollision":false,"visible":1,"tilesetName":"media/tiles16.png","repeat":false,"preRender":true,"distance":"1","tilesize":16,"foreground":false,"data":[[60,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,84,48],[72,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,72],[72,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,72],[72,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,72],[72,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,72],[72,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,72],[72,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,72],[72,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,72],[72,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,72],[72,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,72],[72,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,72],[72,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,72],[72,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,72],[72,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,72],[72,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,72],[72,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,72],[72,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,72],[72,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,72],[72,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,72],[72,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,72],[72,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,72],[72,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,72],[72,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,72],[72,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,72],[72,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,72],[72,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,72],[96,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,96],[24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24],[108,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,108],[96,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,96]]},{"name":"collision","width":20,"height":30,"linkWithCollision":false,"visible":0,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":16,"foreground":false,"data":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]]}]}/*]JSON*/;
LevelLevelResources=[new ig.Image('media/tiles16.png')];
});