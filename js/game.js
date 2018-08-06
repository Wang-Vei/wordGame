class Game{
    constructor(screen,bgm,hp,point,start,death,text,replay,key){    //构造函数，自动运行
        this.letterBox=[];
        this.screen=screen
        this.point=point
        this.hp=hp
        this.start=start
        this.bgm=bgm
        this.sudu=0.1;
        this.pointNum=0;
        this.hpNum=5
        this.death=death;
        this.text=text;
        this.key=key;
        this.replay=replay;
        
    }



    init(){
        //初始、默认值
        this.bgm.className="Astart"
        this.hp.innerText=5
        this.point.innerText=0
        this.start.className="end"
    }


    createLetter(num){
        for(let i=0;i<num;i++){
            let obj={};
            let letter=""

            //字母不重复
            do{
                let asc=Math.floor(Math.random()*26+65);
                letter=String.fromCharCode(asc);
            }while(this.isHas(letter))
            

            //位置不重叠
            let left=""
            do{
                left=Math.random()*5.7+0.6;
            }while(this.isrepeat(left))
            
            obj.name=letter;
            let div=document.createElement("div");
            div.className="letter";
            div.style.backgroundImage=`url(img/A_Z/${letter}.png)`

            
           
            div.style.left=left+"rem";
            obj.left=left;
            
            obj.top=0.9;
            obj.node=div;
            this.screen.appendChild(div);
            this.letterBox.push(obj);
        }
        console.log(this.letterBox);
        
    }
    isHas(letter){
        for(let item of this.letterBox){
            if(letter==item.name){
                return true
            }
        }
        return false;
    }


    isrepeat(left){
        for(let item of this.letterBox){
            let bool=Math.abs(left-item.left);
            if(bool<0.53){
                return true
            }
        }
        return false;
    }
    run(){
        this.key.style.opacity=0.3;
        this.t=setInterval(()=>{    
                 
            this.letterBox.forEach((item,index)=>{
                item.top+=this.sudu;
                if(item.top>=6){
                    this.screen.removeChild(item.node);
                    this.letterBox.splice(index,1)
                    this.createLetter(1);
                    this.hpNum--;
                    this.addHp();
                }
                
                item.node.style.top=item.top+"rem";
                
            })
            
        },200)     
    }


    pause1(){
        clearInterval(this.t)
        this.key.style.opacity=1;
    }




    delKey(name){
        this.letterBox.forEach((item,index)=>{
            if(item.name==name){
                this.pointNum++;
                this.addpoint();
                this.screen.removeChild(item.node);
                this.letterBox.splice(index,1);
                this.createLetter(1);
            }
        })
    }

    addpoint(){
    this.point.innerText=this.pointNum;
    this.sudu=this.pointNum/1000+0.1;
    if(this.pointNum>=3){
        this.sudu=0.3;
    }
    else if(this.pointNum>=2){
        this.sudu=0.2;
    }
    else if(this.pointNum>=1){
        this.sudu=0.1;
        }
    }


    addHp(){
        this.hp.innerText=this.hpNum;
        if(this.hpNum==0){
            this.death.style.display="block";
            clearInterval(this.t);
            this.text.innerText=this.pointNum;
        }
    }

    replaybtn(){
        this.death.style.display="none";
        this.init();
        this.hpNum=5;
        this.createElement(5)
    }


}