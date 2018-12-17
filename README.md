# typeorm-passport-boilerplate

## Quick Start
#### 1. Clone this repository
`$ git clone https://github.com/Pepewitch/typeorm-passport-boilerplate.git`
#### 2. Enter the directory
`$ cd typeorm-passport-boilerplate`
#### 3. Install packages
Either npm or yarn is okay. Choose one.

`$ npm install` or `$ yarn`
#### 4. Setup database
- Copy any files with `.example` namespace
- Edit those files with your own data
- Remove `.example` in their names.
```
// ormconfig.json
{
  "type": "mysql",
  "host": "localhost",      <---- Put your own database information here
  "port": 3306,             <----
  "username": "username",   <----
  "password": "password",   <----
  "database": "test",       <----
  "synchronize": true,
  "logging": false,
  "entities": ["dist/entity/**/*.js"],
  "migrations": ["dist/migration/**/*.js"],
  "subscribers": ["dist/subscriber/**/*.js"],
  "cli": {
    "entitiesDir": "src/entity",
    "migrationsDir": "src/migration",
    "subscribersDir": "src/subscriber"
  }
}

```
```
// .env
PORT=80                    <---- Put your application listen port
SESSION_SECRET=SECRET      <---- Put your express-session secret
```
#### 5. Create your Entity model
Create them for yourself in `src/entity` directory using [typeorm](https://github.com/typeorm/typeorm)
#### 6. Enjoy :)
## Usage
### Development

```
$ npm run watch
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
