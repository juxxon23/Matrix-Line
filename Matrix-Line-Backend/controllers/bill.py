from flask.views import MethodView
from data.model import Usuario, Linea, Factura
from flask import json, request, jsonify
from helpers.data_manager import DataManager

data_m = DataManager()

class Bill(MethodView):

    def post(self):
        dataEx = request.get_json()
        data = Usuario.query.filter_by(documento_u=dataEx['document']).first()
        documento = []
        if data != None:
            lineas = Linea.query.filter_by(documento_usuario=dataEx['document']).all()
            for i in lineas:
                factura_r = Factura.query.filter_by(numero_l=i.numero_linea).all()
                for i in factura_r:
                    fecha_factura = dataEx['date'].split("-")
                    if int(i.fecha_emision.year) >= int(fecha_factura[0]):
                        if int(i.fecha_emision.month) >= int(fecha_factura[1]):
                            if int(i.fecha_emision.day) >= int(fecha_factura[2]):
                                fecha = "{}-{}-{}".format(i.fecha_emision.month, i.fecha_emision.day, i.fecha_emision.year)
                                dic = {
                                        "Id":i.id_factura,
                                        "Numero de Linea":i.numero_l,
                                        "Fecha Emision":fecha,
                                        "Valor":i.valor
                                    }
                                documento.append(dic)
            return jsonify({'state':'welcome', 'data': documento})
        else:
            return jsonify({'state':'document'})
        return 'Updated line status'

    def delete(self):
        id_factura = request.args.get('id')
        delete_bill = Factura.query.filter_by(id_factura=id_factura).first()
        respuesta = data_m.delete(delete_bill)
        if respuesta == 'ok':
            return jsonify ({'state':'ok'})
        elif respuesta == 'error':
            return jsonify('error') 
        else:
            return jsonify('operacion no contemplada')
