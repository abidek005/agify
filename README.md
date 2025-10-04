Create a project folder 
Cd into the folder afigy-bdd

Initialize & install dependencies
npm init -y
npm install axios chai
npm install --save-dev typescript ts-node @cucumber/cucumber @types/node @types/chai

Create the relevant files 
- features – Contains feature files and step definitions  
- src/apiClient.ts – Helper to make API requests  
- package.json – Project dependencies and scripts  
- tsconfig.json – TypeScript configuration  

Run the command :- Npm test to verify test