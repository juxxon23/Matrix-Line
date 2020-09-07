from data.model import db
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy import join

class DataManager():
    
    def add(self, *args):
        try:
            for request in args:
                db.session.add(request)
                db.session.commit()
            return 'welcome'
        except SQLAlchemyError as e:
            print(e)
        except:
            return 'error'
