const  expectchai=require('chai').expect
describe("Functional testing of application",()=>
{
  
    it("Scrolling AND MOUSE OVER SCENARIO",()=>
    {
browser.url("https://rahulshettyacademy.com/AutomationPractice/")


    $("#mousehover").scrollIntoView()
     $("#mousehover").moveTo()
    $("=Top").click()
    browser.url("http://only-testing-blog.blogspot.com/2014/09/selectable.html")
    $("button").doubleClick()
    console.log(browser.isAlertOpen()) //true
    expectchai(browser.isAlertOpen()).to.be.true
    console.log(browser.getAlertText())//
    expectchai(browser.getAlertText()).to.equal("You double clicked me.. Thank You..")
    browser.acceptAlert() //clicks on ok button
    browser.pause(3000)

})
xit("cheking the window based alert",()=>
{
browser.url("http://only-testing-blog.blogspot.com/2014/09/selectable.html")
browser.pause(2000)
$("button").doubleClick()

browser.isAlertOpen()//true
//wheather alert is open or not
expectchai(browser.isAlertOpen()).to.be.true
 console.log(browser.getAlertText())
 //to validate the alet msg
 expectchai(browser.getAlertText()).to.equal("You double clicked me..gf Thank You..")
 browser.acceptAlert()//will tap on okay button 
 browser.pause(2000)



    })
   
    it("validating web table sort ",()=>
   
    {
        browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
         $("tr th:nth-child(1)").click()
         //if we comment above line we will get error that array is not equals
         //vebteable sorted retrive the veggi names into array A
         //sort the array A- new array B
         //compare the A and B//fail
        const  veggiesLocators=$$("tr td:nth-child(1)")
   //map used to retivr new data from existing data

   //here for  first item we are getting text and on  in the list
             const Orignalvegginames=  veggiesLocators.map(veggie=> veggie.getText())
               //here it will return array
               //array are pass by refrences
      console.log(Orignalvegginames)

      veggies=Orignalvegginames.slice()
      //here veggies are th middleman just copy of the array
      //s;ice is method copy of the arry
      //here need to copy the array
//array are pass by refrences
      sortedveggies=veggies.sort()
      console.log(sortedveggies)
      expectchai(Orignalvegginames).to.eql(sortedveggies)
    }
    )

    it("search  sort table functioanlity",()=>
    {

   browser.url("https://rahulshettyacademy.com//seleniumPractise/#/offers")

    $("input[type='search']").setValue("tomato")
     const VeggieLocator =$$("tr td:nth-child(1)")
    //  //here we are using assertion that that this array size should be one if not it means it not filter properly
    expect(VeggieLocator).toBeElementsArrayOfSize({eq:1})//it will print two
    console.log(VeggieLocator[0].getText())
    
      expect(VeggieLocator[0]).toHaveText("Tomato")//true
  //  
    })
})