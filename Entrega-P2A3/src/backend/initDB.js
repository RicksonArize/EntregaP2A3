import {createJogoTable, createUserTable, createPlatformTable} from './Routes'

async function initDB() {
    try {

        // Criação da tabela de usuário
        await createUserTable();

        // Criação da tabela de jogo
        await createJogoTable();

        // Criação da tabela de plataforma
        await createPlatformTable();

        console.log('Banco de dados inicializado com sucesso!');
    } catch (error) {
        console.error('Erro ao inicializar o banco de dados:', error);
    }
}

// Chama a função para inicializar o banco de dados
initDB();
