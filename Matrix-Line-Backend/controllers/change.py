from flask.views import MethodView
from flask import json, request, jsonify
from data.model import Usuario, Linea
from helpers.data_manager import DataManager
from sqlalchemy import table

data_m = DataManager()

class Change(MethodView):

    def post(self):
        dataEx = request.get_json()
        data = Usuario.query.filter_by(documento_u=dataEx['document']).first()
        if data != None:
            lineas = Linea.query.filter_by(documento_usuario=dataEx['document']).all()
            documento = []
            for row in lineas:
                dic = {
                        "Numero de Linea":row.numero_linea,
                        "Estado de Linea":row.estado_linea
                        }
                documento.append(dic)
            return jsonify({'state':'welcome', 'data': documento})
        else:
            return jsonify({'state':'document'})
        return 'Updated line status'

    def put(self):
        dataEx = request.get_json()
        numero = Linea.query.filter_by(numero_linea=dataEx['Numero de Linea']).first()
        estado = numero.estado_linea
        if estado == True:
            numero.estado_linea = False
            state = data_m.update()
            return jsonify({'state':'inactivo'})
        elif estado == False:
            numero.estado_linea = True
            state = data_m.update()
            return jsonify({'state':'activo'})
        else:
            return jsonify({'state':'error'})
