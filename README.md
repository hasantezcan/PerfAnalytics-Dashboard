# PerfAnalytics Dashboard

PerfAnalytics **Dashboard** is part of PerfAnalytics ecosystem which collects and criticizes web performance data. 

PerfAnalytics **Dashboard** shows metrics that comes from [**PerfAnalytics API**](https://github.com/hasantezcan/PerfAnalytics-api)


<p align="center">
	<a href="https://hasantezcan.github.io/PerfAnalytics-Dashboard/">
		<img alt="preview.gif" src="_data/preview.gif" width="800">
  <br>
	</a>
	<em>Desktop preview</em>
</p>

[👉 Click for detailed showcase video](https://youtu.be/4Qj3StdAMDY) 

## Demo Sites for Metric Data

You can create analytics metric data from those sites:

- **`Test site 1:`** https://react-metrics.netlify.app/
- **`Test site 2:`** https://penguins-metrics.netlify.app/
- **`Test site 3:`** https://random-metrics.netlify.app/
## Tech Stack
- Developed with [React Typescript](https://www.typescriptlang.org/docs/handbook/react.html)
- Used [Ant design](https://ant.design/) as a UI library.
- Used [Recharts](https://recharts.org/en-US/) for metric charts
- Used [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) and [Jest](https://jestjs.io/) for testing
- Deployed with [GitHub pages](https://pages.github.com/).
- Used [GitHub Actions](https://github.com/actions) for CI/CD   

> **Dockerfile** is ready if you want to use the dockerized version you can use it!
## Features

- Initially, the dashboard shows the last **30 minutes metrics**. 
- You can **select a time range** from the range picker section.
- And you can **filter URLs** which want to see from the URL filter section.
  - This filter affects main charts and entries.
- You can see the **four main metrics** **with the chart** in the middle of the page. If there are **multiple URLs** exists you will see all of them in the chart initially but you can filter URLs if you want in later.
- You can see all metrics values in the **table from the bottom of the site.** This table shows every single analytics metric record coming from the client.  
  - You can **sort them as ascending and descending** from head of the table. 
  - And also you can **click the little plus button** from the start of the row and **expand the entires section**. These are the entry files that load with the site where metrics come from. You can see the type of file, response time and transfer size from here.
- This dashboard also has **responsive support**. You can watch metric records on mobile phones or any device.
- This application is written with **react typescript**. Whole structure covered with types.
- **Application** is **tested** with *`react testing library`* and *`jest`* you can see test coverage value in the next section.
## Code coverage

![code coverage](_data/2021-07-22-15-01-57.png)

## For Development

Install packages.
```bash
  yarn install
```

- Runs the app in the development mode.

```bash
  yarn start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

> **And also you can run tests like that:**

```bash
  yarn test
```

## For Deploy with GitHub pages

- You need to add this enviroment variable as a [GitHub secret key.](https://docs.github.com/en/actions/reference/encrypted-secrets). 

```bash
SKIP_PREFLIGHT_CHECK=true
```

> **This prevent croco warning!**

Set **gh-pages** branch as the main GitHub pages branch from repo GitHub pages settings.

After that GitHub action will work and the site will deploy under:

```bash
https://<username>.github.io/<repoName>/
```

> Click for detail github pages deployment tutorial is [here!](https://codeburst.io/deploying-a-react-app-using-github-pages-and-github-actions-7fc14d380796)
## Dev Logs

You can reach my [**`dev logs`**](DEVLOGS.md) about this project! 

## Commit message convention

I use [this](https://www.conventionalcommits.org) commit message conventions standard in this project.
> https://www.conventionalcommits.org

 
## License

[MIT](/LICENSE)