from data.model import db
from sqlalchemy.exc import SQLAlchemyError

class DataManager():
    
    def add(self, new):
        try:
            db.session.add(new)
            db.session.commit()
            return 'welcome'
        except SQLAlchemyError as e:
            print(e)
        except:
            return 'error'
       
