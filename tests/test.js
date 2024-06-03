const {Builder, By, Key} = require ("selenium-webdriver")

async function example(){
   let driver = await new Builder().forBrowser("chrome").build();
   await driver.get("http://www.google.com.br/")

   const campoPesquisa = await driver.findElement({id: "APjFqb"})
   await campoPesquisa.sendKeys("Porto Alegre")
   await campoPesquisa.sendKeys(Key.ENTER)
   await driver.sleep(5000)
   await driver.quit()
}

example();