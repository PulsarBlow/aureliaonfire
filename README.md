# Aurelia On Fire
An [Aurelia](http://aurelia.io/) application demonstrating how to use the [aurelia-firebase](https://github.com/pulsarblow/aurelia-firebase) plugin.

#### What is Aurelia ?

> An amazing platform leveraging the cutting edge capabilities of the web. 
--Mike Graham


#### What is Firebase ?

A powerful platform for your mobile or web application.

#### Aurelia-Firebase plugin ?

When you combine the best javascript application framework with the best realtime javascript backend, you can create extraordinary user experiences.

Learn more about [aurelia-firebase](https://github.com/pulsarblow/aurelia-firebase) plugin
  
## Running The App

To run the app, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.  
2. From the project folder, execute the following command:  

  `npm install`
  
3. Ensure that [Gulp](http://gulpjs.com/) is installed. If you need to install it, use the following command:  

  `npm install -g gulp`
  
4. Ensure that [jspm](http://jspm.io/) is installed. If you need to install it, use the following command:  

  `npm install -g jspm`
    
> **Note:** jspm queries GitHub to install semver packages, but GitHub has a rate limit on anonymous API requests. It is advised that you configure jspm with your GitHub credentials in order to avoid problems. You can do this by executing `jspm registry config github` and following the prompts.
5. Install the client-side dependencies with jspm:  

  `jspm install -y`
  
> **Note:** Windows users, if you experience an error of "unknown command unzip" you can solve this problem by doing `npm install -g unzip` and then re-running `jspm install`. 

6. To run the app, execute the following command:

  `gulp watch`
  
7. Browse to [http://localhost:9000](http://localhost:9000) to see the app. You can make changes in the code found under `src` and the browser should auto-refresh itself as you save files.

> **Note:** At present there is a bug in the HTMLImports polyfill which only occurs on IE. We have submitted a pull request to the team with the fix. In the mean time, if you want to test on IE, you can work around the issue by explicitly adding a script tag before you load system.js. The script tag should look something like this (be sure to confirm the version number):

```html
<script src="jspm_packages/github/webcomponents/webcomponentsjs@0.5.2/HTMLImports.js"></script>
```

