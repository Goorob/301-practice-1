# 301-practice-1 :
**1. What library do we use in Node on the server side to allow us to create and run an HTTP server that obeys the HTTP protocol?**

 Express 

 **2. Explain this snippet of code from a server-side application**


 *response.status(200).send('Hello World!');*
 we used the Response.send() method to send a simple string which is 'Hello world ' as a response when status is 200 that when the the request of server was successfully received

 **3.Write a function that takes an array of numbers as an argument and outputs the square of each number in that array.** 

 function squareNum(arr) {
    let squareArr= arr.map(element => {
     return element*element ;
    });
    return squareArr ; 
}
