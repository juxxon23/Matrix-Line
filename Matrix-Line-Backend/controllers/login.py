from flask.views import MethodView
<<<<<<< HEAD
from flask import jsonify, request


class Login(MethodView):

    
    def get(self):
        pass
        #if request.args.get('idclient') == "Grim" and request.args.get('passclient') == "123":
         #   return jsonify({'from':'Backend - Flask', 'state':'Welcome'}), 200
        #return jsonify({'from':'Backend - Flask', 'state':'Incorrect user'}), 499
    def post(self):
        data_login = request.get_json()
        return jsonify(data_login), 200
=======
from flask import jsonify,request
from .BaseDatos import *

class Login(MethodView):

    def post(self):
>>>>>>> f2747ba72e0127d1b700a256c2bbe1a50b51cd5d
        
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
