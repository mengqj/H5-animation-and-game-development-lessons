var StartSceneLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        // this.addChild(new cc.LayerColor(cc.color.YELLOW));
        var size = cc.winSize;
        //添加背景
        var  bg=new cc.Sprite(res.KaiShiBeiJing_jpg);
        bg.setPosition(size.width*0.5,size.height*0.5);
        this.addChild(bg);
        //添加logo
        var logo=new cc.Sprite(res.Logo);
        logo.x=size.width*0.5;
        logo.y=size.height*1.5;
        this.addChild(logo);
        var moveTo=cc.moveTo(0.5,logo.x,size.height*0.65).easing(cc.easeElasticOut(0.5));
        logo.runAction(moveTo);
       //添加菜单
        var startMenuItem=new cc.MenuItemImage(res.KaiShiAnNiu_png,res.KaiShiAnNiuB_png,function(){
            cc.director.runScene(new MainScene());
        },this);
        startMenuItem.x=size.width*0.5;
        startMenuItem.y=size.height*0.25;
        var menu=new cc.Menu(startMenuItem);
        menu.x=0;
        menu.y=0;
        this.addChild(menu);

        //
        startMenuItem.scale=0;
        var scalAction=cc.scaleTo(0.5,1.0).easing(cc.easeElasticOut(0.5));
        var seq=cc.sequence(cc.delayTime(0.5),scalAction);
        startMenuItem.runAction(seq);
        return true;
    }
});

var StartScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new StartSceneLayer();
        this.addChild(layer);
    }
});