# Grafana Static Data Source Variable Plugin

[![CircleCI](https://circleci.com/gh/criteo/grafana-static-variables-datasource/tree/main.svg?style=svg)](https://circleci.com/gh/criteo/grafana-static-variables-datasource/tree/main)

This plugin allows you to serve static variables for your dashboards

## How to use
Create a new datasource and paste a valid Map<string,string[]> in the json field of the configuration page  
```
{ 
    "regions": ["Europe", "America", "Asia"], 
    "datacenters": ["Paris", "Milan", "NewYork", "Vancouver", "Sidney", "Singapour"] },
    "Europe": ["Paris", "Milan"],
    "America": ["NewYork", "Vancouver"],
    "Asia": ["Sidney", "Singapour"]
}
```

Now add a new variable to one of your dashboards and select the datasource you just created  
You can use any of the map key in the query field to return the associated list of values    

This works pretty well with the new value groups/tags feature

## Getting started
1. Install dependencies
```BASH
yarn install
```
2. Build plugin in development mode or run in watch mode
```BASH
yarn dev
```
or
```BASH
yarn watch
```
3. Build plugin in production mode
```BASH
yarn build
```

## Learn more
- [Build a data source plugin tutorial](https://grafana.com/tutorials/build-a-data-source-plugin)
- [Grafana documentation](https://grafana.com/docs/)
- [Grafana Tutorials](https://grafana.com/tutorials/) - Grafana Tutorials are step-by-step guides that help you make the most of Grafana
- [Grafana UI Library](https://developers.grafana.com/ui) - UI components to help you build interfaces using Grafana Design System
