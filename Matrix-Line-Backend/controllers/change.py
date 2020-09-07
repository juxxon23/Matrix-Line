from flask.views import MethodView
from flask import json, request, jsonify
from data.model import Usuario, Linea
from helpers.data_manager import DataManager

data_m = DataManager()

class Change(MethodView):

    def post(self):
        dataEx = request.get_json()
        data = Usuario.query.filter_by(documento_u=dataEx['document'])
        if data != None:
            lineas = Linea.query.filter_by(documento_usuario=dataEx['document']).all()
            documento = []
            for row in lineas:
                dic = {
                        "Numero de Linea":row.numero_linea,
                        "Estado de Linea":row.estado_linea
                        }
                
                documento.append(dic)
                print(dic)
            print(documento)
            return jsonify({'state':'welcome', 'data': documento})
        else:
            return jsonify({'state':'document'})
        return 'Updated line status'
