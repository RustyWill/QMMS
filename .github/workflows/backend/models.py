from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class LevelEntry(db.Model):
    __tablename__ = 'daily_levels'
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.Date, nullable=False, index=True)
    color = db.Column(db.String(10), nullable=False)
    line_type = db.Column(db.String(6), nullable=False)   # 'solid' or 'dashed'
    line_index = db.Column(db.Integer, nullable=False)    # 1–4 for solid, 1–5 for dashed
    price = db.Column(db.Float, nullable=False)

    def __repr__(self):
        return f"<LevelEntry {self.date} {self.color} {self.line_type}{self.line_index}: {self.price}>"
