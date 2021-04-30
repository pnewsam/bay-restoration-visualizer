# Bay Area Restoration Visualizer

This is a SPA visualizing data on Bay Area restoration provided by the Bay Area's Metropolitan Transit Commission's Vital Signs project. To view the data, [visit this website](https://data.bayareametro.gov/dataset/Vital-Signs-Bay-Restoration-Bay-Area/mba6-sgwr).

![UI Screencap](README_assets/ui.gif)

## Overview

This project was initialized with [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html). It uses the following libraries.

- React 17
- Typescript
- [D3.js](https://github.com/d3/d3)
- [Bulma](https://bulma.io/)

D3.js is used for data handling and visualization. Bulma is a css framework, and was introduced primarily for baseline typography and easy responsivity.

Directory structure:

- `/components`: contains all UI; components are nested if they are only in their parent's context
- `/constants`: reused constants
- `/hooks`: custom hooks
- `/types`: reused type definitions

## Running the project

To run this project, clone the repo and install the dependencies.

```
git clone https://github.com/pnewsam/bay-restoration-visualizer.git
cd bay-restoration-visualizer/
yarn install
```

Then run the local server, and view it at `http://localhost:3000`.

```
yarn start
```

## Tests

To run the tests, run:

```
yarn test
```

## Planned Enhancements

Given more time, this simple visualization could be improved with the following enhancements:

- A line chart representing the cumulative change over time.
- Sorting functionality on the data table.
- Improved reusability for existing logic, especially `useChart` and `useTable`, which would make the integration of different data sets easier.
- Comprehensive testing, including proper integration tests with react-testing-library or cypress.
