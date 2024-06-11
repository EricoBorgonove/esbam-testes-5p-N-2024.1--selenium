const { Builder, By, until, chai } = require("selenium-webdriver")


describe('Shopping Tests', async function () {

    let driver

    beforeEach(async function () {
        driver = await new Builder().forBrowser("chrome").build();
        await driver.get("http://www.saucedemo.com");
    })

    afterEach(async function () {
        await driver.quit()
    })

    it('Carrinho criado com 1 produto', async function () {
        const campoUser = await driver.findElement({ id: "user-name" })
        const campoPassword = await driver.findElement({ id: "password" })
        const botaoLogin = await driver.findElement({ id: "login-button" })

        await campoUser.sendKeys("standard_user")
        await campoPassword.sendKeys("secret_sauce")
        await botaoLogin.click()

        //Até aqui é requisito para logar o usuário

        const addBackpack = await driver.findElement({ id: "add-to-cart-sauce-labs-backpack" })
        //const addBikeLight = await driver.findElement({ id: "add-to-cart-sauce-labs-bike-light" })
        //const addBoltTShirt = await driver.findElement({ id: "add-to-cart-sauce-labs-bolt-t-shirt" })

        await addBackpack.click()



        const carrinho = await driver.findElement(By.className('shopping_cart_badge')).getText()

        assert.equal(1, carrinho)

    })

    it('Carrinho criado com 3 produtos e removendo 1', async function () {
        const campoUser = await driver.findElement({ id: "user-name" })
        const campoPassword = await driver.findElement({ id: "password" })
        const botaoLogin = await driver.findElement({ id: "login-button" })

        await campoUser.sendKeys("standard_user")
        await campoPassword.sendKeys("secret_sauce")
        await botaoLogin.click()

   

        const addBackpack = await driver.findElement({ id: "add-to-cart-sauce-labs-backpack" })
        const addBikeLight = await driver.findElement({ id: "add-to-cart-sauce-labs-bike-light" })
        const addBoltTShirt = await driver.findElement({ id: "add-to-cart-sauce-labs-bolt-t-shirt" })

        await addBackpack.click()
        await addBikeLight.click()
        await addBoltTShirt.click()

       

        const carrinho = await driver.findElement(By.className('shopping_cart_badge')).getText()
        assert.equal(3, carrinho)
     

        
        const removeBoltTShirt = await driver.findElement({ id: "remove-sauce-labs-bolt-t-shirt" })
        await removeBoltTShirt.click()
        
        const carrinhoEdit = await driver.findElement(By.className('shopping_cart_badge')).getText()
        assert.equal(2, carrinhoEdit)

    })
})