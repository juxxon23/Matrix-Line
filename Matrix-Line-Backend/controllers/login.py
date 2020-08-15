from flask.views import MethodView
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
        
