from flask.views import MethodView
from flask import json, request, jsonify
from data.model import Usuario, Linea, Equipo
from helpers.data_manager import DataManager

data_m = DataManager()

class Line(MethodView):

    def get(self, idline):
        return 'get line' + idline, 200
    

    def post(self):
        dataEx = request.get_json()
        data = Usuario.query.filter_by(documento_u=dataEx['document']).first()
        if data != None:
            linea = Linea.query.filter_by(numero_linea=dataEx['numberLine']).first()
            if linea == None:
                try:
                    new_line = Linea(
                           numero_linea  = dataEx['numberLine'],
                           estado_linea = True,
                           documento_usuario = dataEx['document'],
                           serial_e = dataEx['serial_e'])
                    new_equipo = Equipo(
                            serial_equipo = dataEx['namePhone'],
                            estado_legal = dataEx['legalState'])
                    state = data_m.add(new_line)
                    state = data_m.add(new_equipo)
                    return jsonify({'state':state})
                except:
                    return jsonify({'state':'error'})
            else:
                return jsonify({'state':'line'})
        else:
            return jsonify({'state':'document'})
        return 'create line', 200

    
    def put(self, ced, idline):
        message = "Update line, Cedula: {}, Linea: {}".format(ced, idline)
        return message, 200


    def delete(self, idline):
        return 'delete line' + idline, 200  
