> This is the `Dev Log` about `PerfAnalytics` project!  
> This documentation keeps my research and ideas.  
> Written by **[@hasantezcan](https://github.com/hasantezcan)** 

## DAY 1 - 03 July 2021

- Created figma project workflow!
  > https://www.figma.com/file/zKuVBxuDzzYsNfSERA5Vxn/PerfAnalytics?node-id=0%3A1

- Researched **analytics terms**: 

**1. Measuring Web Performance in 2021: The Definitive Guide** (BLOG)
  > https://requestmetrics.com/web-performance/measure-web-performance

  - The old performance measure way is **Page Load Time**  
  - The new way is **The Core Web Vitals** (In 2019)  
      > - https://github.com/GoogleChrome/web-vitals  
      > - https://web.dev/vitals/  
    

  ### The Core Web Vitals
  `You can reach whole value with` [**`this API.`**](https://web.dev/user-centric-performance-metrics/#in-the-lab)
  - First Contentful Paint (**FCP**)
    - > https://web.dev/fcp/#measure-fcp-in-javascript
  - Largest Contentful Paint (**LCP**)
    - > https://web.dev/lcp/#measure-lcp-in-javascript
    
    > _**Warning**:_
    > This code shows how to log largest-contentful-paint entries to the console, but measuring LCP in JavaScript is more complicated. See below for details:

    > **web.dev** suggest to use **web vital lib** instead of measure manually

  - Cumulative Layout Shift (**CLS**)
    - > https://web.dev/cls/#measure-cls-in-javascript
  - First Input Delay (**FID**)
  - Time to First Byte (**TTFB**) - Reduce server response times
    - > https://web.dev/time-to-first-byte/
  - Time to Interactive (**TTI**)
  - Total Blocking Time (**TBT**)
  - Speed Index



**2. Measure performance with the `RAIL model!`** What is the RAIL model that?
  > https://web.dev/rail/

  **User-centric** performance model. We care about humans and design the sites for humans. 
  So we set the performance values according to humans react while building websites.
  RAIL name comes from **Response, Animation, Idle, Load**

  > **!NOTE:** The important thing; the response times table shows us How the human being reacts to the latency!  
  > **!NOTE:** Human react can be variable according to device or internet connection value.


**3. Analyze runtime performance**
  > https://developer.chrome.com/docs/devtools/evaluate-performance/

  - In this articale your will learn how to use performance tab in chrome dev tools 

**4. Optimize website speed**
  > https://developer.chrome.com/docs/devtools/speed/get-started/

  - In this article you will learn the basic of performance terms and basic usage!

---

## DAY 2 - 04 July 2021

**`❓ Question:`** Can I use directly the  **[web vitals package](https://github.com/GoogleChrome/web-vitals)** to get performance parameters?

---

**`⁉️ ISSUE:`** I have an issue with the **web vitals package** console logs. Did not shows on the console. They are coming as a second and disappears immediately!

```html
<script src="https://unpkg.com/web-vitals/dist/web-vitals.iife.js"></script>
  <script>
    const { getCLS, getFID, getLCP, getTTFB } = webVitals;
    getCLS(console.log);
    getFID(console.log);
    getLCP((metric) => {
      console.log("test");
      console.log(`getLCP metric`, metric.value);
    });

    getTTFB((metric) => {
      // Calculate the request time by subtracting from TTFB
      // everything that happened prior to the request starting.
      const requestTime = metric.value - metric.entries[0].requestStart;
      console.log("Request time:", requestTime);
    });
  </script>
```

---

**`⁉️ ISSUE:`** 
    - The TTFB value show like a **`TTFB time: 2.9349999967962503`** 
    - but my manual value is **`Manual TTFB time: 1`**
> I want like a web vitals TTFB value!

**`✅ SOLVED:`** with the `performance.getEntriesByType()` 

- [**PerformanceTiming.responseStart**](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/responseStart) is deprecated! therefore I prefer to use [**performance.getEntriesByType()**](https://developer.mozilla.org/en-US/docs/Web/API/Performance/getEntriesByType)
- **`✍️ NOTE:`** The **Performance interface** provide the **performance.getEntriesByType()**

> Inspired from [here](https://dev.to/aumayeung/measuring-navigation-time-with-the-javascript-navigation-api-5a6i)

---

**`✍️ NOTE:`** I found an API named [PerformanceNavigationTiming](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming) but this is not working. I think the reason was not working may be that feature is still being Experimental feature. 


**`⁉️ ISSUE:`** What is the **DOM load value?** I calculated as `0` or `500ms`. I have to learn it!

--- 

**`🌟 Usefull paper:`** [Reading performance data with JavaScript.](https://aysner.at/blog/reading-performance-data-with-java-script/)
  - This blog post gives essancial information about `Performance API v1` and `Performance API v2`

### **`🖖 Day summary:`**
  - The performance information that I need is almost ready.
  - I am not sure about some values validation but I am working on it.
  - I decided to move on **google sheets** and **google scripts** while building API.

---

## DAY 3 - 05 July 2021

I have just started to build API with nodejs and MongoDB. Why I didn't continue with google sheets and google scripts because I realized I couldn't have an opportunity to test my code and also I build the whole API side to the Cloud therefore I can't commit my changes in this repository. Maybe that was a cool idea but for this case, I will stay with nodeJs and mongo DB.

### **`🖖 Day summary:`**
  - Refactored whole project directories 
  - Started to the API with NodeJs and Mongo DB

---
## DAY 4 - 06 July 2021

Yesterday I started to build API with JS but after that, I thought I can go with **typescript**. I spend a little resource time learning usage typescript on the server-side. And voilà! 🎉  I created the metrics post request today. From now on, I will connect the nodejs package with API.

### **`🖖 Day summary:`**
  - Rebuild api with typescript
  - Build `post api/metrics` endpoint 
  - Connect API with Mongo DB

---

## DAY 5 - 07 July 2021 

Today I connected PerfAnalytics JS with PerfAnalytics API.
Also made some improvements PerfAnalytics JS side.

---
## DAY 9 - 11 July 2021

Today I start to build **PerfAnalytics.Dashboard** with react-typescript.

I will move on with antDesign for fast development. 


**Which graph chart ?**  
I made a little search for decided which one is best option for me.

I found couple of blog post about that topic.[[0]](https://dev.to/syakirurahman/7-best-react-chart-graph-libraries-how-to-use-them-with-demo-32ak)


I liked [chartjs](https://www.chartjs.org/)  but this has not a React support. Actually, it was but now [deprecated](https://github.com/reactjs/react-chartjs).

So I decided to move on with the other option ["recharts"](https://recharts.org/en-US/examples/SimpleLineChart)


---

**`❓ Question:`** What is **uv**, **pv**, **amt**?

> {name: 'Page A', uv: 400, pv: 2400, amt: 2400}

I see these values inside of the reCharts graph data.

> [Q: What is uv and pv? #171](https://github.com/recharts/recharts/issues/171) 
> [Q: What is the 'amt' property being used in all example data sets ? #467](https://github.com/recharts/recharts/issues/467) 

```
amt = amount
pv = PageView
uv = UniqueVisitor
```
---

## 15 July 2021 

### Time synchronization with `ISO 8601`

My database metrics recored with this format 

```json
  createdAt: 2021-07-15T07:16:27.715+00:00
  updatedAt: 2021-07-15T07:16:27.715+00:00
```

When this metrics is recored db my local time is `10:16`. Mongo db use global timze zone gmt 000 or you can say utc 

And this format name is [`ISO 8601`](https://en.wikipedia.org/wiki/ISO_8601#RFCs)


```js
    // Current local timestampt with vanillaJs
    const start = new Date(`${date} ${startTime}`).getTime()
    const end = new Date(`${date} ${endTime}`).getTime()

    // Current local timestampt with momentJs
    const end = moment(`${date} ${startTime}`).format("x")
    const end = moment(`${date} ${endTime}`).format("x")

    // Create ISO 8601 time format with momentJs
    const start = moment(`${date} ${startTime}`).toISOString()
    const end = moment(`${date} ${endTime}`).toISOString()

    // Create ISO 8601 time format with vanillaJS
    new Date().toISOString() // "2017-08-26T16:31:02.349Z"
```

**Source :**

> [How do I format a date as ISO 8601 in moment.js?](https://stackoverflow.com/questions/25725019/how-do-i-format-a-date-as-iso-8601-in-moment-js) 


## Generating a color from a hash(string)

> https://github.com/zenozeng/color-hash 
  - Not worked 

> https://stackoverflow.com/a/16348977/10694425


## Setup a Nodejs TypeScript build settings 
> https://khalilstemmler.com/blogs/typescript/node-starter-project/#Create-a-tsconfigjson

## Serve PerfAnalytics JS from API
- [How to Serve Static Files using Express](https://javascript.plainenglish.io/expressjs-serving-static-files-e0efdda3731c)


## 🤔 All project inside in one repository 

```bash
TrendyolCase-HasanTezcan (REPO)
- PerfAnalytics.API
- PerfAnalytics.Dashboard
- PerfAnalytics.Js
```

All projects inside in one repo! How can I handle that? Is that the proper way to work like that? While I developing this application sometimes I thought "I need a fresh new paper" just like a quiz in university. :)

- [Procfile ?](https://devcenter.heroku.com/articles/procfile)
    > https://stackoverflow.com/a/37283426/10694425

## Github Actions

- [Deploying to Heroku from GitHub Actions](https://dev.to/heroku/deploying-to-heroku-from-github-actions-29ej)
- 👍 [Deploying Node.js App to Heroku using Github Actions](https://dev.to/nipeshkc7/deploying-node-js-app-to-heroku-using-github-actions-3k7g)

- prepared actions? 
  - https://github.com/marketplace/actions/deploy-to-heroku
  - https://github.com/AkhileshNS/heroku-deploy

- [Heroku Continuous Integration & Deployment with Docker [Hands-On Tutorial]](https://coralogix.com/blog/heroku-continuous-integration-deployment-with-docker-hands-on-tutorial/)

- [How to Dockerize a Node app and deploy to Heroku](https://dev.to/pacheco/how-to-dockerize-a-node-app-and-deploy-to-heroku-3cch)
## **`⁉️ ISSUE:`** reChart Multiline issue 
When shown two lines the graph is dividing into two! And shows empty half of it!

- [Exploring Recharts: different ways of accessing data](https://gaurav5430.medium.com/exploring-recharts-different-ways-of-accessing-data-d9d6f2caf0b8)
- [two lines with different data sources](https://github.com/recharts/recharts/issues/1167)
- [recharts cannot draw two independent lines](https://stackoverflow.com/questions/62905243/recharts-cannot-draw-two-independent-lines)

 **`✅ SOLVED:`** Solved with this resource: https://github.com/recharts/recharts/issues/956

--- 

## 16 July 2021

Update windowLoad time measure method with [this approach.](https://developers.google.com/web/fundamentals/performance/navigation-and-resource-timing/#loading)


## 17 July 2021 

-  [Mongoose Mixed schema types](https://attacomsian.com/blog/mongoose-schema-types#mixed)
-  [Each record in table should have a unique key prop,or set rowKey to an unique primary key.](https://github.com/ant-design/ant-design/issues/7623#issuecomment-355881099)
-  [Support striped rows in tables](https://github.com/ant-design/ant-design/issues/8393)


## 18 July 2021 

I move subprojects to separate repositories created by mine. In the main repository given by Trendyol, I don't have any access to add secret keys so I cant build GitHub actions in a proper way. 

I created 3 repositories for API, Web Client, and JS package with my whole commit history.

After that, every single sub-project will maintain from its own repository.