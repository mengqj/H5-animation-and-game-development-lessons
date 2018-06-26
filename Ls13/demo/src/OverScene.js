var  OverSceneLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();

        var size = cc.winSize;
        // this.addChild(new cc.LayerColor(cc.color.BLUE));
        var  bg=new cc.Sprite(res.JieShuBeiJing_jpg);
        bg.setPosition(size.width*0.5,size.height*0.5);
        this.addChild(bg);

        var logo=new cc.Sprite(res.JieShuKuang);
        logo.x=size.width/2;
        logo.y=size.height/2;
        this.addChild(logo);

        var zailaiMenuItem=new cc.MenuItemImage(res.ZaiLaiAnNiu_png,res.ZaiLaiAnNiuB_png,function(){
            cc.director.runScene(new MainScene());
        },this);
        zailaiMenuItem.x=size.width*0.2;
        zailaiMenuItem.y=size.height*0.08;


        var zhuyeMenuItem=new cc.MenuItemImage(res.XuanYaoAnNiu_png,res.XuanYaoAnNiuB_png,function(){
            cc.director.runScene(new StartScene());
        },this);
        zhuyeMenuItem.x=size.width*0.65;
        zhuyeMenuItem.y=size.height*0.08;

        var menu=new cc.Menu(zailaiMenuItem,zhuyeMenuItem);
        menu.x=0;
        menu.y=0;
        logo.addChild(menu);

        var scoreLabel=new cc.LabelTTF("","",size.width/12);
        scoreLabel.x=size.width*0.46;
        scoreLabel.y=size.width*1.02;
        scoreLabel.setFontFillColor(cc.color.YELLOW);
        logo.addChild(scoreLabel);

        var score=cc.sys.localStorage.getItem("currentScore");
        scoreLabel.setString(score);
        scoreLabel.scale=0;
        var scaleAction=cc.scaleTo(0.5,1.0).easing((cc.easeElasticOut(0.5)));
        var seq=cc.sequence(cc.delayTime(0.2),scaleAction);
        scoreLabel.runAction(seq);
        return true;
    }
});

var OverScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new OverSceneLayer();
        this.addChild(layer);
    }
});