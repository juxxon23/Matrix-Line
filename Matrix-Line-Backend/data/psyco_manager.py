import psycopg2

class PsycoManager:

    def add(self, nombre, apellido, documento, password, telefono):
        try:
            connection = psycopg2.connect(
                user='postgres',
                password='pass123',
                host='127.0.0.1',
                port='5432',
                database='Matrix_line')
        
            cursor = connection.cursor()
            consulta = "INSERT INTO asesor(nombre_a, apellido_a, documento_a, password_a, telefono_a) VALUES(%s, %s, %s, %s, %s)" 
            cursor.execute(consulta, (nombre, apellido, documento, password, telefono))
            connection.commit()
        except(Exception, psycopg2.Error) as error:
            print(error)
            return "error"
        finally:
            if connection:
                cursor.close()
                connection.close()
            return "welcome"


    def getAll(self):
        try:
            connection = psycopg2.connect(
                user='postgres',
                password='pass123',
                host='127.0.0.1',
                port='5432',
                database='Matrix_line')
            
            cursor = connection.cursor()
            consulta = "SELECT * FROM asesor"
            cursor.execute(consulta)
            resultado = cursor.fetchall()
            print(resultado)
        except(Exception, psycopg2.Error) as error:
            print(error)
            return "error"
        finally:
            if connection:
                cursor.close()
                connection.close()
            return "welcome"
    
    
