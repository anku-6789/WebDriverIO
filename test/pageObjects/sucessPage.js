 class  Sucesspage
 {
     

get button()
{
    return $(".btn-success")
}

get country()
{
    return $("#country")
}
get waitellipses()
{
    return $(".lds-ellipsis")
}

get india()
{
    return $("=India")
}
 get submit()
 {
    $("[type='submit']")
 }

 Perform()
 {
     this.button.click()
     this.country.setValue("ind")
     this.waitellipses.waitForExist({reverse:true})
     this.india.click()
     this.submit.click()
 }

 }
 exports.module= new  Sucesspage()