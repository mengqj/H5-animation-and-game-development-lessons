
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    getTiles:[],
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();


        var size = cc.winSize;

        var tileMap = new cc.TMXTiledMap(res.Map_test);
        this.addChild(tileMap);

        var mapSize = tileMap.getMapSize();//瓦片个数
        var tileSize = tileMap.getTileSize();//单个瓦片的像素值
        cc.log("mapSize:"+mapSize.width+"___"+mapSize.height);
        cc.log("tileSize:"+tileSize.width+"___"+tileSize.height);

        var tileMapProperties = tileMap.getProperties();
        for(var i in tileMapProperties){
            //cc.log(i +":"+ tileMapProperties[i]);
        }
        //cc.log("tileMap的type属性："+tileMap.getProperty("type"));

        var tile1Properties = tileMap.getPropertiesForGID(1);//GID与瓦片id差1，GID ＝ id＋1
        for(var i in tile1Properties){
            //cc.log("GID1的属性"+i +":"+ tile1Properties[i]);
        }

        var bgLayer = tileMap.getLayer("LayerBG");
        //cc.log("LayerSize:"+bgLayer.getLayerSize().width+"_"+bgLayer.getLayerSize().height);//瓦片的个数
        //cc.log("MapTileSize:"+bgLayer.getMapTileSize().width+"_"+bgLayer.getMapTileSize().height);//单个瓦片的像素数

        var tiles = bgLayer.getTiles();//Tile数组
        var tileAt = bgLayer.getTileAt(cc.p(1,1));//tileMap坐标系下得到对应的精灵
        tileAt.setColor(cc.color.BLUE);
        var tileGIDAt = bgLayer.getTileGIDAt(cc.p(6,5));//这里指的是TileMap坐标系
        //cc.log("tileGID = "+tileGIDAt);

        var positionAt = bgLayer.getPositionAt(1,1);//瓦片坐标系－》像素的坐标系转换，x轴一样，y轴反向并差一片，重要
        //cc.log("positionAt:"+positionAt.x+"_"+(positionAt.y+tileSize.width));

        //cc.log(bgLayer.getProperty("type"));
        //cc.log(bgLayer.getProperties().type);

        for(var i = 1;i<2;i++){
            for(var j = 1;j<2;j++){
                var sprite = bgLayer.getTileAt(cc.p(i,tileMap.getMapSize().height-j-1));
                sprite.setColor(cc.color.RED);
            }
        }

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

