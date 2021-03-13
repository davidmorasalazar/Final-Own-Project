from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key = True)
    user_name = db.Column(db.String(200), unique=True, nullable=False)
    fundation_name = db.Column(db.String(200), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(300), unique=False, nullable=False)
    phone_number = db.Column(db.String(20), unique=True, nullable=False)
    province = db.Column(db.String(20), unique=False, nullable=False)
    pet = db.relationship('Pets', lazy=True) #Se crea relacion para llave foranea 
    # cat = db.relationship('Cats', lazy=True) #Se crea relacion para llave foranea 

    def __repr__(self):
        return '<User %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "user_name": self.user_name,
            "fundation_name": self.fundation_name,
            "email": self.email,
            "phone_number": self.phone_number,
            "province": self.province,
            # do not serialize the password, its a security breach
        }

class Pets(db.Model):
    __tablename__ = 'pets'
    id = db.Column(db.Integer, primary_key = True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id')) #Se crea llave foranea 
    fundation_name = db.Column(db.String(120), unique=False, nullable=False)
    description = db.Column(db.String(2000), unique=False, nullable=False)
    edad = db.Column(db.Integer, unique=False, nullable=False)
    tamaño =  db.Column(db.Integer, unique=False, nullable=False)
    temperamento = db.Column(db.String(2000), unique=False, nullable=False)
    vacunas =  db.Column(db.Boolean(), unique=False, nullable=False)
    sexo = db.Column(db.String(80), unique=False, nullable=False)
    pet_name = db.Column(db.String(2000), unique=False, nullable=False)
    user_name = db.Column(db.String(2000), unique=False, nullable=False)
    phone_number = db.Column(db.Integer, unique=False, nullable=False)
    pet = db.Column(db.String(2000), unique=False, nullable=False)
    province = db.Column(db.String(2000), unique=False, nullable=False)
    imageURL = db.Column(db.String(2000), unique=False, nullable=False)

    def __repr__(self):
        return '<Pets %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "fundation_name": self.fundation_name,
            "description": self.description,
            "edad": self.edad,
            "tamaño": self.tamaño,
            "temperamento": self.temperamento,
            "vacunas": self.vacunas,
            "sexo": self.sexo,
            "pet_name": self.pet_name,
            "user_name": self.user_name,
            "phone_number": self.phone_number,
            "pet": self.pet,
            "province": self.province,
            "imageURL": self.imageURL
            
        }

class Cats(db.Model):
    __tablename__ = 'cats'
    id = db.Column(db.Integer, primary_key = True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id')) #Se crea llave foranea 
    fundation_worker = db.Column(db.String(120), unique=False, nullable=False)
    descripcition = db.Column(db.String(2000), unique=False, nullable=False)
    age = db.Column(db.Integer, unique=False, nullable=False)
    size =  db.Column(db.Integer, unique=False, nullable=False)
    temperament = db.Column(db.String(2000), unique=False, nullable=False)
    vaccines =  db.Column(db.Boolean(), unique=False, nullable=False)
    gender = db.Column(db.String(80), unique=False, nullable=False)


    def __repr__(self):
        return '<Cats %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "fundation_worker": self.fundation_worker,
            "descripcition": self.descripcition,
            "age": self.age,
            "size": self.size,
            "temperament": self.temperament,
            "vaccines": self.vaccines,
            "gender": self.gender,
        }
