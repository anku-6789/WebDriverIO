
describe("window and frames mislenaeous",()=>
{
xit("from parent to child window switch",()=>
    {

browser.url("https://rahulshettyacademy.com/AutomationPractice/")
   $("[onclick*='openWindow']").click()
 var handles = browser.getWindowHandles()//2 windows open which hold parent and child

 //oth postion parent and on 1st position child window is open
 browser.switchToWindow(handles[1])//switch to child
 console.log(browser.getTitle())
 browser.maximizeWindow()
 browser.closeWindow()
 browser.switchToWindow(handles[0])
 console.log(browser.getTitle())




    })

    xit(" Switching to new window from our script  ",()=>
    {

        browser.url("https://rahulshettyacademy.com/AutomationPractice/")
//switching to new window through script  with webdriver

browser.newWindow("https://www.rahulshettyacademy.com/#/index")

const title= browser.getTitle()
//switxhing back to orignal
browser.switchWindow("https://rahulshettyacademy.com/AutomationPractice/")
//switchToWindow accept using url or title as well
$("#name").setValue(title)
//here we are using title to switch
browser.switchWindow(title)

console.log(browser.getUrl())

    })

    xit("ifrmaes switch",()=>
    {
browser.url("https://rahulshettyacademy.com/AutomationPractice/")
 $("#mousehover").scrollIntoView()
 //here $$ we will get list with array of locators
 //interview qaurdtion how we will get  links count  
   console.log($$("a").length)
   browser.switchToFrame($("[id='courses-iframe']"))
   

   console.log($("=Courses").getTagName())
   console.log($$("a").length)
   //interview question
   browser.switchToFrame(null)//will navigate to default page

   console.log($$("a").length)


    }

    )
})