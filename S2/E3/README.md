# Installations

- npm init or npm init -y
- npm i nodemon dotenv
- npm i express json cors cookie-parser

# Configurations

- package.json => {"type": "module"} -> add this for using ESM modules

# Steps

- create a folder
- install required packages mentioned above
- create a server (const app = express())
- listen on a port (say on 3000)
- write request handlers for '/', and '/about'

# Research and read more:

- difference b/w package.json vs package-lock.json ?
- ^4.10.3 vs ~4.10.3
- symantic versioning
- npm vs npx
- If a package is intalled globally, will it be included in your app's package.json ?
  - Ans: No

# Ref:

- https://expressjs.com/en/starter/installing.html
- https://docs.npmjs.com/cli/v11/configuring-npm/package-json
