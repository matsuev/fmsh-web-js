

const Alex = new PersonClass("Alex Matsuev", "alex.matsuev@gmail.com")
const Ivan = new PersonClass("Ivan Ivanov", "ivanov@example.com")

// Alex.Birthday = "10.02.1977"

// console.dir(Alex)


function ToCamelCase(str) {
   let m = str.split("-") 
   m.forEach((item, index) => {
      m[index] = item.charAt(0).toUpperCase() + item.slice(1)
   })
   return m.join("")
}

console.log(ToCamelCase("string-to-camel-case"))
