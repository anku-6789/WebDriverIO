
//to pull the depdeancies
const expectchai= require('chai').expect
describe('Ecommerce application',()=>
{


xit('Ui controlls',()=> 
{
  
    browser.url("https://rahulshettyacademy.com/loginpagePractise/#")
    console.log("here the login test started")
    console.log(browser.getTitle())
    $("input[name='username']").setValue("rahulshettyacademy")
    const password=$("//input[@type='password']")
    password.setValue("learning")
    //jhere we used $$ because it will return all the elements which are matching
      const RadioButtons =$$(".customradio")
        userDropdown= RadioButtons[1]
//reached to parent element to child 
//chain of locators
        userDropdown.$('.radiotextsty').click()

const modal=$(".modal-body")
//waiting to disply that popup
modal.waitForDisplayed()


// if we give direct $('radiotextsty').click() it will click on admin
$("#cancelBtn").click()
console.log(userDropdown.$('.radiotextsty').isSelected())

//tapping on popup
userDropdown.$('.radiotextsty').click()
modal.waitForDisplayed()
$("#okayBtn").click()
//tapping on okay button
RadioButtons[0].$('.radiotextsty').click()
//step which will popup will not display

expect(modal).not.toBeDisplayed()//when we have assertion when we have selected user radiobutton


//to select a static dropdoen method

const dropdown =$("Select.form-control")
//se;ecting a value
dropdown.selectByAttribute('value','teach')
//browser.pause(2000)

dropdown.selectByVisibleText('Consultant')
//browser.pause(2000)

dropdown.selectByIndex(0)
//browser.pause(2000)


dropdown.getValue()//here it will retuen student
//chai is libarary which supports assertion it is javascript for mocha supports


//expect(browser) are browser related web driver io supports here we are getting one option need to check so we are using chai libaray
//chai coomprare two strings

console.log(expectchai(dropdown.getValue()).to.equal("stud"))

})


xit('Dynamic Dropdown Controls ',()=>

   {
    browser.url("https://rahulshettyacademy.com/AutomationPractice/")
            //here it will give options of three india indoneshia and vrities factory
       //here for traversing with css selectot class name  followed by space "[class='ui-menu-item'] div"
        //here for traversing with css selectot class name  followed by /"[class='ui-menu-item']/div"

         

//        $("#autocomplete").setValue("ind")
//       // browser.pause(3000)
//        let items = $$("[class='ui-menu-item'] div")
//     //    for(var i =0;i<items.length;i++)
//     //    {
//     //        console.log(items[i].getText())

//     //    }

//        // above code same as filter with single line
//  //    
//  // //here it is extartced as array and stored in zeroth position

//  const desiredLocator= items.filter(item=> item.getText() === "India")
//  //console.log(items.getText())
//      desiredLocator[0].click()
//  browser.pause(2000)

$("#autocomplete").setValue("ind")
browser.pause(3000)
let items = $$("[class='ui-menu-item'] div")
//    for(var i =0;i<items.length;i++)
//    {
//        console.log(items[i].getText())

//    }
const desiredLocator= items.filter(item=> item.getText() === "India")
desiredLocator[0].click()

})


xit('Chekbox verification',()=>

{
  browser.url("https://rahulshettyacademy.com/AutomationPractice/")  
  //we can also directly tap on second option but here we are trting with common css
  //$$ becaus it will give list
const element=$$("input[type='checkbox']")
//here we need to tap onsecond option
element[1].click()
browser.pause(2000)
console.log(element[1].isSelected())//true
console.log(element[0].isSelected())//false

//taking screenshot
browser.saveScreenshot("chekbox.png")


}
)

})

