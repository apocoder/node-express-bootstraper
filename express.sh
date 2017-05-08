sudo npm install express-generator -g
express node-rest-api -e

cd node-rest-api && npm install
npm install mongoose --save
#for each time restarting
sudo npm install -g nodemon
#for mongo models
#var EmployeeSchema = new mongoose.Schema({
#  name: String,
#  address: String,
#  position: String,
#  salary: Number,
#  updated_at: { type: Date, default: Date.now },
#});

mkdir models
npm start