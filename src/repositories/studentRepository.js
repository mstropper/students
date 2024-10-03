const fs = require('fs');
const path = require('path');

// Resolve o caminho absoluto para o arquivo students.json
const filePath = path.join(__dirname, '../data/students.json');

function readData() {
    try {
        if (!fs.existsSync(filePath)) {
            console.log('Arquivo não encontrado. Retornando array vazio.');
            return [];
        }

        const data = fs.readFileSync(filePath, 'utf8');
        console.log('Dados lidos do arquivo:', data);
        
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error('Erro ao ler os dados:', error);
        return [];
    }
}

function writeData(data) {
    try {
        // Escreve os dados no arquivo no formato JSON
        if (!Array.isArray(data)) {
            throw new Error('Expected an array of students');
        }
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error writing data:', error);
    }
}

module.exports = {
    readData,
    writeData
};
