from flask import jsonify, request
from flask.views import MethodView
from .BaseDatos import*

class Signin(MethodView):
   
    def post(self):
                           
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
        })