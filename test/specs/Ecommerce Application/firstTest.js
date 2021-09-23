describe('Ecommmerce Application',()=>
{
   //here using the x so  this text case will not be execute
it('Login  fail page title',()=>//annonymos function
{
    //actual webdriver io code to work

    browser.url("https://rahulshettyacademy.com/loginpagePractise/#")
    console.log("here the login test is passed")
    console.log(browser.getTitle())
  //when we use autosuggetstion give paraenthisis i.e()
  
  expect(browser).toHaveTitleContaining("Rahul Shetty Academy")
//locatores$("") is manadatoty in webdriver io
   //webdriver supports xpath,css selector,linktext
   //we can check the css is correct or not in console for css selector: $("input[name='username']") or else selctor hub or chropath
//css selector  :tagname[attribute=value]   -> input[name='username']
//set valude method will clear the text fisrst and then enter
 $("input[name='username']").setValue("rahulshettyacademy")
 browser.pause(2000)
 //$("#username").setValue("second css")
//xpath
//  //*[@attribute='value'] or //input[@type='password']

const password=$("//input[@type='password']")
password.setValue("learning@123")

 $("#signInBtn").click()
 //here we want that incoorect message but we have different 3 class names
//hre checking for that error msg
 //$("#signInBtn").getAttribute('Value')==='Sign In'
 //waitcondition here annonyomos function
//wait until for vutton text into signin


console.log($(".alert-danger").getText() +"is the text am seeing on the screen")
     //signing-dont checck   (Check after button turns to Sign In)
     debugger
    //  browser.waitUntil(()=>   { 
    //   //  console.log("Reached...")
    //    $("#signInBtn").getAttribute('value') === 'Sign In', 
    //   { timeout: 11000, timeoutMsg: 'Error message did not appear' }},
    //  console.log($(".alert-danger").getText() +"is the text am seeing on the screen"))
     
     
    browser.waitUntil(()=>   $("#signInBtn").getAttribute('value') === 'Sign In', {timeout:40000 ,timeoutMsg: "did not disply the error message"} )



   console.log($(".alert-danger").getText() +"is the text am seeing on the screen")
     
//to chek or asset value to text
$("p").getText()
console.log("here validating the assertion for text")
expect($("p")).toHaveTextContaining("username is rahulshettyacademy and Password is learning")


 //shortcusts to how to create css
//  with #id   or #username// with .classname or .formcontrol



})

it('Login sucess page title Smoke',()=>//annonymos function
{
    //actual webdriver io code to work

    browser.url("https://rahulshettyacademy.com/loginpagePractise/#")
    console.log("here the login test started")
    console.log(browser.getTitle())
    $("input[name='username']").setValue("rahulshettyacademy")
    const password=$("//input[@type='password']")
    password.setValue("learning")
    $("#signInBtn").click()
    
//linke text before text we need to give equals =
//here *=partiail link text
   const link= $("*=Checkout")
   link.waitForExist()//it will wait for checkout
   expect(browser).toHaveTitle("ProtoCommerce")
   console.log(browser.getTitle())
expect(browser).toHaveUrlContaining("shop")
console.log(browser.getUrl())


 

})

it('Login  fail page  with retry title',function()//annonymos function
{
    //actual webdriver io code to work


    this.retries(2)

    browser.url("https://rahulshettyacademy.com/loginpagePractise/#")
    console.log("here the login test is passed")
    console.log(browser.getTitle())
  //when we use autosuggetstion give paraenthisis i.e()
  
  expect(browser).toHaveTitleContaining("Rahul Shetty Academyewrwe")




})

});