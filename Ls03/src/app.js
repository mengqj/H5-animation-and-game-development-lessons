
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {

        this._super();
        var size = cc.winSize;

        var layer1=new cc.LayerColor(cc.color.RED,200,200);
        layer1.ignoreAnchor=false;
        layer1.x=size.width/2;
        layer1.y=size.height/2;
        this.addChild(layer1);

        var layer2=new cc.LayerColor(cc.color.GREEN,200,200);
        layer2.ignoreAnchor=false;
        layer2.x=size.width/6;
        layer2.y=size.height/2;
        this.addChild(layer2);
        layer1.setAnchorPoint(0,0);
        layer2.setAnchorPoint(0.5,0.5);

        layer1.setPosition(100,100);
        // layer2.setAnchorPoint(100,100);
        layer2.runAction(cc.rotateBy(100,10000).repeatForever());


        var node3=new cc.LayerColor(cc.color.BLUE,100,100);
        node3.ignoreAnchor=false;
        node3.setAnchorPoint(cc.p(1.0,1.0));
        node3.x=200;
        node3.y=200,
            this.addChild(node3);
        node3.runAction(cc.rotateBy(200,10000).repeatForever());
        var node2=new cc.LayerColor(cc.color.YELLOW,100,100);
        node2.ignoreAnchor=false;
        node2.setAnchorPoint(cc.p(0.5,0.5));
        node2.x=350;
        node2.y=350;
            node3.addChild(node2);
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

