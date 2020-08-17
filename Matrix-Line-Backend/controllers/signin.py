from flask import jsonify, request
from flask.views import MethodView
from data.model import Asesor
from helpers.data_manager import DataManager

data_m = DataManager()

class Signin(MethodView):
    def post(self):
        asesor_signin = request.get_json()
        new_asesor = Asesor(
               nombre_a=asesor_signin['name'],
               apellido_a=asesor_signin['lastName'],
               documento_a=asesor_signin['id'],
               password_a=asesor_signin['pass'],
               telefono_a=asesor_signin['numberPhone'])
        state = data_m.add(new_asesor)
        return jsonify({'state':state})
        '''
        #se almacena en un lista json lo que llega por post
        userNew = {
            "name":request.json['name'],
            "apellido":request.json['apellido'],
            "telefono": request.json['telefono'],
            "documento": request.json['documento'],
            "password" : request.json['password']
        }

        users.append(userNew)

        name = request.json['name']

        userFound = [ users for users in users if users['name'] == name ]
        # se verifica que si este el producto si existe si la longitud de la lista es mayor a 0 es que existe
        if( len(userFound) > 0):
            return jsonify({"message":"register succesfulluy" })

        return jsonify({
            "message": "register fail"
        })'''
