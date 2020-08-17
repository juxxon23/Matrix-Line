from data.model import db

class DataManager():
    
    def add(self, new):
        try:
            db.session.add(new)
            db.session.commit()
            return 'welcome'
        except:
            return 'error'
       
