from flask import Flask, jsonify, request


app = Flask(__name__)

produtos = [
    {
        'id': 1,
        'nome': 'Arroz',
        'quantidade': 10
    },
    {
        'id': 2,
        'nome': 'Feijao',
        'quantidade': 5
    }
]

#consultar todos

@app.route('/produtos', methods=['GET'])
def obter_produtos():
    return jsonify(produtos);

#consultar por id

@app.route('/produtos/<int:id>', methods=['GET'])
def obter_produto_por_id(id):
    for produto in produtos:
       if produto.get('id') == id:
           return jsonify(produto)

@app.route('/produtos/<int:id>', methods=['PUT'])
def editar_produto_id(id):
    produto_alterado = request.get_json()
    for indice,produto in enumerate(produto):
        if produto.get('id') == id:
            produtos[indice].update(produto_alterado)
            return jsonify(produtos[indice])


app.run(port=5000,host='localhost', debug=True)
