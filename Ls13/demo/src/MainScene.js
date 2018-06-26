var  MainSceneLayer = cc.Layer.extend({
    sprite:null,
    timelabel:0,
    timeCount:10,
    hand:null,
    hbArr:[],
    score:0,
    ctor:function () {
        this._super();
      //添加背景
        var size = cc.winSize;
        this.addBg(size);
     //
     this.addCountDown(size);
     this.schedule(this.countDownFun,1);
     this.addHand(size);
     this.addTouchListener();
     this.addHongBao(size);
     this.scheduleUpdate();
        return true;
    },
    addBg:function(size){
        var bg=new cc.Sprite(res.Bg_jpg);
        bg.setPosition(size.width*0.5,size.height*0.5);
        this.addChild(bg);
    },
    addCountDown:function(size){
        var countdown=new cc.Sprite(res.CountDown_png);
        countdown.setPosition(size.width*0.7,size.height-countdown.getBoundingBox().height);
        this.addChild(countdown);

        this.timelabel=new cc.LabelTTF("","",size.width*0.1);
        this.timelabel.setPosition(countdown.x+countdown.getBoundingBox().width*0.8,countdown.y);
        this.timelabel.setString(10);
        this.timelabel.setColor(cc.color(200,100,100));
        this.addChild(this.timelabel);
    },
    countDownFun:function(){
        if(this.timeCount<1){
            cc.director.runScene(new StartScene());
            cc.sys.localStorage.setItem("currentScore",this.score);
            cc.director.runScene(new OverScene);
        }
        else{
            this.timeCount-=1;
            this.timelabel.setString(this.timeCount)
        }
    },
    addHand:function(size){
        this.hand=new cc.Sprite(res.Hand_1_png);
        this.hand.setPosition(size.width*0.5,this.hand.getBoundingBox().height*0.5);
        this.addChild(this.hand);

        var animation=new cc.Animation();
        for(var i=1;i<=2;i++){
            var frameName=res["Hand_"+i+"_png"];
            animation.addSpriteFrameWithFile(frameName);
        }
        animation.setDelayPerUnit(0.2);
        animation.setRestoreOriginalFrame(true);
        var animate=cc.animate(animation);
        this.hand.runAction(animate.repeatForever());
    },
    addTouchListener:function(){
      var self=this;
      cc.eventManager.addListener({
          event: cc.EventListener.TOUCH_ONE_BY_ONE,
          swallowTouches:true,
          onTouchBegan:function(touch,event){
             return true;

          },
          onTouchMoved:function(touch,event){
              var delta=touch.getDelta();
              self.hand.setPosition(self.hand.x+delta.x);
          }
      },this);
    },
    addHongBao:function(size){
        for(var i=0;i<100;i++){
            var hb=new cc.Sprite(res.Hongbao_png);
            hb.setPosition(Math.random()*size.width,size.height*(cc.random0To1()*i));
            hb.runAction(cc.repeatForever(cc.rotateBy(cc.random0To1()*5,360)));
            this.addChild(hb);
            this.hbArr.push(hb);
        }
    },
    update:function(){
        for(var k in this.hbArr){
            this.hbArr[k].y-=10;
        }
        for(var i=0;i<this.hbArr.length;i++){
            if(cc.rectContainsPoint(this.hbArr[i].getBoundingBox(),this.hand.getPosition()))
            {
                this.hbArr[i].removeFromParent();
                // this.addScoreAnimation(this.hbArr[i].getPosition());
                this.hbArr.splice(i,1);
                this.score++;
            }
        }
    }
});
var MainScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MainSceneLayer();
        this.addChild(layer);
    }
});