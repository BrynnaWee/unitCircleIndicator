export default class UnitCircle {

  private width:number;
  private height:number;
  private value:number;
  private xLabel:string;
  private yLabel:String;
  private _canvas:any;
  private self:any;
  private ctx:any;
  private angle:number;
  private circlePointX:any;
  private circlePointY:any;
  private flash = false; //드래그상태
  private centerX:any;
  private centerY:any;
  private halfWidth:number;
  private halfHeight:number;
  private gridSize:number;
  private moving:boolean;
  private cursorRadius:number;

 constructor(){
    this.width = 300;
    this.height = 300;
    this.value = 0;//주어진 각도
    this.xLabel= "X=";
    this.yLabel= "Y=";


    this.self = this;
    this._canvas = document.getElementById('canvas');
    let canvas = this._canvas.current;

    canvas.style.width = this.width * window.devicePixelRatio;
    canvas.style.height = this.height * window.devicePixelRatio;
    canvas.style.width = this.width + "px";
    canvas.style.height = this.height + "px";
    canvas.onselectstart = function() { return false; }
    // canvas.addEventListener('contextmenu', function(e){
    //   e.preventDefault();
    // })

    this.ctx = canvas.getContext("2d");

    this.halfWidth = this.width / 2;
    this.halfHeight = this.height / 2;
    this.gridSize = Math.floor(Math.min(this.halfWidth, this.halfHeight) * 0.8);
    this.centerX = Math.floor(this.width / 2);
    this.centerY = Math.floor(this.height / 2);
    this.moving = false;
    this.cursorRadius = 10;

    this.angle = this.modClamp(this.value + Math.PI, Math.PI * 2);
    this.flash = false;

    this.init();
    this.animate();
 }


 private animate = function(){
  this.flash = !this.flash;
  if (!this.moving) {
    this.drawCircle(this.ctx, this.angle);
  }
}

private start = function() {
  this.moving = true;
  this.drawCircle(this.ctx, this.angle);
}

private stop = function() {
  this.moving = false;
  this.drawCircle(this.ctx, this.angle);
}

private init = ():void =>
{
  this._canvas.current.addEventListener('mousedown',  this.start);

  this._canvas.current.addEventListener('mousemove',  this.trackMouse);
  
  this._canvas.current.addEventListener('mouseup',  this.stop);
  
  this._canvas.current.addEventListener('mouseenter',  this.mouseCapture);
}

private mouseCapture = (e:any):any =>
{
  let position = this.toLocal(e, this._canvas);
  return this.inCircle(position.x, position.y);
}


private trackMouse = (e:any) => 
{

    var position = this.toLocal(e, this._canvas);

    this.angle = Math.atan2(position.x, position.y);
    this.drawCircle(this.ctx, this.angle);
    var v = this.modClamp(this.angle + Math.PI, 2 * Math.PI);

    this._canvas.current.addEventListener("slide", e, {
      x: Math.sin(v), //circleSin,
      y: Math.cos(v), //circleCos,
      angle: v //캔버스에 그려지는 각도
    });
}


private modClamp = (v:number, range:number, opt_rangeStart?:number):number =>{
  var start = opt_rangeStart || 0; //시작할 각도
  if (range < 0.00001) {
    return start;
  }
  v -= start;
  if (v < 0) {
    v -= Math.floor(v / range) * range;
  } else {
    v = v % range;
  }
  return v + start;
}
  

private toLocal = (e:any, element:any):any =>
{
  var offset = element.current.offset();
  var x = e.pageX - offset.left;
  var y = e.pageY - offset.top;

  x -= this.halfWidth;
  y -= this.halfHeight;
  return {x: x, y: y};
}


private computeCircleCenter = ():void =>
{
  let circleSin = Math.sin(this.angle);
  let circleCos = Math.cos(this.angle);

  this.circlePointX = circleSin * this.gridSize;
  this.circlePointY = circleCos * this.gridSize;
}


private inCircle = (x:number, y:number):boolean => 
{
  this.computeCircleCenter();
  var dx = Math.abs(x - this.circlePointX);
  var dy = Math.abs(y - this.circlePointY);
  return dx * dx + dy * dy < this.cursorRadius * this.cursorRadius;
}

private drawCircle = (ctx:any, v?:any):void =>
{

  this.computeCircleCenter();

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.save();
  ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  ctx.translate(this.centerX, this.centerY);
  drawCircle();
  drawCursor();
  ctx.restore();
 

  function drawCircle() {
    ctx.strokeStyle = "#00f";
    ctx.beginPath();
    ctx.arc(0, 0, this.gridSize, 0, 360);
    ctx.closePath();
    ctx.stroke();
  }

  function drawCursor() {
    ctx.strokeStyle = "#000";
    ctx.fillStyle = this.moving ? "rgba(100, 0, 255, 0.5)" : "rgba(0, 0, 255, " + (this.flash ? 0.3 : 0.1) + ")";
    ctx.beginPath();
    ctx.arc(this.circlePointX, this.circlePointY, this.cursorRadius, 0, 360);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }
}
  
        
}//class UnitCircle

     
