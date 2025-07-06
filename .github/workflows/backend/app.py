from flask import Flask, request, jsonify
from datetime import date
from models import db, LevelEntry

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///qmms.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)
    with app.app_context():
        db.create_all()

    @app.route('/api/levels', methods=['POST'])
    def submit_levels():
        data = request.get_json(force=True)
        entries = []
        # Loop through each color and its level arrays
        for color, lvl in data.items():
            # Solid lines (4)
            for idx, price in enumerate(lvl['sLevels']):
                if price:
                    entries.append(LevelEntry(
                        date=date.today(),
                        color=color,
                        line_type='solid',
                        line_index=idx + 1,
                        price=float(price)
                    ))
            # Dashed lines (5)
            for idx, price in enumerate(lvl['dLevels']):
                if price:
                    entries.append(LevelEntry(
                        date=date.today(),
                        color=color,
                        line_type='dashed',
                        line_index=idx + 1,
                        price=float(price)
                    ))
        db.session.bulk_save_objects(entries)
        db.session.commit()
        return jsonify(success=True), 201

    return app

if __name__ == '__main__':
    app = create_app()
    app.run(port=5000)
