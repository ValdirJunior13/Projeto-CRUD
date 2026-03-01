import fastify from 'fastify';
import cors from 'cors'; //Isso aqui é pra ajudar a fazer a junção do beki e do fronti


const iniciar = async() => {
    try{
        await fastify.register(cors);
        await fastify.register(rotaMusica, {
            prefix: '/musica'
        })

        await fastify.listen({PORT: 8000});
        console.log("Rodando na porta 8000");
        
    }catch(error){
        fastify.log.error(error);
    }
}

iniciar();