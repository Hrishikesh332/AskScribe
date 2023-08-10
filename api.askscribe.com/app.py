from flask import Flask, request, jsonify
from flask_cors import CORS
import pymongo
import bcrypt
import jwt
import os
from dotenv import load_dotenv

app = Flask(__name__)
CORS(app)
load_dotenv()

mongo_url = os.getenv("MONGO")
client = pymongo.MongoClient(mongo_url)
db = client.get_database("askscribe")
user_collection = db["UserInfo"]
pdf_collection = db["pdfdetails"]


JWT_SECRET = os.getenv("JWT_SECRET")

@app.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    fusername = data["fusername"]
    femail = data["femail"]
    fpassword = data["fpassword"]
    encrypted_password = bcrypt.hashpw(fpassword.encode('utf-8'), bcrypt.gensalt())

    existing_user = user_collection.find_one({"femail": femail})
    if existing_user:
        return jsonify({"error": "User Exists"}), 400

    user_collection.insert_one({
        "fusername": fusername,
        "femail": femail,
        "fpassword": encrypted_password
    })

    token = jwt.encode({"femail": femail, "fname": fusername}, JWT_SECRET, algorithm="HS256")
    return jsonify({"status": "ok", "data": token}), 200

@app.route("/login-user", methods=["POST"])
def login_user():
    data = request.get_json()
    femail = data["femail"]
    fpassword = data["fpassword"]

    user = user_collection.find_one({"femail": femail})
    if not user or not bcrypt.checkpw(fpassword.encode('utf-8'), user["fpassword"]):
        return jsonify({"error": "Invalid Credentials"}), 401

    token = jwt.encode({"femail": user["femail"], "fname": user["fusername"]}, JWT_SECRET, algorithm="HS256")
    return jsonify({"status": "ok", "data": token}), 200

@app.route('/upload-pdf', methods=["POST"])
def upload_pdf():
    data = request.get_json()
    base64 = data["base64"]
    femail = data["femail"]

    user = pdf_collection.find_one({"femail": femail})
    if not user:
        pdf_collection.insert_one({
            "pdf": [base64],
            "femail": femail
        })
    else:
        pdf_collection.update_one(
            {"femail": femail},
            {"$push": {"pdf": base64}}
        )

    return jsonify({"Status": "ok"}), 200

@app.route('/getpdf/<string:femail>', methods=["GET"])
def get_pdf(femail):
    user = pdf_collection.find_one({"femail": femail})
    if not user:
        return jsonify({"status": "error", "error": "No Pdf Exists"}), 404

    return jsonify({"status": "ok", "data": user["pdf"]}), 200

if __name__ == "__main__":
    app.run(port=5000)
