from flask import jsonify, request
from flask.views import MethodView
from data.model import Usuario 
from helpers.data_manager import DataManager


data_m = DataManager()

class User(MethodView):

    def post(self):
        try:
            usuario_reg = request.get_json()
            new_usuario = Usuario(
                    nombre_u = usuario_reg['name'],
                    apellido_u = usuario_reg['lastName'],
                    documento_u = usuario_reg['id'],
                    telefono_u = usuario_reg['numberPhone'],
                    fecha_nacimiento = usuario_reg['date'])
            state = data_m.add(new_usuario)
            return jsonify({'state':state})
        except:
            return jsonify({'state':state})
        return jsonify({'state':state})
  
