import { request } from "http";
import {pool} from '../model/bd.js';
import bcrypt from "bcrypt";


async function fazerCoisas(fastify, options){
    fastify.post('/login', async(request, reply) =>{
        try{
            const {email, senha} = request.body;
            //pesquisar pq o rows é instanciado assim
            const [rows] = await pool.execute("SELECT id_usuario, nome_usuario, email FROM usuarios WHERE email = ? AND senha = ?", [email, senha]); 

            const usuario = rows[0];

            if(!usuario){
                return reply.status(401).send({
                    erro: "Erro 404 ao buscar o banco"
                });
            };
            
            //const linhas[0];

            //const [rows] = Pegue a primeira posição do array retornado e coloque dentro da variável rows
            // const {rows} =  pegam propriedades de um objeto pelo nome da chave.

            //if(!linhas[0]){ }

            // cifra de blowfish
            

            const senhaValida = await bcrypt.compare(senha, usuario.senha);
            if(!senhaValida) {
                return reply.status(401).send({erro: "Erro ao procurar a senha ou o email!"});
            };
        
            const token = jwt.sign({id_usuarios: usuario.id_usuario}, 
                process.env.JWT_SECRET,
                {expiresIn: '7d'}
            )

            return reply.status(200).send({
                message: "Deu tudo certo!", 
                token: token, 
                nome: usuario.nome_usuario
            });

        }catch(error){
            return reply.status(500).send({
                message: "Erro no catch do /login"
            })
        }
    }) 

    fastify.get('/ouvirMusicas', async(request, reply) =>{
        try{
            const [rows] = await pool.execute('SELECT * FROM musicas WHERE id_usuarios = ?', [id_usuarios]);

            const mostrarMusicas = rows[0];

            return reply.status(201).send({
                message: "Deu tudo certo!",
                mostrarMusicas: mostrarMusicas
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
                atualizarDados: atualizarDados
            }

        }catch(error){  
            return reply.status(500).send({
                message: "Erro :("
            });
        };
    } )

}


// quando for fazer o cadastro: const salt = await bcrypt.genSalt(10);
            // const senhaCriptografada = await bcrypt.hash(request, salt);

           // request.senha = senhaCriptografada;