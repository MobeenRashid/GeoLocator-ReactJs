
## Redux State Container
This application uses redux state container to store and manage application state redux store.
As this is a simple demo application, redux is only introduced to demonstrate how to integrate redux in enterprise react applications.

##React Router
This application uses ###react-router for routing react components. As this is demo application, react router is only introduced to demonstrate how to impelment and manage component routing in enterprise react applications. To learn more about react-router, check the offical [docs](https://reacttraining.com/react-router/web/example/basic) 

##Jest
This application uses ###Jest testing framework developed by Facebook. Jest is packed with many cool features like snapshot testing, easy mocking, and fleunt assertions. Jest is a recommended framework to test ReactJs applications and its almost config free, on most JavaScript projects. To learn more about Jest, check the offical [docs](https://jestjs.io)

##EnzymeJs
Enzyme is a JavaScript testing utility for React. Enzyme makes it easier to assert, manipulate, and traverse your React Components. Both Jest and Enzyme are specifically designed to test React applications, Jest can be used with any other Javascript app but Enzyme only works with React. Enzyme makes react component testing very easy. To learn more about test, check the offical [docs](https://airbnb.io/enzyme/docs/api/) 

##Google Map API Key
This application don't store Google Map API key in app config, environment varaibles or anywhere in application code for security reasons. The app loads the api key from server and only keeps it in memory as long as the application is running. The application don't store the api key in web storage and cookies as these places can also be inspected using developer tools.


In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
