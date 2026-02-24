import { request } from "http";
import {pool} from '../model/bd.js';

async function fazerCoisas(fastify, options){
    fastify.post('/login', async(request, reply) =>{
        try{
            const{email, senha} = request.body;
            
        }catch(error){
            return reply.status(500).send({
                message: "Erro no catch do /login"
            })
        }
    }) 

    fastify.get('/ouvirMusicas', async(request, reply) =>{
        try{
            const mostrarTudo = await pool.execute('SELECT * FROM ');
            if(!mostrarTudo){
                return reply.status(404).send({message: "Erro ao consultar o banco"})
            };
            return reply.status(201).send({
                message: "Deu tudo certo!",
                mostrarTudo: mostrarTudo
            }); 

        }catch(error){
            return reply.status(500).send({
                message: "Erro :("
            })
        };
    });

    fastify.post('/ouvirMusicas', async(request, reply) => {
        try{
            const postarDados = request.body;
            //const salvarBanco = await fazer a conexão de enviar no post para o mysql

            return reply.status(201).send({
                message: "Deu tudo certo!",
                salvarDados: salvarBanco
            }); 

        }catch(error){  
            return reply.status(500).send({
                message: "Erro :("
            });
        };
    });

    fastify.put('/ouvirMusicas/:id', async(request, reply) => {
        try{
            const{id} = request.params.id;
            const dados = request.body;
            //const atualizarDados = await //TODO
            if(!atualizarDados){
                return reply.status(404).send({
                    message: "Erronhe"
                })
            }
            return reply.status(200).send(){
                message: "Deu tudo certo! :D",
                atualizarDados:atualizarDados
            }

        }catch(error){  
            return reply.status(500).send({
                message: "Erro :("
            });
        };
    } )

}