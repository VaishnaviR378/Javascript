//String Literals//
let one ="Hello one \n One one \t one one"
let two="Hello two \n two two  \t Two two"
let three=`Hello
two six ${one+two}
three "yes":"no"
three four`
 console .log(one)
 console .log(two)
 console .log(three)

//String Methods//
 let str="welcome to chennai"
 console.log(str.length)
 console.log(str.toUpperCase())
 console.log(str.toLowerCase())
 console.log(str.charAt(8))
 console.log(str.indexOf("e"))  // It will take first index e
 console.log(str.lastIndexOf("e"))  // it will take last index of e
 console.log(str.slice(0,7))// if i want to print welcome i have to give the index values 
 // always add +1 to existing index value because it will reduce or slice one value from index defaultly
 console.log(str.slice(-7)) // we can also give negative values to take the charachters from backwards
 console.log(str.replace("chennai","Coimbatore"))
 let trm="   one     one     "
 console.log(trm.trim())
 console.log(str.split(""))
 console.log(str.concat(trm))
 console.log(str.startsWith("w")) // It checks true or false
 console.log(str.endsWith("chennai")) // It checks true or false
 
