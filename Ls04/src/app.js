
var HelloWorldLayer = cc.Layer.extend({
    layer1:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        var layer1=new cc.LayerColor(cc.color.RED,100,100);
        layer1.ignoreAnchor=false;
        // layer1.setAnchorPoint(0.5,0.5);
        // layer1.y=size.height/2;
        layer1.x=size.width/2;
        layer1.y=400;

        // this.layer1=layer1;
        this.addChild(this.layer1);
        layer1.setLocalZOrder(3);

        //this.scheduleUpdate();
        this.schedule(this.myCallBack,0.2,cc.REPEAT_FOREVER,2);
        return true;
    },
    update:function(dt){
        // cc.log(dt);
        this.layer1.x+=1;
    },
    myCallBack:function(){
        this.layer1.x+=20;
        if(this.layer1.x>=400){
            this.unschedule(this.myCallBack);
        }
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

