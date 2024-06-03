const {Builder, By, Key} = require ("selenium-webdriver")

async function abrirSite(){
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.saucedemo.com")

    const campoLogin = await driver.findElement(By.id("user-name"))
    const campoPassword = await driver.findElement(By.id('password'))
    const botaoLogin = await driver.findElement(By.id('login-button'))
    
    await campoLogin.sendKeys('standard_user')
    await campoPassword.sendKeys('secret_sauce')

    await driver.sleep(3000)
    await botaoLogin.click()

    const addMochila = await driver.findElement(By.id("add-to-cart-sauce-labs-backpack"))
    const addLuzBike = await driver.findElement(By.id('add-to-cart-sauce-labs-bike-light'))
    const addBlusa = await driver.findElement(By.id("add-to-cart-sauce-labs-bolt-t-shirt"))
    const botaoCarrinho = await driver.findElement(By.id('shopping_cart_container'))

    await addMochila.click()
    await driver.sleep(1000)
    await addLuzBike.click()
    await driver.sleep(1000)
    await addBlusa.click()

    await driver.sleep(1000)
    await botaoCarrinho.click()

    const botaoCheckout = await driver.findElement(By.id("checkout"))
    await driver.sleep(1000)
    await botaoCheckout.click()

    const campoPrimeiroNome = await driver.findElement(By.id('first-name'))
    const campoUltimoNome = await driver.findElement(By.id('last-name'))
    const campoZipCode = await driver.findElement(By.id("postal-code"))
    const botaoContinue = await driver.findElement(By.id("continue"))

    await campoPrimeiroNome.sendKeys("Karina")
    await campoUltimoNome.sendKeys("Moreira")
    await campoZipCode.sendKeys("0000000")

    await driver.sleep(1000)

    await botaoContinue.click()

    const botaoFinish = await driver.findElement(By.id("finish"))

    await driver.sleep(1000)
    await botaoFinish.click()


}

abrirSite();