import { DOMParser } from 'https://deno.land/x/deno_dom/deno-dom-wasm.ts';


const url = 'https://www.vivobarefoot.com/us/womens/outdoor/primus-trail-winter-fg-womens';

try {
  const res = await fetch(url);
  const html = await res.text();
  // deno-lint-ignore no-explicit-any
  const doc: any = new DOMParser().parseFromString(html, 'text/html');

  // this is currently grabbing the title of vivobarefoot page
  const scrape = await doc.querySelector('h1').textContent;


  console.log(scrape)
} catch(error) {
  console.log(error)
}

export {};