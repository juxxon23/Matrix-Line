from flask.views import MethodView
from flask import jsonify,request
from .BaseDatos import *

class Login(MethodView):

    def post(self):
        
        #se almacena en un lista json lo que llega por post
            userLogin = {
                "password": request.json['password'],
                "documento": request.json['documento']
            }

            documento = request.json['documento']
            password = request.json['password']
            
            
            userDocumento = [ users for users in users if users['documento'] == documento ]
            userPassword = [ users for users in users if users['password'] == password ]

            if userDocumento and userPassword :
                return jsonify({"message": "login succesfulluy"})
            return jsonify({"message": "login error"})
