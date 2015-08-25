from app import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nickname = db.Column(db.String(64), index=True, unique=True)
    email = db.Column(db.String(120), index=True, unique=True)
    surveys = db.relationship('Survey', backref='author', lazy='dynamic')

    
    def is_authenticated(self):
        return True

    def is_active(self):
        return True

    def is_anonymous(self):
        return False

    def get_id(self):
        try:
            return unicode(self.id)  # python 2
        except NameError:
            return str(self.id)  # python 3

    def __repr__(self):
        return '<User %r>' % (self.nickname)
        
    
    
class Survey(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    post1 = db.Column(db.String(140))
    post2 = db.Column(db.String(140))
    post3 = db.Column(db.String(140))
    post4 = db.Column(db.String(140))
    post5 = db.Column(db.String(140))
    post6 = db.Column(db.String(140))
    post7 = db.Column(db.String(140))
    post8 = db.Column(db.String(140))
    post9 = db.Column(db.String(140))
    post10 = db.Column(db.String(140))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    def __repr__(self):
        return '<Questions %r>' % (self.post1)
        
        
        