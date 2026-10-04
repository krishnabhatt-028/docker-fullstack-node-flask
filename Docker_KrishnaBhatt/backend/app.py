from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.get("/")
def home():
    return jsonify({"service": "Flask backend", "status": "running"})

@app.get("/health")
def health():
    return jsonify({"service": "backend", "status": "ok"})

@app.post("/submit")
def submit():
    data = request.get_json(silent=True) or {}
    name = str(data.get("name", "")).strip()
    email = str(data.get("email", "")).strip()
    message = str(data.get("message", "")).strip()

    if not name or not email or not message:
        return jsonify({"success": False, "message": "Name, email and message are required."}), 400

    return jsonify({
        "success": True,
        "message": f"Thank you, {name}! Your form was processed by Flask.",
        "data": {"name": name, "email": email, "message": message}
    }), 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=False)