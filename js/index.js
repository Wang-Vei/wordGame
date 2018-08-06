window.onload=function(){
    let keyCon=document.querySelector(".keyCon");
    let btn=document.querySelectorAll(".btn");
    let bgm=document.querySelector("#bgm");
    let start=document.querySelector(".start");
    let hp=document.querySelector(".hp");
    let point=document.querySelector(".point")
    let screen=document.querySelector(".screen");
    let death=document.querySelector(".death");
    let text=document.querySelector(".text")
    let replay=document.querySelector(".replay");
    let audio=document.querySelector("#audio");
    let key=document.querySelector(".key");
    console.log(replay);
    
    

   let  myflag=true;



    keyCon.ontouchstart=function(e){
        if(!myflag){
            return;
        }
            
        if(e.target.className=="btn"){
        e.target.style.transform="scale(.8)";
        gameobj.delKey(e.target.innerText);
        }
        
    }
    keyCon.ontouchend=function(e){
        if(e.target.className=="btn"){
        e.target.style.transform="scale(1)";

        }
    }

    bgm.ontouchstart=function(){
        if(bgm.className=="Astart"){
            bgm.className="Aend"
            audio.play();
        }
        else{
            bgm.className="Astart"
            audio.pause()
        }
    }
    
    start.ontouchstart=function(){
        if(start.className=="start"){
            gameobj.run()
            start.className="end"
            myflag=true;   
        }
        else{
            start.className="start"
            gameobj.pause1()
            myflag=false;
        }
    }
    replay.ontouchstart=function(){
        gameobj.replaybtn();
    }

    
   






    let gameobj=new Game(screen,bgm,hp,point,start,death,text,replay,key);

        gameobj.init();
        gameobj.createLetter(5)

        
    







}