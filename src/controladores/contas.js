const { banco, contas } = require('../bancodedados');

const listarContas = (req, res) => {
    const { senha_banco } = req.query;

    if (!senha_banco) {
        return res.status(400).json({ mensagem: 'A senha do banco é obrigatória!' });
    }

    if (senha_banco !== banco.senha) {
        return res.status(400).json({ mensagem: 'A senha do banco informada não é válida!' });
    }

    return res.json(contas);
};

const criarConta = (req, res) => {

}



module.exports = {
    listarContas,
    criarConta
}