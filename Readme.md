# Mongo - Express - Express React Views Template

## USING THIS TEMPLATE:

- Make sure to run npm install

- Environment Files are in a .env, create with your env variables. Here are some needed variables for this template to get you started. You can rename template.env into .env to get started.

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/
DB_NAME=myDatabase
SECRET=cheese
```

## Commands

`npm run dev` run dev server

`npm run start` run in production more

- For production you should add a store property to sessions that'll store the session in redis or mongo. See the express-session documentation to learn more.

- session auth built in, the user model is in **models/auth** and the auth routes are in **controllers/auth**

- If you want the connect.session() warning to go away you can configure a mongo session store using the following library => https://www.npmjs.com/package/connect-mongo

MAKE SURE TO JOIN THE SLACK AND DISCORD COMMUNITIES AT DEVNURSERY.COM
