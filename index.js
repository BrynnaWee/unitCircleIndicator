
  window.onload = setupWebGL;
  var gl = null;

  function setupWebGL(){
      let canvas = document.getElementById('canvas');

      try {
          gl = canvas.getContext('2d');
      }catch(e){

      }

      if(gl){
          gl.clearColor(1.0, 0.0, 0.0, 1.0);
          gl.clear(gl.COLOR_BUFFER_BIT);
      }else{
          alert('error');
      }
  }
  
  
  const circle_container = document.getElementById('circle_container');
  circle_container.gmanUnitCircle({
    width: 200,
    height: 200,
    value: 0,
    slide: function(e,u) {
      rotation[0] = u.x;
      rotation[1] = u.y;
    //   drawScene();
    }
  });


//   function drawScene() {
  
//   }
