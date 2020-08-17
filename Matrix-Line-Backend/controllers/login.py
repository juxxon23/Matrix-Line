from flask.views import MethodView
from flask import jsonify,request
from data.model import Asesor

class Login(MethodView):

    def post(self):
        dataEx = request.get_json()
        data = Asesor.query.filter_by(documento_a=dataEx['document']).first()
        if data != None:
            if data.password_a == dataEx['pass']:
                return jsonify({'state':'welcome'})
            else:
                 return jsonify({'state':'password'})
        else:
            return jsonify({'state':'document'})
        return 'Complete', 200


    def put(self):
        dataEx = request.get_json()
        nuevo = int(dataEx['document']) + 2
        return jsonify({'state':'put', 'data':nuevo})
        
    def delete(self):
        dataEx = request.args.get('id')
        return jsonify({'state':dataEx})
