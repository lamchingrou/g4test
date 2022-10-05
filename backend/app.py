from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:' + \
                                        '@localhost:3306/ljps_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ENGINE_OPTIONS'] = {'pool_size': 100,
                                           'pool_recycle': 280}

db = SQLAlchemy(app)

CORS(app)

class Staff(db.Model):
    __tablename__ = 'staff'

    Staff_ID = db.Column(db.Integer, primary_key = True) #Staff ID for staff
    Staff_FName = db.Column(db.String(50), nullable=False) #First Name
    Staff_LName = db.Column(db.String(50), nullable=False) #Last Name
    Dept = db.Column(db.String(50), nullable=False) #Team or dept staff belongs to
    Email = db.Column(db.String(50), nullable=False) #Email Address
    Role = db.Column(db.Integer, db.ForeignKey("role.Role_ID"), nullable=False) #Role of user in the system (e.g Admin, User, Manager)

    def to_dict(self):
        """
        'to_dict' converts the object into a dictionary,
        in which the keys correspond to database columns
        """
        columns = self.__mapper__.column_attrs.keys()
        result = {}
        for column in columns:
            result[column] = getattr(self, column)
        return result


class Course(db.Model):
    __tablename__ = 'course'

    Course_ID = db.Column(db.String(20), primary_key = True) #Course ID
    Course_Name = db.Column(db.String(50), nullable = False) #Name of course
    Course_Desc = db.Column(db.String(255)) #Course description
    Course_Status = db.Column(db.String(15)) #Course Status: Active or Retired, if status is still active, it will still be showed to user
    Course_Type = db.Column(db.String(10)) #Course Type: Internal or External If the course in done in-house of external course
    Course_Category = db.Column(db.String(50)) #The classification of the course, E.g. Technical, HR, Finance
    
    def to_dict(self):
        columns = self.__mapper__.column_attrs.keys()
        result = {}
        for column in columns:
            result[column] = getattr(self, column)
        return result

class Role(db.Model):
    __tablename__ = 'role'

    Role_ID = db.Column(db.Integer, primary_key = True)
    Role_name = db.Column(db.String(20), nullable = False) #e.g. 1-Admin, 2-User, 3-Manager

    def to_dict(self):
        columns = self.__mapper__.column_attrs.keys()
        result = {}
        for column in columns:
            result[column] = getattr(self, column)
        return result

class Registration(db.Model):
    __tablename__ = 'registration'

    Reg_ID = db.Column(db.Integer, primary_key = True) #Registration ID
    Course_ID = db.Column(db.String(20), db.ForeignKey("course.Course_ID")) #Course ID
    Staff_ID = db.Column(db.Integer, db.ForeignKey("staff.Staff_ID")) #Staff ID
    Reg_Status = db.Column(db.String(20), nullable = False) #If the staff is reg for the course or waitlist or rejected
    Completion_Status = db.Column(db.String(20), nullable = False) #If the staff have completed the course

    def to_dict(self):
        columns = self.__mapper__.column_attrs.keys()
        result = {}
        for column in columns:
            result[column] = getattr(self, column)
        return result

db.create_all()

# Get Staff by ID
@app.route("/staff/<int:staff_id>")
def staff_by_id(staff_id):
    staff = Staff.query.filter_by(Staff_ID=staff_id).first()
    if staff:
        return jsonify({
            "data": staff.to_dict()
        }), 200
    else:
        return jsonify({
            "message": "Staff not found."
        }), 404

db.create_all()

# Get Course by ID
@app.route("/course/<string:course_id>")
def course_by_id(course_id):
    course = Course.query.filter_by(Course_ID=course_id).first()
    if course:
        return jsonify({
            "data": course.to_dict()
        }), 200
    else:
        return jsonify({
            "message": "Course not found."
        }), 404

db.create_all()

# Get Role by ID
@app.route("/role/<int:role_id>")
def role_by_id(role_id):
    role = Role.query.filter_by(Role_ID=role_id).first()
    if role:
        return jsonify({
            "data": role.to_dict()
        }), 200
    else:
        return jsonify({
            "message": "Staff not found."
        }), 404

db.create_all()

# Get Registration by ID
@app.route("/registration/<int:reg_id>")
def registration_by_id(reg_id):
    registration = Registration.query.filter_by(Reg_ID=reg_id).first()
    if registration:
        return jsonify({
            "data": registration.to_dict()
        }), 200
    else:
        return jsonify({
            "message": "Registration not found."
        }), 404


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)