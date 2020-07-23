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

### License

MIT License

Copyright (c) 2020 Francisco Rodrigues

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
