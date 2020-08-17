from data.model import db

class DataManager():
    
    def add(self, new_asesor):
        db.session.add(new_asesor)
        db.session.commit()
        return 'welcome'
       
