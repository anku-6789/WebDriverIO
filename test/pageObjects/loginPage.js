class LoginPage
{

get userName()
{
    return $("input[name='username']")
}
get password()
{
    return $("//input[@type='password']")
}

get alert()
{
    return $(".alert-danger")
}

get signIn()
{
    return $("#signInBtn")
}

get textInfo()
{
    return $("p")
}

Login(userName,password)
{
    this.userName.setValue(userName)
    this.password.setValue(password)
    this.signIn.click()

}

//this is refer for current class object
}

//object of this class is new Loginpage()
module.exports =new LoginPage()