const puppeteer = require("puppeteer");

const crawler = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://phantombuster.com/login");
  await page.evaluate(() => {
    const form = document.querySelector("form");
    const btn = document.querySelector("form > button");

    btn.click();
  });
  await page.screenshot({ path: "example.png" });
  //   const page2 = await browser.newPage();
  //   await page2.goto(
  //     "https://phantombuster.com/5717131053184394/phantoms/1974221222046962/setup/input?mode=json"
  //   );
  //   const title = await page2.waitForSelector("textarea");
  //   console.log(title);
};

//crawler();
