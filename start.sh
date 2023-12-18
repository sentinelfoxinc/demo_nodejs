#!/bin/sh
set -e
# pm2-runtime /app/index.js
npm i -g nodemon
npm start
# exec node /app/index.js $@