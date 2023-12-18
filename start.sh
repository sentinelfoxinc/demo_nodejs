#!/bin/sh
set -e
npm i -g pm2
pm2 start pm2_config.json