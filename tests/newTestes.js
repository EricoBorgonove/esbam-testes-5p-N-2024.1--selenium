const { Builder, By, until, chai } = require("selenium-webdriver")
//const chai = require("chai");
//const assert = chai.assert;


describe('Shopping Tests', async function () {

    let driver
    let assert = chai.assert

    beforeEach(async function () {
        this.timeout(5000); 
        driver = await new Builder().forBrowser("chrome").build();
        await driver.get("https://www.saucedemo.com/");
        const campoLogin = await driver.findElement(By.id("user-name"));
        const campoPassword = await driver.findElement(By.id("password"));
        const botaoLogin = await driver.findElement(By.id("login-button"));

        await campoLogin.sendKeys('standard_user');
        await campoPassword.sendKeys('secret_sauce');
        await botaoLogin.click();

    })

    afterEach(async function () {
        await driver.quit()
    })

    it('Carrinho criado com 1 produto', async function () {
        const addBackpack = await driver.findElement({ id: "add-to-cart-sauce-labs-backpack" })
        await addBackpack.click()
        const carrinho = await driver.findElement(By.className('shopping_cart_badge')).getText()
        assert.equal(1, carrinho)
        

    })

    it('Carrinho criado com 3 produtos e removendo 1', async function () {


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
    it('Filtro por nome', async function () {
        const productsList = await driver.findElements(By.className('inventory_item'))
        const productDescription = await productsList[0].findElement(By.className('inventory_item_description'));
        const productLabel = await productDescription.findElement(By.className('inventory_item_label'));
        const link = await productLabel.findElement(By.css('a'));
        //console.log(await link.getText());
    });


    it('Filtro por Maior Preço', async function () {

        const campoFiltro = await driver.findElement(By.className('product_sort_container'))
        const opcaoEscolhida = await campoFiltro.findElement(By.css('.product_sort_container > option:nth-child(4)'))
        await opcaoEscolhida.click()
    });
    it('Filtro por Menor Preço', async function () {

        const campoFiltro = await driver.findElement(By.className('product_sort_container'))
        const opcaoEscolhida = await campoFiltro.findElement(By.css('.product_sort_container > option:nth-child(3)'))
        await opcaoEscolhida.click()
    });

})