## FrogHelper
🐸⚙️ This is Helper Frog, He is a telegram bot that will help groups with simple problems

### What does FrogHelper do?
You can check the available commands in this [file](https://github.com/chicofariasneto/FrogHelper/blob/master/src/helpers/commands) 

### How can i use it?
If you wanna use it, on telegram, you have to add it to a group, and send /start. This command will insert your group, and allow the bot to save some infos, next step is make all users send /join. This command will save the user's id.

If you had sucessfully, you can enjoy the next commands.

* /all "message" - This command tagged all users and repeat a message sent.
* /random - This command send a random order of users.
* /user - This command send a random user.

Note: I'm still developing this bot, so if you have some suggestion, it's always welcome.

### How can i run?
If you wanna programming, or run the code, you'll need to provide a postgresql database... Put your informations about your postgresql's connection in this [file](https://github.com/chicofariasneto/FrogHelper/blob/master/src/database/connection.js).

How we have a nodeJs app, you gonna need to install the deppendencies use ``` npm install ``` (to use nodemon ``` npm install --only-dev ```).

It's done, now just run the app with nodemon, ``` npm start ``` or normal run ``` node src/index.js ```.

### Author

Any suggestion, or some help, contact me [chicofariasneto](https://github.com/chicofariasneto)