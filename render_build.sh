!/usr/bin/env bash
# exit on error
set -o errexit


npm install
npm run build

pipenv install

pipenv shell

flask insert-test-users 5

pipenv run migrate

pipenv run upgrade




