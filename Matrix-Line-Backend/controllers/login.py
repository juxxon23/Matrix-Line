from flask.views import MethodView
from flask import jsonify,request

class Login(MethodView):

    def post(self):
        dataEx = request.get_json()
        if dataEx['pass'] == 'perra3':
            return jsonify({'state':'welcome'})
        else:
            return jsonify({'state':'Login incorrecto, inutil'})

    def put(self):
        dataEx = request.get_json()
        nuevo = int(dataEx['document']) + 2
        return jsonify({'state':'put', 'data':nuevo})
        
    def delete(self):
        dataEx = request.args.get('id')
        return jsonify({'state':dataEx})

#se almacena en un lista json lo que llega por post
        '''  userLogin = {
                "password": request.json['password'],
                "documento": request.json['documento']
            }

            documento = request.json['documento']
            password = request.json['password']
            
            
            userDocumento = [ users for users in users if users['documento'] == documento ]
            userPassword = [ users for users in users if users['password'] == password ]

            if userDocumento and userPassword :
                return jsonify({"state": "welcome"})
            return jsonify({"message": "login error"})
            '''

