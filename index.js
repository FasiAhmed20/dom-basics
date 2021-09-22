console.log(document);
document.title="learning dom";
console.log(document.tittle);
console.log(document);



//selctors: 1. getElementById
        //  2.getElementsByClassName
        //  3. getElementsByTagName
        //  4.querySelector
        //  5.querySelectorAll

        let text=document.getElementById("first");
        console.log(text);

        let tex=document.getElementsByClassName("second");
        console.log(tex);

        let te=document.getElementsByTagName("p");
        console.log(te);
        

        let select =document.querySelector("h3");
        console.log(select);
        

        let hello=document.querySelectorAll("first");
        console.log(hello);

        let hel =document.querySelectorAll("second");
        console.log(hello);





