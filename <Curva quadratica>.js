<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Curva quadratica</title>
        <meta charset="UTF-8">

        <script>
            Function draw(){
                var canvas = document.getElementById('meuCanvas');
                if(canvas.getContext){
                    var cntxt = canvas.getContext('2d');
                    cntxt.beginPath();
                    cntxt.filStyle = "rgb(0,255,0)";
                    cntxt.moveTo(200,100);
                    cntxt.quadraticCurveTo(150,200,200);
                    cntxt.fill();
                    cntxt.stroke();
                    cmtxt.beginPath();
                    cntxt.moveTo(200,100);
                    cntxt.quadraticCurveTo(250,150,200,200);
                    cntxt.fill();
                    cntxt.stroke();
                    cntxt.closePath();
                }
            }
    </script>            
    </head>
<body onload="draw();"> <canvas id="meuCanvas" width="1350" height="1350" style="border:1px solid #000000;"></canvas> </body> </html>

    
