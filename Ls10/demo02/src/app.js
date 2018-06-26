
var HelloWorldLayer = cc.Layer.extend({
    sprites:[],
    runner:[],
    ctor:function () {
        this._super();
        var size = cc.winSize;

        this.addChild(new cc.LayerColor(cc.color.GRAY));

        //创建精灵数组
        for(var i=0;i<3;i++){
            this.sprites[i] = new cc.Sprite("res/sprite"+(i+1)+".png");
            this.sprites[i].x = size.width*0.2;
            this.sprites[i].y = size.height*(0.3*i+0.2);
            this.addChild(this.sprites[i]);
        }

        var animation = new cc.Animation();
       //  for (var i = 1; i < 15; i++) {
       //      // var frameName = "res/Animation/grossini_dance_" + ((i < 10) ? ("0" + i) : i) + ".png";
       //      // var frameName = res["sp_animation_"+i];
       //      // animation.addSpriteFrameWithFile(frameName);
       //  }
       //
       for (var i = 1; i < 7; i++) {
           var frameName = "res/Animation3/pao_" + i + ".png";
           animation.addSpriteFrameWithFile(frameName);
        }

        animation.setDelayPerUnit(1 /15);
        animation.setRestoreOriginalFrame(true);
        var animateAction = cc.animate(animation);
        this.sprites[0].runAction(cc.repeatForever(animateAction));



        cc.spriteFrameCache.addSpriteFrames(res.sp_animation_plist);
        var spriteFrames = [];
        for (var i = 1; i < 15; i++) {
            var frameName = "grossini_dance_generic_" + ((i < 10) ? ("0" + i) : i) + ".png";
            var frame = cc.spriteFrameCache.getSpriteFrame(frameName);
            spriteFrames.push(frame);
        }
        var animation = new cc.Animation(spriteFrames, 0.2, 2);
        animation.setDelayPerUnit(1 / 5);
        animation.setRestoreOriginalFrame(false);
        var animateAction = cc.animate(animation);
        this.sprites[1].runAction(animateAction);
        this.sprites[1].runAction(animateAction.repeatForever());


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

