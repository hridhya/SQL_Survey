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
    post = db.Column(db.String(140))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    results = db.relationship('Results', backref='survey_no.', lazy='dynamic')

    def __repr__(self):
        return '<Questions %r>' % (self.post)
        
        
class Results(db.Model):
     id = db.Column(db.Integer, primary_key = True)   
     ans1 = db.Column(db.String(140)) 
     ans2 = db.Column(db.String(140))   
     ans3 = db.Column(db.String(140))   
     ans4 = db.Column(db.String(140)) 
     result_id = db.Column(db.Integer, db.ForeignKey('survey.id')) 
     
     def __repr__(self):
        return '<Answer %r>' % (self.ans1)   