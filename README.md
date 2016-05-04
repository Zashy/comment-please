# All Insurance page

## Contribution Guide 
This project is hosted in two places:

GitLab:
 https://git.nmlv.nml.com/nmc/all-insurance
 
TFS:
http://ntapth4665m00/NMCollection/GROUPP1/Trunk/NMConnect/NM.Connect/NM.Connect.Main/NM.Connect.Main/nmlv-cx/all-insurance

To gain access to our GitLab group you must be a part of PDL: AG-CDLVHUB-TEAM

To commit changes you must submit a merge request.


## Features

React, Redux, Webpack, PostCSS, Babel 6, npm scripts ...

#### Development

``` bash
$ npm run watch
```

#### Build

``` bash
$ npm run build:dev
```

#### Linting

``` bash
$ npm run lint
```

## Structure

``` bash

├── dist                    # built dist
│   └── css                 
│   └── images              
│   └── js                  
│   └── index.html          
├── src                     # source
│   └── css                # css/sass, compiled w/postcss
│   └── images             # .png,.svg,.gif optimized w/webpack
│   └── js                 # react/redux source
│     ├── actions          # redux actions, w/thunk
│     ├── components       # react components
│       └── Root.js        # App  entry
│       └── App.js         #
│     ├── constants        # constants
│     ├── reducers         # reducers
│     ├── selectors        # selectors, using reselect
│     ├── store            # store, w/devtools & prod config
│     ├── utils            # utilities/helpers, support immatable
│     └── index.js         # app entry
│   └── index.html         # app shell
├── .babelrc                # babel config
├── .eslintrc               # eslint config
├── .gitignore              # git config
├── .npmrc                  # npm config
├── devServer.js            # webpack/express dev server
├── package.json            # npm
├── README.md               # installation, usage
├── webpack.config.js       # config for dev, hot loading, devtools, etc.

```

## Tech stack

  - [React](http://facebook.github.io/react/)
  - [Redux](https://github.com/gaearon/redux)
    - [redux-history](https://github.com/ezekielchentnik/redux-history)   
    - [redux-analytics](https://github.com/markdalgleish/redux-analytics)
    - [redux-thunk](https://github.com/gaearon/redux-thunk)   
    - [reselect](https://github.com/rackt/reselect)
  - [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch)
  - [Webpack](http://webpack.github.io/)
  - [immutable](https://facebook.github.io/immutable-js/)
  - [redux-thunk](https://github.com/gaearon/redux-thunk)
  - [keyMirror](https://github.com/STRML/keyMirror)
  - [express](http://expressjs.com/)
    - webpack-dev-middleware, webpack-hot-middleware
  - [postcss](https://github.com/postcss/postcss)
    - precss, autoprefixer
  - [babel](https://babeljs.io/)
    - react-transform-hmr, redbox-react, es2015, react
  - [esLint](http://eslint.org/)
  - [mocha](https://mochajs.org/)
    - jsdom

## License

MIT


