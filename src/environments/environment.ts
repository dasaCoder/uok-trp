// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  // Initialize Firebase
  firebase: {
    apiKey: "AIzaSyCHVnqa07g2nQ41jboxGP-5HDzwWcFWdl0",
    authDomain: "uok-trp.firebaseapp.com",
    databaseURL: "https://uok-trp.firebaseio.com",
    projectId: "uok-trp",
    storageBucket: "uok-trp.appspot.com",
    messagingSenderId: "710668904466"
  }
};
