const  expectchai=require('chai').expect
describe("End to End testing Flows " ,()=>
{


    xit("Adding item and checkout flow",()=>
    {

        browser.url("https://rahulshettyacademy.com/loginpagePractise/#%22")
        $("input[name='username']").setValue("rahulshettyacademy")
        const password=$("//input[@type='password']")
        password.setValue("learning")
     $("#signInBtn").click()
     
     const link= $("*=Checkout")
 link.waitForExist()//it will wait for checkout

//if we want to add multiple items in the cart


 var products = ["Blackberry","Nokia Edge" ,"Samsung Note 8"]


 cards=$$("div[class='card h-100']")
 //here we are chaing the css path  chain locators then it will search only on parentlocators
 //here we are filtering the item
 //for particular item add
 //cards.filter(card=>card.$("div h4 a").getText() ===  "Nokia Edge")
 //.map(NokiaEdgecard =>NokiaEdgecard.$(".card-footer  button").click())

// to select multiple items

cards.filter(card=>products.includes(card.$("div h4 a").getText())) //it returns an array of 2 elements
    .map(productCard=>productCard.$(".card-footer button").click() )
 console.log("here it is adding  items to checkout")
 browser.pause(2000)
 //here we will performing action
 //here NokiaEdge is just variable and we are chaining again  to cart button
    //cards.filter(card=>card.$("div h4 a").getText()) //it returns an array of 2 elements
   // .map(blackberryCard=>blackberryCard.$(".card-footer button").click() )
    

 
link.click()

 prodcutprizes =$$("//tr/td[4]/strong")//here we have locators

 //get text need to be apply
 //format it by removing $ symbol and apply  sum on all the values//₹. 65000 need to split  ₹ , 65000//here there is space me need to trim
 //app;y the sum  on all values
//split method weill spilt into array [0]
const sunofProducts= prodcutprizes.map(productprize=> parseInt(productprize.getText().split(".")[1].trim()))
 .reduce((acc,prize)=> acc+prize ,0)//here in first iteration we get  and acc have 0 
 //here in second we get prize 65000 +0=acc
 //in 3rd argument  65000+50000=
console.log(sunofProducts)

const totalvalue=$("h3 strong").getText()
//here we are using spilt to  rs and total value then to get second value we are using [1] and to remove the spaces we are using trim
const totalintvalue=  parseInt(totalvalue.split(".")[1].trim())
console.log("here we are comparing the total")
expectchai(sunofProducts).to.equals(totalintvalue)

// $(".btn-success").click()
// $("#country").setValue("ind")
// //wait for non existing
// //so here it will wait till that  until that option will not disply 
// $(".lds-ellipsis").waitForExist({reverse:true})
// $("=India").click()
// $("[type='submit']").click()
// console.log("here now we are near to sucess page")
// expect($(".alert-success")).toHaveTextContaining("Success")
    })

})