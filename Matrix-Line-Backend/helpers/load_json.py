import json

class JsonManager:
    
    def load_json(self, file_name):
        with open(file_name) as data_json:
            data = json.load(data_json)
            return data
