# 301-practice-1 :
**1. What library do we use in Node on the server side to allow us to create and run an HTTP server that obeys the HTTP protocol?**
 Express 

 **2. Explain this snippet of code from a server-side application**
 *response.status(200).send('Hello World!');*
 we used the Response.send() method to send a simple string which is 'Hello world 1' as a response when status is 200 .

 **3.Write a function that takes an array of numbers as an argument and outputs the square of each number in that array.** 
 function squareNum(arr) {
    arr.forEach(element => {
        let square=element*element ;
        arr.push(square);
    });
    return arr ; 
}