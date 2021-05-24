# Air Quality Index (AQI) Tracker

An air quality index (AQI) is used by government agencies[1] to communicate to the public how polluted the air currently is or how polluted it is forecast to become. You can read more about it in detail [here](https://en.wikipedia.org/wiki/Air_quality_index).

# About the project

This project is a Single Page Application (SPA) that shows the live tracking of AQI of different cities.

The Application is hosted on [Netlify](https://www.netlify.com) and is served on - https://live-aqi-tracker.netlify.app

## Tech Stack

- [React](https://reactjs.org)
- [Redux](https://redux.js.org/) - For state management
- [React-chartjs-2](https://reactchartjs.github.io/react-chartjs-2/#/) - graphing library to display AQI graphically


## Running the Project
```shell
$ git clone https://github.com/sumitd94/LIVE-AQI.git
$ cd LIVE-AQI
$ yarn
$ yarn start
```

Here, the project uses [yarn](https://yarnpkg.com/) as the package manager. If you are using [npm](https://www.npmjs.com/) as the package manager, then follow these steps to run the project locally

```shell
$ git clone https://github.com/sumitd94/LIVE-AQI.git
$ cd LIVE-AQI
$ npm i
$ npm start
```

When you run the command `yarn start` or `npm start`, this will start your local servers at `http://localhost:3000` where you can view the project

This is how the Home Page looks like. Clicking on each `City` will show the AQI in the `line chart` (as shown in the right hand side of the table)

![image](https://user-images.githubusercontent.com/29303618/119304416-d62e5e00-bc84-11eb-92bd-7d4eb9a05c33.png)

There is also a city wise comparison Bar Chart towards the bottom of the screen which gets updated real-time

![image](https://user-images.githubusercontent.com/29303618/119304575-1097fb00-bc85-11eb-838d-7374c74a4cf0.png)


> Its also mobile responsive 📱


## Time Taken

It took me 1 day to build this entire thing. In this 1 day I did the following things

- Read about Web Sockets. (I was not very much experienced with Web Sockets, So I had to read about it before I could use it)
- Planned on how the component sructure should look like and how the redux store should look like.
- Coding part
- Documenting the README


During this project, the main learning for me was implementation of web sockets at client level and showing the data real time 🎉🎉🎉
