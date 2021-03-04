window.onload = function() {
    console.log('loaded');
    // const canvas = document.getElementById("input");
    // const context = canvas.getContext("2d");
    // const position = {x:null,y:null};
    // context.fillStyle = "black";
    // context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    // let isDrag = false;
    

    // function draw(x,y){
    //     if(!isDrag){
    //         return;
    //     }
    //     context.lineWidth = 15;
    //     context.lineCap = "round";
    //     context.lineJoin = "round";
    //     context.strokeStyle = "white";

    //     if(position.x ===null || position.y ===null){
    //         context.moveTo(x,y);
    //     }else{
    //         context.moveTo(position.x,position.y);
    //     }

    //     context.lineTo(x,y);
    //     context.stroke();
    //     position.x = x;
    //     position.y = y;
    // }

    // function reset(){
    //     context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    // }

    // function drag_start(){
    //     context.beginPath();
    //     isDrag = true;
    // }

    // function drag_end(){
    //     context.closePath();
    //     isDrag = false;
    //     position.x = null;
    //     position.y = null;

    // }

    // async function fnc(){

    //     const tmpContext = document.createElement("canvas").getContext("2d");
    //     tmpContext.drawImage(canvas,0,0,28,28);
    
    //     let imgData = tmpContext.getImageData(0,0,28,28);
    
    //     let data = imgData.data;
    
    //     DATA = []
    //     for (i=0;i<data.length;i+=4){
    //         DATA.push(data[i])
    //     }
    
    //     data_tf = tf.tensor(DATA).reshape([1,28,28,1]);
    //     // const model = await tf.loadLayersModel("../static/model2/model.json");
    //     const input = data_tf.div(tf.scalar(255));
    //     const prediction = await model.predict(input).data();

    //     let elm0 = document.getElementById("0");
    //     elm0.textContent = "0 : "+Math.round(prediction[0]*100)+"%";

    //     let elm1 = document.getElementById("1");
    //     elm1.textContent = "1 : "+Math.round(prediction[1]*100)+"%";

    //     let elm2 = document.getElementById("2");
    //     elm2.textContent = "2 : "+Math.round(prediction[2]*100)+"%";

    //     let elm3 = document.getElementById("3");
    //     elm3.textContent = "3 : "+Math.round(prediction[3]*100)+"%";

    //     let elm4 = document.getElementById("4");
    //     elm4.textContent = "4 : "+Math.round(prediction[4]*100)+"%";

    //     let elm5 = document.getElementById("5");
    //     elm5.textContent = "5 : "+Math.round(prediction[5]*100)+"%";

    //     let elm6 = document.getElementById("6");
    //     elm6.textContent = "6 : "+Math.round(prediction[6]*100)+"%";

    //     let elm7 = document.getElementById("7");
    //     elm7.textContent = "7 : "+Math.round(prediction[7]*100)+"%";

    //     let elm8 = document.getElementById("8");
    //     elm8.textContent = "8 : "+Math.round(prediction[8]*100)+"%";

    //     let elm9 = document.getElementById("9");
    //     elm9.textContent = "9 : "+Math.round(prediction[9]*100)+"%";

    //     let elmans = document.getElementById("ans");
    //     elmans.textContent = prediction.indexOf(prediction.reduce((a,b)=>Math.max(a,b)));
        
    //     l2 = model.layers[5].getWeights()[0].data();
 
    //     l5 = model.layers[4];
    //     console.log(l5);
    // }

    // const reset_botton = document.getElementById("reset");
    // reset_botton.addEventListener("click",reset);

    // canvas.addEventListener("mouseup",fnc);
    // canvas.addEventListener("mousedown",drag_start);
    // canvas.addEventListener("mouseup",drag_end);
    // canvas.addEventListener("mouseout",drag_end);
    // canvas.addEventListener("mousemove",(event)=>{

    //     draw(event.layerX,event.layerY);
    // })

};