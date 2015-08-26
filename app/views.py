from flask import render_template, flash, redirect, session, url_for, request, g
from flask.ext.login import login_user, logout_user, current_user, \
    login_required
from app import app, db, lm, oid
from .forms import LoginForm
from .models import User, Survey
from datetime import datetime
from flask import jsonify

@lm.user_loader
def load_user(id):
    return User.query.get(int(id))


@app.before_request
def before_request():
    g.user = current_user
    if g.user.is_authenticated():
        g.user.last_seen = datetime.utcnow()
        db.session.add(g.user)
        db.session.commit()

@app.route('/')
@app.route('/index')
def index():
    return render_template('main_index.html')

@app.route('/login', methods=['GET', 'POST'])
@oid.loginhandler
def login():
    if g.user is not None and g.user.is_authenticated():
        return render_template('index_admin.html',
                           title='Home',
                           user=g.user)
                           
    form = LoginForm()
    if form.validate_on_submit():
        
        return oid.try_login(form.openid.data, ask_for=['nickname', 'email'])
    return render_template('login.html',
                           title='Sign In',
                           form=form,
                           providers=app.config['OPENID_PROVIDERS'])
   

@app.route('/create_new') 
@login_required                       
def new():
	user = g.user
	return render_template('administrationUI.html',user=user)
	
@app.route('/details')                       
def details():
	user = g.user
	return render_template('details.html',user=user)
	
@app.route('/create_new', methods=['POST'])
@login_required
def my_posts():
	data = str(request.get_json())
	words = data.split()
	if not words:
  		print "There are no audio/video links to add."
  	else:
		l = len(words)
		for i in range(l):
			survey = Survey(post = words[i], author = g.user)
		db.session.add(survey)
		db.session.commit()
	return data
	
	
@app.route('/takeasurvey')
def new_survey():
	return render_template('index_user.html')
	
@app.route('/takeasurvey', methods=['POST'])
def results() :
	data = str(request.get_json())
	words = data.split()
	print words
	return data	


@app.route('/survey_results')
@login_required
def survey_results():
	lst = [100, "song", "audio", 3]
	return jsonify(result=lst)         


@oid.after_login
def after_login(resp):
    if resp.email is None or resp.email == "":
        flash('Invalid login. Please try again.')
        return redirect(url_for('login'))
    user = User.query.filter_by(email=resp.email).first()
    if user is None:
        nickname = resp.nickname
        if nickname is None or nickname == "":
            nickname = resp.email.split('@')[0]
        user = User(nickname=nickname, email=resp.email)
        db.session.add(user)
        db.session.commit()

    login_user(user)
    return redirect(request.args.get('next') or url_for('index'))
  


@app.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('index'))
