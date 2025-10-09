# Node.js-concept

What is Node.js ? 
- Nodejs not a programming language.
- Nodejs use for executing code of JS without Browser.
- Node.js is runtime environment for JS.
- Node.js we can run javascript outside to the browser ( like Server, window, mac and Linux etc. )
- Javascript run inside the browser.

 Where need JS outside browser ?
 - Web browser run o client server.
 - JS do not handle things on Server.
 - can not connect JS with Database directly.
 - Can not handle file system etc.
 - have to run Javascript on Browser & Node help for this.

Why need Node.js ?
- Undefined language.
- High performance.
- Good for Real-time application.
- Good for Data Streaming.

How to use it Fullstack and Frontend Technoolgy ? 
- Make API in Node.js
- Integrate API with frontend technology
- Backend + Frontend = Fullstack Development.

History of node.js :
- First release - May27, 2009.
- Current version - V22.16.0
- Written in JS, C & C++
# Part 3 
<img width="696" height="332" alt="Screenshot 2025-08-22 145246" src="https://github.com/user-attachments/assets/77ebea56-1be4-44c3-8f70-c4b707329930" />

# Part 4 Import Points and Node.js role
What is server side & Client side scripting ?
<img width="681" height="276" alt="Screenshot 2025-08-23 110813" src="https://github.com/user-attachments/assets/3d7ca16f-9e7c-410d-9d83-bf08d76b9534" />

- Basicaly Javascript working in Browser that reason developer called JavaScript language is a Client side scripting.
- Java, PHP & pythone etc. language working in Server side.
- Nodejs help for JS working in Server side and also runtime environment.
- JavaScript code executing in server side using Node.js technolgy.

How node.js use JavaScript ?

<img width="1168" height="440" alt="Screenshot 2025-08-23 113143" src="https://github.com/user-attachments/assets/37b28872-2310-498e-ad11-a2c3a9aef493" />

- Different browser wise have different engine.

What excetly do with nodejs ?
- Nodejs is mostly used for API development.
- API Send and Recive data between any two language.
- After make API in nodejs, API can use in front technologies, Mobile technologies and any other platform.
<img width="1194" height="354" alt="Screenshot 2025-08-23 112316" src="https://github.com/user-attachments/assets/97a03f77-d4d5-4f91-b4df-14351faa0a8d" />

Why need API ?

<img width="802" height="543" alt="Screenshot 2025-08-23 112426" src="https://github.com/user-attachments/assets/3e30c048-0b02-4b66-9388-1fffafc783a0" />

# Part 5 Fundamental for Nodejs
- Variable and Functions.
- Conditions and Loops.
- Array and Objects.

<img width="710" height="362" alt="Screenshot 2025-10-09 112748" src="https://github.com/user-attachments/assets/249bb154-ae9f-497a-9a67-4d0c2ea895db" />

- Import other file in react using {import}.
- But, Node.js not supported the {import}.
- Node exported file import using { require('./fileName'); }

import file :
<img width="510" height="92" alt="Screenshot 2025-10-10 024101" src="https://github.com/user-attachments/assets/5a7d5aab-271b-4c83-9e20-b8db41554e64" />

export file : 
<img width="522" height="127" alt="Screenshot 2025-10-10 024114" src="https://github.com/user-attachments/assets/ccdd994b-55a6-4cbb-a638-65cd73a92b92" />

# Part 6 Core Modules & Object
- Modules are the block of code and they archive specific function.
<img width="573" height="311" alt="Screenshot 2025-10-10 002127" src="https://github.com/user-attachments/assets/10162a71-8424-4214-ac1f-75eb4469c781" />

File system operation

<img width="1360" height="278" alt="Screenshot 2025-10-10 024559" src="https://github.com/user-attachments/assets/502390a6-33ae-4ad8-ba35-3941545881f8" />

Operating System utilits 
<img width="705" height="187" alt="Screenshot 2025-10-10 025848" src="https://github.com/user-attachments/assets/b47ca601-79fa-499e-b25c-8fb3e35eb664" />

Object - 
- Globle object is an object that is available in all modules by default.
- do not need to require to use it.

Interview Question - 
What is difference between core modules & Object ?
- Core module use it require through.
- Objec doesn't needed require.

# Part 7 Create Server
<img width="662" height="242" alt="Screenshot 2025-10-10 030649" src="https://github.com/user-attachments/assets/6432b56c-7984-4c17-b49b-2a776daa241c" />

- createServer() are callback function and have two parameter request & Respnose.
- listen(4800) are localhost number(4800),(1234) according yourself.
- response.end()

How to work Server ? 
<img width="681" height="276" alt="Screenshot 2025-08-23 110813" src="https://github.com/user-attachments/assets/3ebaa3ee-79f9-4d22-85f2-b677da947e8c" />

Interview Question 
How to create server in node ? (http).
Which core module package through create server ? (http).

# Part 8 External package and package.json
npm i colors

<img width="710" height="243" alt="Screenshot 2025-10-10 031605" src="https://github.com/user-attachments/assets/c042cefb-422d-41fc-818c-a4536100b905" />
<img width="1042" height="187" alt="Screenshot 2025-10-10 031658" src="https://github.com/user-attachments/assets/111de8d2-20c9-495d-a299-4fb71de8ac9e" />

What is package.json ? 
- package.json are information about project related data store. example - version, projectName, dependencies(external package install(there)).
- package-lock.json & node_module file have more information about external package.

How to create own package.json ?
- npm init 

[ Note : If node_module file exsist then don't push on GitHub ]

# Part 9 Nodemon package 
- Nodemon help for ignoring server restart process or nodemon file is runtime state.

Install Nodemon package :
- npm i(install) nodemon
- npx nodemon fileName

Interview Question
Do the create 2 server ?
- Yes, but localhost is not same.

Which package helpful for server not needed restart for nomally changes ?
- Nodemon package

# Part 10 Understand Server Response
<img width="681" height="276" alt="Screenshot 2025-08-23 110813" src="https://github.com/user-attachments/assets/030be8ac-0636-4bc1-99ae-3336b55051d5" />

Pass variable & Function data with response
<img width="1691" height="619" alt="Screenshot 2025-10-10 033252" src="https://github.com/user-attachments/assets/701e4e6d-385c-4ddc-88ec-d46ee6192039" />

Note - Server store in variable is possible.

Interview Question 
How to end response ? (end())
How to end process of server ?
- process.exit() is nodemon runtime state process exist.
