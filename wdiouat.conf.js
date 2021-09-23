//so here we are mergining parent conf object and adds some new changes in this conf(base url, and connection timeout)

  const merge=require('deepmerge')//to merge the modules 
  const wdioconf= require('./wdio.conf.js')//exporting congf files

  exports.config=merge(wdioconf.config,
     {

 baseurl:'rahulshettyacademyuat.com',
 waitforTimeout:5000,

 mochaopts:
 {
     ui:'bdd',
    timeout:'5000',
    grep :'sanity'//it will only one testcase
 }

    })//so here we call parent conf file  object config

