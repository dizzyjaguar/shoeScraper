import { DOMParser } from 'https://deno.land/x/deno_dom/deno-dom-wasm.ts';
// import {cron, daily, everyMinute, monthly, weekly} from 'https://deno.land/x/deno_cron/cron.ts';


// daily( async() => {
  const url = 'https://www.vivobarefoot.com/us/womens/outdoor/primus-trail-winter-fg-womens';
  
  try {
    const res = await fetch(url);
    const html = await res.text();
    // deno-lint-ignore no-explicit-any
    const doc: any = new DOMParser().parseFromString(html, 'text/html');
  
    //this is grabbing the value of the input button that says whether its sold out or not
    const scrape = await doc.querySelector('#page_MainContent_product_detail_btnCart').getAttribute('value');
  
  
    console.log(scrape)
  } catch(error) {
    console.log(error)
  }
// })


export {};