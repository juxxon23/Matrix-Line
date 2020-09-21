from flask.views import MethodView
from flask import jsonify,request
from data.model import Usuario

class ConsultUser (MethodView):

    def post(self):
        dataEx = request.get_json()
        data = Usuario.query.filter_by(documento_u=dataEx['document']).first()
        if data != None:
            return jsonify({'state':'welcome'}), 200
        else:
            return jsonify({'state':'document'})
        return 'complete'
            
