from flask import jsonify, request
from flask.views import MethodView
from data.config_key import KEY_TOKEN_AUTH
import jwt

class Check(MethodView):

    def get(self):
        header = request.headers.get('Authorization')
        if header:
            token = header.split(" ")
            try:
                data = jwt.decode(token[1], KEY_TOKEN_AUTH, algorithms=['HS256'])
                return jsonify({'state':'welcome'}), 200
            except:
                return jsonify({'state':'token'})
        return jsonify({'state':'complete'})
