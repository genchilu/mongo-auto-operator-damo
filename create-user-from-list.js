var file = cat("userlist")
var lines = file.split('\n')
for(var i = 0; i<lines.length; i++){
	var[user, role, database] = lines[i].split('\t')
	if(db.system.users.find({user:user}).count()==1) {
		print(user + " is exist")
	} else {
	print("create user:" + user + " at database: " + database + ", role is " + role)
		db=db.getSiblingDB(database)
		db.createUser({ user: user, pwd: user, roles: [ { role: role, db: database } ] });
	}
}
