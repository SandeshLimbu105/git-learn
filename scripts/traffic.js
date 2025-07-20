const redBtn = document.querySelector('.red');
const yellowBtn = document.querySelector('.yellow');
const greenBtn = document.querySelector('.green');
const pedestrianBtn=document.querySelector('.pedestrian');

function resetLight() {
    redBtn.style.opacity = 0.3;
    yellowBtn.style.opacity = 0.3;
    greenBtn.style.opacity = 0.3;
    pedestrianBtn.style.opacity=0.3;

}

redBtn.addEventListener('click', () => {
    resetLight();
    redBtn.style.opacity = 1;
});

yellowBtn.addEventListener('click', () => {
    resetLight();
    yellowBtn.style.opacity = 1;
});

greenBtn.addEventListener('click', () => {
    resetLight();
    greenBtn.style.opacity = 1;
});
let current=0;
function changeLight(){
         resetLight();
         if(current==0){
                  redBtn.style.opacity=1;
         }
         else if(current==1){
                  yellowBtn.style.opacity=1;
         }
         else if(current==2){
                  greenBtn.style.opacity=1;
         }
         else{
                  pedestrianBtn.style.opacity=1;
         }
         current=(current+1)%4;
}

resetLight(); 
changeLight();
setInterval(changeLight,2000);
