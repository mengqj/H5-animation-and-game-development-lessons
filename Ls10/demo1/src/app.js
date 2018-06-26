
var HelloWorldLayer = cc.Layer.extend({
    sprite:[],
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        var size = cc.winSize;
        this.addChild(new cc.LayerColor(cc.color.GRAY));
       for(var i=0;i<3;i++){
           this.sprite[i]=new cc.Sprite("res/sprite"+(i+1)+".png");
           this.sprite[i].x=size.width*0.2;
           this.sprite[i].y=size.height*(0.3*i+0.2);
           this.addChild(this.sprite[i]);
       }


      /*  var action1=cc.moveBy(5,200,0);

       this.sprite[0].runAction(action1);

       this.sprite[1].runAction(cc.moveTo(10,400,400));

       this.sprite[2].runAction(cc.jumpBy(10,cc.p(300,0),50,4));*/

       /*
       var action1=new cc.Place(400,size.height*0.2);
       this.sprite[0].runAction(action1);

        this.sprite[1].runAction(cc.flipX(true));
        this.sprite[1].runAction(cc.flipY(true));

        this.sprite[2].runAction(cc.hide());
        this.sprite[2].runAction(cc.show());

        this.sprite[2].runAction(cc.callFunc(function(){
            this.sprite[2].runAction(cc.show());
            cc.log('调用');
        },this));*/


       /* this.sprite[0].runAction(cc.moveBy(2.0,100,0));
        // this.sprite [0].runAction(cc.moveBy(2.0,cc.p(100,0)));
        this.sprite[0].runAction(cc.moveTo(2.0,0,0));
        // this.sprite[0].runAction(cc.moveTo(2.0,cc.p(0,0)));

        this.sprite[1].runAction(cc.jumpBy(2.0,100,0,100,2));
        // this.sprite[1].runAction(cc.jumpBy(2.0,cc.p(100,0),100,2));
        this.sprite[1].runAction(cc.jumpTo(2.0,100,100,100,2));
        // this.sprite[1].runAction(cc.jumpTo(2.0,cc.p(100,100),100,2));

        this.sprite[2].runAction(cc.rotateBy(2.0,90,0));
        // this.sprite[2].runAction(cc.rotateBy(2.0,0,90));
        this.sprite[2].runAction(cc.rotateTo(2.0,90,0));
*/

/*
        // var node_1_MenuItem,node_2_MenuItem;
        // var isPaused = false;
        // node_1_MenuItem = new cc.MenuItemFont("Pause",function () {
        //     if(!isPaused){
        //         this.sprite[0].pause();
        //         isPaused=!isPaused;
        //         cc.log("pause sprites[0]");
        //     }else{
        //         this.sprite[0].resume();
        //         isPaused=!isPaused;
        //         cc.log("resume sprites[0]");
        //     }
        // },this);
        // node_2_MenuItem = new cc.MenuItemFont("Resume",function () {
        //     // this.sprite[1].stopAction();//需要传对应的action对象
        //     // this.sprite[1].stopActinByTag(tag);
        //     this.sprite[0].stopAllActions();
        // },this);
        //
        // var menu = new cc.Menu(node_1_MenuItem,node_2_MenuItem);
        // menu.y = size.height*0.5;
        // menu.alignItemsHorizontallyWithPadding(50);
        // this.addChild(menu);
        //
*/





     /*        // this.sprite[0].runAction(cc.scaleBy(2.0,0.5));
        this.sprite[0].runAction(cc.scaleBy(2.0,0.8,0.5));
        // this.sprite[0].runAction(cc.scaleTo(2.0,1.2,1.2));

        this.sprite[1].runAction(cc.fadeOut(2.0));
        this.sprite[2].setOpacity(0);
        this.sprite[2].runAction(cc.fadeIn(5.0));
*/


       /* this.sprite[0].runAction(cc.blink(20.0,10));
        //this.sprite[0].runAction(cc.speed(cc.blink(20.0,10),5));//5倍速


        var timer = new cc.ProgressTimer(this.sprite[1]);
        timer.x = this.sprite[1].x+100;
        timer.y = this.sprite[1].y;
        this.addChild(timer);
        //timer.type = cc.ProgressTimer.TYPE_RADIAL;
        timer.type = cc.ProgressTimer.TYPE_BAR;
        timer.midPoint = cc.p(0,0);//控制变化起始点
        timer.barChangeRate = cc.p(0, 1);//控制x和y方向的变化率
        // timer.runAction(cc.progressFromTo(5.0,0,90));
        timer.runAction(cc.progressTo(5.0,50));


        this.sprite[2].runAction(cc.tintTo(5.0,128,0,0));
        //this.sprites[2].runAction(cc.tintBy(5.0,128,128,128));

        //变速 speed 与 ease
        this.sprite[1].runAction(cc.speed(cc.moveBy(20,300,0),5));//5倍速

        var tempAct = cc.moveBy(5.0,200,0);
        var tempEaseAction = tempAct.easing(cc.easeElasticInOut());//cc.easeBackIn();
        this.sprite[2].runAction(tempEaseAction);
*/



        //组合动画
        var action1 = cc.moveBy(2.0,100,0);
        var action2 = cc.rotateBy(2.0,90);
        //1.顺序执行
        //this.sprite[0].runAction(cc.sequence(action1,action2));
        this.sprite[0].runAction(cc.sequence(action1,cc.callFunc(function(){
            cc.log("action1 执行完毕");
        },this)));
        //2.同步执行 注意不要用spawn和callFunc组合
        var action3 = cc.moveBy(2.0,200,0);
        var action4 = cc.rotateBy(2.0,-90);
        this.sprite[1].runAction(cc.spawn(action3,action4));
        //3.重复执行
        var action5 = cc.rotateBy(1.0,-90);
        //this.sprite[2].runAction(cc.repeat(action5,5));
        this.sprite[2].runAction(cc.repeatForever(action5));
        //4.延迟执行
        this.sprite[0].runAction(cc.sequence(cc.delayTime(5.0),cc.rotateBy(5.0,180),cc.callFunc(function(){
            cc.log("action1 执行完毕");
        },this)));
        //5.反向执行
        var action6 = cc.moveBy(2.0,200,0);
        var action7 = action6.reverse();
        this.sprite[2].runAction(cc.sequence(action6,action7));
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

