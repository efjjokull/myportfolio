window.addEventListener("load",() =>{
    const canvas = document.getElementById("input");
    const context = canvas.getContext("2d");
    const position = {x:null,y:null};
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    let isDrag = false;
    

    function draw(x,y){
        if(!isDrag){
            return;
        }
        
        context.lineWidth = 15;
        context.lineCap = "round";
        context.lineJoin = "round";
        context.strokeStyle = "white";
        //context.strokeStyle = "black";
        //draw　black

        if(position.x ===null || position.y ===null){
            context.moveTo(x,y);
        }else{
            context.moveTo(position.x,position.y);
        }

        context.lineTo(x,y);
        context.stroke();
        position.x = x;
        position.y = y;
    }

    function reset(){
        //context.clearRect(0,0,canvas.clientWidth,canvas.clientHeight)
        //white ver
        context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    }

    function drag_start(){
        context.beginPath();
        isDrag = true;
    }

    function drag_end(){
        context.closePath();
        isDrag = false;
        position.x = null;
        position.y = null;

    }

    async function fnc(){

        const tmpContext = document.createElement("canvas").getContext("2d");
        tmpContext.drawImage(canvas,0,0,28,28);
    
        let imgData = tmpContext.getImageData(0,0,28,28);
    
        let data = imgData.data;
    
        DATA = []
        for (i=0;i<data.length;i+=4){
            DATA.push(data[i])
        }
    
        data_tf = tf.tensor(DATA).reshape([1,28,28,1]);
        const model = await tf.loadLayersModel("model2/model.json");
        const input = data_tf.div(tf.scalar(255));
        const prediction = await model.predict(input).data();

        let elm0 = document.getElementById("0");
        elm0.textContent = "0 : "+Math.round(prediction[0]*100)+"%";

        let elm1 = document.getElementById("1");
        elm1.textContent = "1 : "+Math.round(prediction[1]*100)+"%";

        let elm2 = document.getElementById("2");
        elm2.textContent = "2 : "+Math.round(prediction[2]*100)+"%";

        let elm3 = document.getElementById("3");
        elm3.textContent = "3 : "+Math.round(prediction[3]*100)+"%";

        let elm4 = document.getElementById("4");
        elm4.textContent = "4 : "+Math.round(prediction[4]*100)+"%";

        let elm5 = document.getElementById("5");
        elm5.textContent = "5 : "+Math.round(prediction[5]*100)+"%";

        let elm6 = document.getElementById("6");
        elm6.textContent = "6 : "+Math.round(prediction[6]*100)+"%";

        let elm7 = document.getElementById("7");
        elm7.textContent = "7 : "+Math.round(prediction[7]*100)+"%";

        let elm8 = document.getElementById("8");
        elm8.textContent = "8 : "+Math.round(prediction[8]*100)+"%";

        let elm9 = document.getElementById("9");
        elm9.textContent = "9 : "+Math.round(prediction[9]*100)+"%";

        let elmans = document.getElementById("ans");
        elmans.textContent = prediction.indexOf(prediction.reduce((a,b)=>Math.max(a,b)));
/*
        alert("0 : "+Math.round(prediction[0]*100)+"%\n"+
        "1 : "+Math.round(prediction[1]*100)+"%\n"+
        "2 : "+Math.round(prediction[2]*100)+"%\n"+
        "3 : "+Math.round(prediction[3]*100)+"%\n"+
        "4 : "+Math.round(prediction[4]*100)+"%\n"+
        "5 : "+Math.round(prediction[5]*100)+"%\n"+
        "6 : "+Math.round(prediction[6]*100)+"%\n"+
        "7 : "+Math.round(prediction[7]*100)+"%\n"+
        "8 : "+Math.round(prediction[8]*100)+"%\n"+
        "9 : "+Math.round(prediction[9]*100)+"%");

        console.log("0 : "+Math.round(prediction[0]*100)+"%\n"+
        "1 : "+Math.round(prediction[1]*100)+"%\n"+
        "2 : "+Math.round(prediction[2]*100)+"%\n"+
        "3 : "+Math.round(prediction[3]*100)+"%\n"+
        "4 : "+Math.round(prediction[4]*100)+"%\n"+
        "5 : "+Math.round(prediction[5]*100)+"%\n"+
        "6 : "+Math.round(prediction[6]*100)+"%\n"+
        "7 : "+Math.round(prediction[7]*100)+"%\n"+
        "8 : "+Math.round(prediction[8]*100)+"%\n"+
        "9 : "+Math.round(prediction[9]*100)+"%");
    */

        
        l2 = model.layers[5].getWeights()[0].data();


        l5 = model.layers[4];
        console.log(l5);
    }

/*
    function get_img(){

        const tmpContext = document.createElement("canvas").getContext("2d");
        tmpContext.drawImage(canvas,0,0,28,28);

        let imgData = tmpContext.getImageData(0,0,28,28);

        let data = imgData.data;

//        for (let i=0;i<data.length;i+=4){
//           let avg = (data[i]+data[i+1]+data[i+2])/3
//
//            data[i] = avg;
//            data[i+1] = avg;
//           data[i+2] = avg;
//      }
// code : gray scale

        DATA = []
        for (i=0;i<data.length;i+=4){
            data[i] /=255
            DATA.push(data[i])
        }

        console.log(DATA.slice(0,28*1-1)+"\n"+DATA.slice(28*1,28*2-1)+"\n"+DATA.slice(28*2,28*3-1)
        +"\n"+DATA.slice(28*3,28*4-1)+"\n"+DATA.slice(28*4,28*5-1)+"\n"+DATA.slice(28*5,28*6-1)
        +"\n"+DATA.slice(28*6,28*7-1)+"\n"+DATA.slice(28*7,28*8-1)+"\n"+DATA.slice(28*8,28*9-1)
        +"\n"+DATA.slice(28*9,28*10-1)+"\n"+DATA.slice(28*10,28*11-1)+"\n"+DATA.slice(28*11,28*12-1)
        +"\n"+DATA.slice(28*12,28*13-1)+"\n"+DATA.slice(28*13,28*14-1)+"\n"+DATA.slice(28*14,28*15-1)
        +"\n"+DATA.slice(28*15,28*16-1)+"\n"+DATA.slice(28*16,28*17-1)+"\n"+DATA.slice(28*17,28*18-1)
        +"\n"+DATA.slice(28*18,28*19-1)+"\n"+DATA.slice(28*19,28*20-1)+"\n"+DATA.slice(28*20,28*21-1)
        +"\n"+DATA.slice(28*21,28*22-1)+"\n"+DATA.slice(28*22,28*23-1)+"\n"+DATA.slice(28*24,28*24-1)
        +"\n"+DATA.slice(28*24,28*25-1)+"\n"+DATA.slice(28*25,28*26-1)+"\n"+DATA.slice(28*26,28*27-1)
        +"\n"+DATA.slice(28*27,28*28-1)
        );

        data_tf = tf.tensor(DATA).reshape([1,28,28,1]);

        return data_tf
    }
*/
    const reset_botton = document.getElementById("reset");
    reset_botton.addEventListener("click",reset);

    //const submitBotton = document.getElementById("submit");
    //submitBotton.addEventListener("click",fnc);

    canvas.addEventListener("mouseup",fnc);
    canvas.addEventListener("mousedown",drag_start);
    canvas.addEventListener("mouseup",drag_end);
    canvas.addEventListener("mouseout",drag_end);
    canvas.addEventListener("mousemove",(event)=>{

        draw(event.layerX,event.layerY);
    })

})



