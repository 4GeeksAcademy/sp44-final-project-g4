!/usr/bin/env bash
# exit on error
set -o errexit

pipenv run migrate

pipenv run upgrade

npm install
npm run build

pipenv install




