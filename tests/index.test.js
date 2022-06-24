// -----------------------
// --- MAIN TEST SUITE ---
// -----------------------

// Load Puppeteer
const puppeteer = require('puppeteer');

/**
 * Test if Home Page loads.
 */
 let page;

test(" page UI size ", async()=>{
 
  page = await global.__BROWSER_GLOBAL__.newPage();
  await page.setViewport({
             width: 1200,
             height: 800,
             deviceScaleFactor: 1,
           });
           await page.goto('http://localhost:3000/search', {
                     waitUntil: 'networkidle2',
                   });

                  
},10000)

afterAll(async()=>{
  await page.screenshot({ path: './tests/screenshots/2_search_page.png' });
})

// const timeout = 10000;
// describe(
//   '/ (Home Page)',
//   () => {
//     let page;
//     beforeAll(async () => {
//       page = await global.__BROWSER_GLOBAL__.newPage();
//       await page.setViewport({
//         width: 1200,
//         height: 800,
//         deviceScaleFactor: 1,
//       });
//       await page.goto('http://localhost:3000', {
//         waitUntil: 'networkidle2',
//       });
//       await page.screenshot({ path: './tests/screenshots/1_landing_page.png' });
//     }, timeout);

//     it('should load without error', async () => {
//       const text = await page.evaluate(() => document.head.textContent); //.body.textContent);
//       expect(text).toContain('QloudCity');
//     });
//   },
//   timeout,
// );

// /**
//  * Test if Search Page Loads.
//  */
// describe(
//     '/ (Search Page)',
//     () => {
//       let page;
//       beforeAll(async () => {
//         page = await global.__BROWSER_GLOBAL__.newPage();
//         await page.setViewport({
//           width: 1200,
//           height: 800,
//           deviceScaleFactor: 1,
//         });
//         await page.goto('http://localhost:3000/search', {
//           waitUntil: 'networkidle2',
//         });
//         await page.waitForTimeout(5000);
//         await page.screenshot({ path: './tests/screenshots/2_search_page.png' });
//       }, timeout);
  
//       it('should load without error', async () => {
//         const text = await page.evaluate(() => document.head.textContent); 
//         expect(text).toContain('QloudCity');
//       });
//     },
//     timeout,
// );
  
// /**
//  * Test if Beautopia in Bahrain Loads
//  */
// describe(
//     '/ (Search Page)',
//     () => {
//       let page;
//       beforeAll(async () => {
//         page = await global.__BROWSER_GLOBAL__.newPage();
//         await page.setViewport({
//           width: 1200,
//           height: 1200,
//           deviceScaleFactor: 1,
//         });
//         await page.goto('http://localhost:3000/places/623717b9c0b497c7fe1a8fe3', {
//           waitUntil: 'networkidle2',
//         });
//         await page.screenshot({ path: './tests/screenshots/3_place_profile_page.png' })
//       }, timeout);
  
//       it('should load without error', async () => {
//         const text = await page.evaluate(() => document.body.textContent);
//         expect(text).toContain('Beautopia Beauty Lounge');
//       });
//     },
//     timeout,
// );