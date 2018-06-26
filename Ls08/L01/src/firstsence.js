var firstLayer = cc.Layer.extend({

    ctor:function(){
        this._super();
        var size=cc.winSize;

        var bg=new cc.Sprite(res.bg1_jpg);
        bg.x=cc.winSize.width/2;
        bg.y=cc.winSize.height/2;
        this.addChild(bg);


        var p1=new cc.Sprite(res.p1_png);
        p1.x=cc.winSize.width/3;
        p1.y=cc.winSize.height/3;
        this.addChild(p1);





        return true;
    }

});

var firstsence = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new firstLayer();
        this.addChild(layer);
    }
});

