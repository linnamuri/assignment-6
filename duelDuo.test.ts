
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    await driver.quit()
})


describe('duel-duo tests',() =>{

    test('Title shows up when page loads', async () => 
    {
        const title = await driver.findElement(By.id('title'))
        const displayed = await title.isDisplayed()
        expect(displayed).toBe(true)
    })
     
    test('clicking draw button', async () =>
    {
       await driver.sleep(1000)
       await driver.findElement(By.xpath('//*[@id="draw"]')).click()
       await driver.sleep(3000)
       expect(driver.findElement(By.xpath('//*[@id="choices"]'))).toBeTruthy();
    })

    test('clicking Add to Duo button', async () =>
    {
       
       await driver.findElement(By.xpath('//*[@id="draw"]')).click()
       await driver.sleep(1000)
       await driver.findElement(By.xpath('//*[contains(@class,"bot-btn")]')).click()
       await driver.sleep(3000)
       expect(driver.findElement(By.xpath('//*[@id="player-duo"]'))).toBeTruthy();
    })

}) 

//Write 2 more automated tests

//save the roll bar tocken inside env file
// for deployment,set up procfile,commit in github,heroku deploy

//div => id = "draw"

// Check that clicking the Draw button displays the div with id = “choices”