from flask import jsonify, request
from flask.views import MethodView
from marshmallow import validate
from data.model import Asesor
from helpers.data_manager import DataManager
from helpers.encrypt_pass import EncryptPass
from validators.asesor import AsesorRegistro

data_m = DataManager()
encrypt = EncryptPass()
asesor_schema = AsesorRegistro()

class Signin(MethodView):

    def post(self):
        try:
            asesor_signin = request.get_json()
            errors = asesor_schema.validate(asesor_signin)
            if errors:
                print(errors)
                return jsonify({'state':'registro'})
            new_asesor = Asesor(
                    nombre_a = asesor_signin['name'],
                    apellido_a = asesor_signin['lastName'],
                    documento_a = asesor_signin['id_u'],
                    password_a = encrypt.do(asesor_signin['pass_u']),
                    telefono_a = asesor_signin['numberPhone'])
            state = data_m.add(new_asesor)
            return jsonify({'state':state})
        except:
            return jsonify({'state':'error'})
  
