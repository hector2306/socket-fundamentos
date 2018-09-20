var socket = io();
        socket.on('connect', function() {
        
            console.log('Conectado al servidor');
        });

        //escuchar informacion
        socket.on('disconnect', function() {
            console.log('Se perdio la conexion con el servidor ');
        });

        //Enviar infromacion
        socket.emit('enviarMensaje', {
            usuario: 'Hector',
            mensaje: 'Hola Mundo'
        }, function(resp) {
            console.log('respuesta server: ', resp);
        });

        //Escuchar informacion
        socket.on('enviarMensaje', function(mensaje) {
            
         console.log('Servidor:', mensaje);
        });
