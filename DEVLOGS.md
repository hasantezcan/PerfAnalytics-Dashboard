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
  - I decided to move on google sheets and google scripts while building API.


## DAY 3 - 05 July 2021