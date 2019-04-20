// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  // Initialize Firebase
  firebase: {
    apiKey: "AIzaSyBFfEltKVy1NHI6m0GkNK2PQQaDe4JBRHY",
    authDomain: "test-11a39.firebaseapp.com",
    databaseURL: "https://test-11a39.firebaseio.com",
    projectId: "test-11a39",
    storageBucket: "test-11a39.appspot.com",
    messagingSenderId: "846251089169"
  }
};
