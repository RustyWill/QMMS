from datetime import date
from backend.models import db, LevelEntry
from flask import Flask

def init_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///qmms.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)
    return app

def load_daily_levels():
    app = init_app()
    with app.app_context():
        today = date.today()
        records = LevelEntry.query.filter_by(date=today).all()
        features = {}
        for rec in records:
            key = f"{rec.color}_{rec.line_type[0]}{rec.line_index}"
            features[key] = rec.price
        return features

if __name__ == '__main__':
    feats = load_daily_levels()
    print(feats)
