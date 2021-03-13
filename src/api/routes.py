"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Pets, Cats
from api.utils import generate_sitemap, APIException


api = Blueprint('api', __name__)



@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

# #################################################### Dogs ###########################################################
# @api.route('/dogs', methods=['GET'])
# def get_dogs():

#     # get all the todos
#     query = Dogs.query.all()

#     # map the results and your list of people  inside of the all_people variable
#     results = list(map(lambda x: x.serialize(), query))

#     return jsonify(results), 200
# @api.route('/dog/<int:chaid>', methods=['GET'])
# def dog(chaid):

#     # get all the todos
#     dog = Dogs.query.get(chaid)
#     # map the results and your list of people  inside of the all_people variable
#     return jsonify(dog.serialize()), 200
# #################################################### Cats ###################################################################
# @api.route('/cats', methods=['GET'])
# def cats():

#     # get all the todos
#     query = Cats.query.all()

#     # map the results and your list of people  inside of the all_people variable
#     results = list(map(lambda x: x.serialize(), query))

#     return jsonify(results), 200

# @api.route('/cat/<int:planid>', methods=['GET'])
# def cat(planid):

#     # get all the todos
#     cat = Cats.query.get(planid)
#     # map the results and your list of people  inside of the all_people variable
#     return jsonify(planeta.serialize()), 200
# # this only runs if `$ python src/main.py` is executed
# if __name__ == '__routes__':
#     PORT = int(os.environ.get('PORT', 3000))
#     api.run(host='0.0.0.0', port=PORT, debug=False)