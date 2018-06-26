var StartSceneLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        var startLabel=new cc.LabelTTF('开 始','',50);
        startLabel.setFontFillColor(cc.color.RED);
        startLabel.enableStroke(cc.color.WHITE,5);



        var startMenuItem=new cc.MenuItemLabel(startLabel,function(){
             cc.log('跳到游戏场景');
            cc.director.runScene(new MainScene());
        },this);

        var menu=new cc.Menu(startMenuItem);
        menu.y=size.height*0.3;
        this.addChild(menu);

        var size = cc.winSize;
        var logo=new cc.LabelTTF('飞机游戏DEMO','',80);
        logo.setFontFillColor(cc.color.YELLOW);
        logo.enableStroke(cc.color.RED,5);
        logo.setPosition(size.width/2,size.height*0.7);
        this.addChild(logo);
        return true;
    }
});

var StartScene = cc.Scene.extend({
    ctor:function () {
        this._super();
        var layer = new StartSceneLayer();
        this.addChild(layer);
    }
});
