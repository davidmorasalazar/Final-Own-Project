"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.utils import APIException, generate_sitemap
from api.models import db, User, Pets, Cats
from api.routes import api
from api.admin import setup_admin
import datetime
#from models import Person

from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity

ENV = os.getenv("FLASK_ENV")
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False

# database condiguration
if os.getenv("DATABASE_URL") is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db)
db.init_app(app)

# Allow CORS requests to this API
CORS(app)
jwt = JWTManager(app)

# add the admin
setup_admin(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints
@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# any other endpoint will try to serve it like a static file
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0 # avoid cache memory
    return response

# include sign-up endpoint
@app.route('/sign-up/', methods=['POST'])
def add_user():
    if request.method == 'POST':
        # user data is received
        user_name = request.json.get("user_name", None)
        fundation_name = request.json.get("fundation_name", None)
        email = request.json.get("email", None)
        password = request.json.get("password", None)
        phone_number = request.json.get("phone_number", None)
        province = request.json.get("province", None)
        
        if not user_name:
            return jsonify("El usuario es requerido!"), 400
        if not fundation_name:
            return jsonify("El nombre de la Fundacion es requerida!"), 400
        if not email:
            return jsonify("El email es requerido!"), 400
        if not password:
            return jsonify("La contraseña es requerida!"), 400
        if not phone_number:
            return jsonify("El numero de telefono es requerido!"), 400
        if not province:
            return jsonify("La provincia es requerida!"), 400

        #Verification email
        mail = User.query.filter_by(email = email).first()
        if mail:
            return jsonify({"msg": "El email ya existe"}), 400
        
        #Verification user_name
        username = User.query.filter_by(user_name = user_name).first()
        if username: 
            return jsonify({"msg": "El usuario ya existe"}), 400
        
        #Encrypt password
        hashed_password = generate_password_hash(password)

        user = User(user_name = user_name, fundation_name = fundation_name, email = email, password = hashed_password, phone_number = phone_number, province = province)

        db.session.add(user)
        db.session.commit()
        
        return jsonify("Su registro ha sido exitoso!"), 200

@app.route('/log-in/', methods=['POST'])
def login():
    if request.method == 'POST':
        user_name= request.json.get("user_name", None)
        password = request.json.get("password", None)

        if not user_name:
            return jsonify("El usuario es requerido!"), 400
        if not password:
            return jsonify("La contraseña es requerida!"), 400

        user = User.query.filter_by(user_name=user_name).first()
        if not user:
            return jsonify("Usuario/Contraseña son incorrectos"), 401
           

        if not check_password_hash(user.password, password):
            return jsonify("Usuario/Contraseña son incorrectos"), 401

        # Create token
        expiracion = datetime.timedelta(days=1)
        access_token = create_access_token(identity=user.user_name, expires_delta=expiracion)

        data = {
            
            "token": access_token,
            "expires": expiracion.total_seconds()*1000,
            
        }

        return jsonify(data), 200
#################################################### Formulario ###########################################################
@app.route('/pets', methods=['POST'])
def add_formulario():
    if request.method == 'POST':
        print(request.get_json())
        # user data is received
        user_name = request.json.get("user_name", None)
        fundation_name = request.json.get("fundation_name", None)
        pet_name = request.json.get("pet_name", None)
        description = request.json.get("description", None)
        phone_number = request.json.get("phone_number", None)
        tamaño = request.json.get("tamaño", None)
        sexo = request.json.get("sexo", None)
        temperamento = request.json.get("temperamento", None)
        edad = request.json.get("edad", None)
        # cat = request.json.get("cat", None)
        pet = request.json.get("pet", None)    
        vacunas = request.json.get("vacunas", None)         
        province = request.json.get("province", None)
        imageURL = request.json.get("imageURL", None)
        if not user_name:
            return jsonify("El usuario es requerido!"), 400
        if not fundation_name:
            return jsonify("El nombre de la Fundacion es requerida!"), 400
        if not pet_name:
            return jsonify("El apellido es requerido!"), 400
        if not description:
            return jsonify("La descripción es requerida!"), 400
        if not phone_number:
            return jsonify("El número de teléfono es requerido!"), 400
        if not tamaño:
            return jsonify("El tamaño es requerido!"), 400
        if not sexo:
            return jsonify("El sexo es requerido!"), 400
        if not temperamento:
            return jsonify("El temperamento es requerido!"), 400
        if not edad:
            return jsonify("La edad es requerida!"), 400
        # if not dog:
        #     return jsonify("dog is required!"), 400
        # if not vacunas:
        #      return jsonify("vacunas is required!"), 400        
        if not province:
            return jsonify("La provincia es requerida!"), 400
        if not imageURL:
            return jsonify("imageURL es requerida!"), 400

        # #Verification email
        # mail = User.query.filter_by(email = email).first()
        # if mail:
        #     return jsonify({"msg": "Email  already exists"}), 400
        
        # #Verification user_name
        # username = User.query.filter_by(user_name = user_name).first()
        # if username: 
        #     return jsonify({"msg": "Username  already exists"}), 400
        
        # #Encrypt password
        # hashed_password = generate_password_hash(password)

        form = Pets(user_name = user_name, fundation_name = fundation_name, pet_name = pet_name, description = description, tamaño = tamaño, sexo = sexo, temperamento = temperamento, edad = edad, pet = pet, vacunas = vacunas, phone_number = phone_number, province = province, imageURL=imageURL)

        db.session.add(form)
        db.session.commit()
        
        return jsonify("Su mascota se registro correctamente! Puede revisarlo en la seccion de" + " "+ pet), 200
    
#################################################### Dogs ###########################################################
@app.route('/pets', methods=['GET'])
def get_pets():

    # get all the todos
    query = Pets.query.all()

    # map the results and your list of people  inside of the all_people variable
    results = list(map(lambda x: x.serialize(), query))

    return jsonify(results), 200
@app.route('/pet/<int:chaid>', methods=['GET'])
def pet(chaid):

    # get all the todos
    pet = Pets.query.get(chaid)
    # map the results and your list of people  inside of the all_people variable
    return jsonify(pet.serialize()), 200
#################################################### Cats ###################################################################
@app.route('/cats', methods=['GET'])
def cats():

    # get all the todos
    query = Cats.query.all()

    # map the results and your list of people  inside of the all_people variable
    results = list(map(lambda x: x.serialize(), query))

    return jsonify(results), 200

@app.route('/cat/<int:planid>', methods=['GET'])
def cat(planid):

    # get all the todos
    cat = Cats.query.get(planid)
    # map the results and your list of people  inside of the all_people variable
    return jsonify(planeta.serialize()), 200
# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)
