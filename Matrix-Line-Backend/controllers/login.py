from flask.views import MethodView
from flask import jsonify

class Login(MethodView):

    def get(self):
        return jsonify({'state':'get back'}),200

    def post(self):
        return jsonify({'state':'back'}), 200
        
