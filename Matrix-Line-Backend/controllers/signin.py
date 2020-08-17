from flask import jsonify, request
from flask.views import MethodView
from data.model import Asesor
from helpers.data_manager import DataManager

data_m = DataManager()

class Signin(MethodView):
    def post(self):
        try:
            asesor_signin = request.get_json()
            new_asesor = Asesor(
                    nombre_a=asesor_signin['name'],
                    apellido_a=asesor_signin['lastName'],
                    documento_a=asesor_signin['id'],
                    password_a=asesor_signin['pass'],
                    telefono_a=asesor_signin['numberPhone'])
            state = data_m.add(new_asesor)
            return jsonify({'state':state})
        except:
            return jsonify({'state':state})
  
