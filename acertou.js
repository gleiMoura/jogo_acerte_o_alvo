let tela = document.querySelector('canvas');
        let pincel = tela.getContext('2d');
        let xAleatorio;
        let yAleatorio;

        function desenhaCirculo(x, y, raio, cor) {
            pincel.fillStyle = cor;
            pincel.beginPath();
            pincel.arc(x, y, raio, 0, 2*3.14);
            pincel.fill();
        }

        function limpaTela() {
            pincel.clearRect(0, 0, 600, 400);
        }

        function desenhaAlvo(x, y, raio) {
            desenhaCirculo(x, y, raio+20, 'red');
            desenhaCirculo(x, y, raio+10, 'white');
            desenhaCirculo(x, y, raio, 'red');
        }

        function criaAleatorios(maximo) {
            return Math.floor(Math.random() * maximo);
        }

        function atualizaTela() {
            limpaTela();
            xAleatorio = criaAleatorios(600);
            yAleatorio = criaAleatorios(400);
            desenhaAlvo(xAleatorio, yAleatorio, 10);
        }

        setInterval(atualizaTela, 1000);
        
        function dispara(evento) {
            let x = evento.pageX - tela.offsetLeft;
            let y = evento.pageY - tela.offsetTop;

            if((x > xAleatorio-10)&& (x < xAleatorio + 10) && (y > yAleatorio - 10) && (y < yAleatorio + 10)){
                alert("ACERTOU, MISERAVI!");
            }
        }
        tela.onclick = dispara;