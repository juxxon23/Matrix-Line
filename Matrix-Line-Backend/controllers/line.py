from flask.views import MethodView
from flask import json, request, jsonify
from data.model import Usuario, Linea, Equipo, Factura
from helpers.data_manager import DataManager
from helpers.to import To
from random import uniform
import datetime

data_m = DataManager()
conv_to = To()

class Line(MethodView):   

    def post(self):
        dataEx = request.get_json()
        data = Usuario.query.filter_by(documento_u=dataEx['document']).first()
        if data != None:
            linea = Linea.query.filter_by(numero_linea=dataEx['numberLine']).first()
            if linea == None:
                try:
                    new_equipo = Equipo(
                            serial_equipo = int(dataEx['namePhone']),
                            estado_legal = conv_to.boolean(dataEx['legalState']),
                            marca = dataEx['brand'],
                            descripcion = dataEx['description'])
                    new_line = Linea(
                           numero_linea  = dataEx['numberLine'],
                           estado_linea = True,
                           documento_usuario = dataEx['document'],
                           serial_e = int(dataEx['namePhone']))
                    new_factura = Factura(
                            numero_l = dataEx['numberLine'],
                            fecha_emision = datetime.datetime.now(),
                            valor = round(uniform(10000, 1000000),2))
                    state = data_m.add(new_equipo, new_line, new_factura)
                    return jsonify({'state':state})
                except:
                    return jsonify({'state':'error'})
            else:
                return jsonify({'state':'line'})
        else:
            return jsonify({'state':'document'})
        return 'create line', 200

    
    def put(self, ced, idline):
       return 'Updated line status'

    def delete(self, idline):
        return 'delete line' + idline, 200  
