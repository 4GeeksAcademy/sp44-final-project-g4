#!/usr/bin/env bash
# exit on error
set -o errexit

npm install
npm run build

pipenv install

pipenv shell

flask db stamp head 

pipenv run migrate

pipenv run upgrade
