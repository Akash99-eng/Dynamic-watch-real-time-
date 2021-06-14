var clock=setInterval(timer,1000)
        function timer(){
            var d=new Date();
            var name=d.toLocaleTimeString();
            document.getElementById('ghadi').innerHTML=name;}
