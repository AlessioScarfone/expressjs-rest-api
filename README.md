# Simple REST API with NodeJS and Express

Start with `npm run start`

## Resources: 

- [REST API Guide](https://dev.to/drminnaar/rest-api-guide-14n2)
- [HTTP Methods](https://restfulapi.net/http-methods/)
- [Best practices for REST API design](https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/?utm_source=linkedin&utm_medium=social&utm_campaign=so-blog)


## NOTE

### Start Project
```bash
    npm init
    npm install express --save
    npm install morgan --save
    npm install babel-cli babel-preset-env babel-loader babel-core --save-dev
    npm install --save-dev nodemon
    npm install --save-dev dotenv
    mkdir test-request middleware routes
    echo PORT=3001 > .env
    touch index.js
```

### Useful Scripts
```js
"start": "nodemon index.js --exec babel-node --presets babel-preset-env"
```

### DOTENV
```js
// https://www.npmjs.com/package/dotenv
// CREATE A FILE CALLED: .env 
// PORT=3001

import dotenv from 'dotenv'
dotenv.config()

//use variable:
process.env.PORT

```
