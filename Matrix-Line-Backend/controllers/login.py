from flask.views import MethodView
from flask import jsonify,request
from data.model import Asesor
from data.config_key import KEY_TOKEN_AUTH
from validators.asesor import AsesorLogin
import bcrypt 
import jwt
import datetime

asesor_schema = AsesorLogin()

class Login(MethodView):

    def post(self):
        dataEx = request.get_json()
        errors = asesor_schema.validate(dataEx)
        if errors:
            print(errors)
            return jsonify({'state':'registro'})
        pass_Ex = dataEx['pass_u'].encode('utf-8')
        data = Asesor.query.filter_by(documento_a=dataEx['document']).first()
        if data != None:
            if bcrypt.checkpw(pass_Ex, data.password_a.encode('utf-8')):
                encoded_jwt = jwt.encode({'exp': datetime.datetime.utcnow() + datetime.timedelta(seconds=300), 'nombre': data.nombre_a}, KEY_TOKEN_AUTH, algorithm='HS256')
                return jsonify({'state':'welcome', 'token':encoded_jwt}), 200
            else:
                 return jsonify({'state':'password'}), 400
        else:
            return jsonify({'state':'document'}), 400
        return 'Complete', 200
