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
                print(i)
                print(i.numero_linea)
                factura_r = Factura.query.filter_by(numero_l=i.numero_linea).all()
                print(factura_r)
                for i in factura_r:
                    dic = {
                            "Id":i.id_factura,
                            "Numero de Linea":i.numero_l,
                            "Fecha Emision":i.fecha_emision,
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
