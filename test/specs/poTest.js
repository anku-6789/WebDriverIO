//here we are creating a object of loginapge class and importing here

const loginPage = require('../pageObjects/loginPage')
const shopPage= require('../pageObjects/shop')
const reviewPage= require('../pageObjects/reviewPage')
const sucessPage =  require('../pageObjects/sucessPage')
const  expectchai=require('chai').expect
//here this libary //convert the json file into string byte format
//fs.readFilesync()this method it will  pass to json file and read that and convert it into string

const fs =require('fs')
let credentials =JSON.parse(fs.readFileSync('test/testData/LoginTest.json'))
let productcredentials =JSON.parse(fs.readFileSync('test/testData/ProductArray.json'))




describe("page object model testing",()=>
{
     //so here we are passing array and pull 2 items 
     //so here we are keeping etire test into  credentials for loop
    //  credentials.forEach( ({username,password})=>{
      
    xit("Login test with POM",()=>
    {

      
      
        //actual webdriver io code to work
    
        browser.url("https://rahulshettyacademy.com/loginpagePractise/#")
        console.log("here the login test started")
        console.log(browser.getTitle())
      // loginPage.Login("rahulshettyacademy","learning@123")
      loginPage.Login(username,password)

    //linke text before text we need to give equals =
    //here *=partiail link text
       const link= $("*=Checkout")
       console.log(loginPage.alert.getText() +"is the text am seeing on the screen")
       //signing-dont checck   (Check after button turns to Sign In)
       browser.waitUntil(()=>    loginPage.signIn.getAttribute('value') === 'Sign In', 
        { timeout: 7000, timeoutMsg: 'Error message did not appear' })
       console.log(loginPage.alert.getText()+"is the text am seeing on the screen")
       browser.pause(2000)
       expect(loginPage.textInfo).toHaveTextContaining("(username is rahulshettyacademy and Password is learning)")
  
    
    
     
    

    

  
 
})


productcredentials.forEach( ({products})=>{
  it("End to End testing for Ecommerce page",()=>
    {

      //var products = ["Blackberry","Nokia Edge" ,"Samsung Note 8"]

 browser.url("https://rahulshettyacademy.com/loginpagePractise/#")

loginPage.Login("rahulshettyacademy","learning")
 shopPage.checkout.waitForExist()
shopPage.addProductToCart(products)
 shopPage.checkout.click()
 const sumOfProducts = reviewPage.sumOfProducts()
const totalIntValue = reviewPage.totalFormattedPrice()
 expectchai(sumOfProducts).to.equal(totalIntValue)
 $(".btn-success").click()
 $("#country").setValue("ind")
 $(".lds-ellipsis").waitForExist({reverse:true})
 $("=India").click()
 $("[type='submit']").click()
 expect($(".alert-success")).toHaveTextContaining("Success")
 
  console.log("here the  sucess flow we are getting")
    })
  })
  

})
