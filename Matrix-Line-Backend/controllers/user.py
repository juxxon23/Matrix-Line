from flask import jsonify, request
from flask.views import MethodView
from data.model import Usuario 
from helpers.data_manager import DataManager
from validators.reg_usuario import RegistroUsuario

data_m = DataManager()
registroUsuario = RegistroUsuario()

class User(MethodView):

    def post(self):
        try:
            usuario_reg = request.get_json()
            errors = registroUsuario.validate(usuario_reg)
            if errors:
                print(errors)
                return jsonify({'state':'registro'})
            new_usuario = Usuario(
                    nombre_u = usuario_reg['name'],
                    apellido_u = usuario_reg['lastName'],
                    documento_u = usuario_reg['id_u'],
                    telefono_u = usuario_reg['numberPhone'],
                    fecha_nacimiento = usuario_reg['date'])
            state = data_m.add(new_usuario)
            return jsonify({'state':state})
        except:
            return jsonify({'state':'error'})
        return 'User complete'
  
