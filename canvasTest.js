window.onload = function(){
    draw();
}

// function draw(){
//     let canvas = document.getElementById('testCanvas');

//     if(canvas.getContext){
//         let ctx = canvas.getContext('2d');

//         for( i=0; i<4; i++){
//             for(j=0; j<3; j++){

//                 ctx.beginPath();

//                 let x = 25 + j * 50;
//                 let y = 25 + i * 50;

//                 let radius = 20;
//                 let startAngle = 0;
//                 let endAngle = Math.PI + (Math.PI*j)/2;


//                 let anticlockWise = i%2 === 0 ? false : true;

//                 ctx.arc( x, y, radius, startAngle, endAngle, anticlockWise);

//                 if(i>1){
//                     ctx.fill();
//                 }else{
//                     ctx.stroke();
//                 }
//             }
//         }

//     }else{
//         console.log('캔버스없음')
//     }

// }


// function draw(){
//     let canvas = document.getElementById('testCanvas');

//     if(canvas.getContext){
//         let ctx = canvas.getContext('2d');


//         ctx.beginPath();

//         ctx.moveTo(75, 25);

//         ctx.moveTo(75, 40);
//         ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
//         ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
//         ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
//         ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
//         ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
//         ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);

//         ctx.fill();

//     }
// }

// function draw() {
//     var canvas = document.getElementById('testCanvas');
//     if (canvas.getContext) {
//       var ctx = canvas.getContext('2d');
  
//       roundedRect(ctx, 12, 12, 150, 150, 15);
//       roundedRect(ctx, 19, 19, 150, 150, 9);
//       roundedRect(ctx, 53, 53, 49, 33, 10);
//       roundedRect(ctx, 53, 119, 49, 16, 6);
//       roundedRect(ctx, 135, 53, 49, 33, 10);
//       roundedRect(ctx, 135, 119, 25, 49, 10);
  
//       ctx.beginPath();
//       ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false); //동그란애 그리기
//       ctx.lineTo(31, 37);//입 들어가는 부분 만들어주기
//       ctx.fill();//채우기
  

//       //점선만들기
//       for (var i = 0; i < 8; i++) {
//         ctx.fillRect(51 + i * 16, 35, 4, 4); 
//       }
  
//       for (i = 0; i < 6; i++) {
//         ctx.fillRect(115, 51 + i * 16, 4, 4);
//       }
  
//       for (i = 0; i < 8; i++) {
//         ctx.fillRect(51 + i * 16, 99, 4, 4);
//       }
  
//       //문어그리기
//       ctx.beginPath();
//       ctx.moveTo(83, 116);
//       ctx.lineTo(83, 102);
//       ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
//       ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
//       ctx.lineTo(111, 116);
//       ctx.lineTo(106.333, 111.333);
//       ctx.lineTo(101.666, 116);
//       ctx.lineTo(97, 111.333);
//       ctx.lineTo(92.333, 116);
//       ctx.lineTo(87.666, 111.333);
//       ctx.lineTo(83, 116);
//       ctx.fill();
  
//       //눈알 흰자 그리기
//       ctx.fillStyle = 'white';
//       ctx.beginPath();
//       ctx.moveTo(91, 96);
//       ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
//       ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
//       ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
//       ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
//       ctx.moveTo(103, 96);
//       ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
//       ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
//       ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
//       ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
//       ctx.fill();
  

//       //오른쪽 눈동자 그리기
//       ctx.fillStyle = 'black';
//       ctx.beginPath();
//       ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
//       ctx.fill();

//       //왼쪽 눈동자 그리기  
//       ctx.beginPath();
//       ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
//       ctx.fill();
//     }
//   }
  
//   // A utility function to draw a rectangle with rounded corners.
  
//   function roundedRect(ctx, x, y, width, height, radius) {
//     ctx.beginPath();
//     ctx.moveTo(x, y + radius);
//     ctx.lineTo(x, y + height - radius);
//     ctx.arcTo(x, y + height, x + radius, y + height, radius);
//     ctx.lineTo(x + width - radius, y + height);
//     ctx.arcTo(x + width, y + height, x + width, y + height-radius, radius);
//     ctx.lineTo(x + width, y + radius);
//     ctx.arcTo(x + width, y, x + width - radius, y, radius);
//     ctx.lineTo(x + radius, y);
//     ctx.arcTo(x, y, x, y + radius, radius);
//     ctx.stroke();
//   }

function draw(){
//     let canvas = document.getElementById('testCanvas');

//     if(canvas.context){
//         let ctx = canvas.getContext('2d');

//         let rectangle = new Path2D();
//         rectangle.rect( 10, 10, 50, 50);

//         let circle = new Path2D();
//         circle.moveTo(125,35);
//         circle.arc(100, 35, 25, 0, 2*Math.PI);

//         ctx.stroke(rectangle);
//         ctx.fill(circle);

//     }
// }

function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
  
      var rectangle = new Path2D();
      rectangle.rect(10, 10, 50, 50);
  
      var circle = new Path2D();
      circle.moveTo(125, 35);
      circle.arc(100, 35, 25, 0, 2 * Math.PI);
  
      ctx.stroke(rectangle);
      ctx.fill(circle);
    }
  }

}