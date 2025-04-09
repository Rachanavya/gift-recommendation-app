const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const secret = crypto.randomBytes(64).toString('hex');
const envPath = path.join(__dirname, '.env');

// Check if .env exists
if (!fs.existsSync(envPath)) {
  fs.writeFileSync(envPath, `JWT_SECRET=${secret}\n`, 'utf8');
  console.log(`✅ .env file created with JWT_SECRET`);
} else {
  const envData = fs.readFileSync(envPath, 'utf8');
  if (!envData.includes('JWT_SECRET=')) {
    fs.appendFileSync(envPath, `\nJWT_SECRET=${secret}`, 'utf8');
    console.log(`✅ JWT_SECRET added to existing .env`);
  } else {
    console.log(`⚠️ JWT_SECRET already exists in .env`);
  }
}
