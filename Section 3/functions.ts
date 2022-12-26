function saySomething(name: string){
  return 23
}

function doSomething(num1: number = 23): string|number{
 if(Math.random() < 0.5){
  return num1.toString()
 }
 else{
  return num1
 }
}

console.log(doSomething())