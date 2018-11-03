in one terminal:

$ python manage.py runserver --settings=django_config.settings.local

and then in another
$ npm run watch

Make sure your Postgres App is running if in the terminal.  Otherwise for Docker, run

$ docker-compose -f docker-compose-development.yml up
