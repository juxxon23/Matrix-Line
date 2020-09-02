from flask.views import MethodView
from flask import jsonify,request
from data.model import Asesor
from data.config_key import KEY_TOKEN_AUTH
import bcrypt 
import jwt
import datetime

class Login(MethodView):

    def post(self):
        dataEx = request.get_json()
        pass_Ex = dataEx['pass'].encode('utf-8')
        data = Asesor.query.filter_by(documento_a=dataEx['document']).first()
        if data != None:
            if bcrypt.checkpw(pass_Ex, data.password_a.encode('utf-8')):
                encoded_jwt = jwt.encode({'exp': datetime.datetime.utcnow() + datetime.timedelta(seconds=60), 'nombre': data.nombre_a}, KEY_TOKEN_AUTH, algorithm='HS256')
                return jsonify({'state':'welcome', 'token':encoded_jwt}), 200
            else:
                 return jsonify({'state':'password'}), 400
        else:
            return jsonify({'state':'document'}), 400
        return 'Complete', 200


    def put(self):
        dataEx = request.get_json()
        nuevo = int(dataEx['document']) + 2
        return jsonify({'state':'put', 'data':nuevo})
        
    def delete(self):
        dataEx = request.args.get('id')
        return jsonify({'state':dataEx})
