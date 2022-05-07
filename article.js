articleData=[
    {
       imgUrl: "https://www.kindmeal.my/photos/article/19/19756-l.jpg",
       name: "Puttanesca Gnocchi",
       para1: "by KindMeal.my",
       para2: "This puttanesca gnocchi is full of flavour and super easy to make!",
       date: "06 May 2022", 
    },
    {
       imgUrl:"https://www.kindmeal.my/photos/article/19/19752-l.jpg",
       name:"Rescue Rooster Loves To Chase His Favorite Girl Around The House",
       para1:"by KindMeal.my",
       para2:"Loyal rooster loves to chase his favorite girl around the house — and snuggle on her lap while she's doing her homework ❤️",
       date:"04 May 2022",
    },
    {
        imgUrl:"https://www.kindmeal.my/photos/article/19/19758-l.jpg",
        name:"The Science On Fish Sentience Is Clear Fish Have The Capacity To Suffer And Feel..",
        para1:"by Compassion Over Killing",
        para2:"“The science on fish sentience is clear: fish have the capacity to suffer and feel pain.” - Becca Franks, fish scientist. In 2019, Animal Outlook released the first-ever undercover exposé of salmon aquaculture in the U.S. which documented senseless violence against these sentient animals at Cooke A..",
        date:"06 May 2022",
    },
    {
        imgUrl: "https://www.kindmeal.my/photos/article/19/19756-l.jpg",
        name: "Puttanesca Gnocchi",
        para1: "by KindMeal.my",
        para2: "This puttanesca gnocchi is full of flavour and super easy to make!",
        date: "06 May 2022", 
     },
     {
        imgUrl:"https://www.kindmeal.my/photos/article/19/19752-l.jpg",
        name:"Rescue Rooster Loves To Chase His Favorite Girl Around The House",
        para1:"by KindMeal.my",
        para2:"Loyal rooster loves to chase his favorite girl around the house — and snuggle on her lap while she's doing her homework ❤️",
        date:"04 May 2022",
     },
     {
         imgUrl:"https://www.kindmeal.my/photos/article/19/19758-l.jpg",
         name:"The Science On Fish Sentience Is Clear Fish Have The Capacity To Suffer And Feel..",
         para1:"by Compassion Over Killing",
         para2:"“The science on fish sentience is clear: fish have the capacity to suffer and feel pain.” - Becca Franks, fish scientist. In 2019, Animal Outlook released the first-ever undercover exposé of salmon aquaculture in the U.S. which documented senseless violence against these sentient animals at Cooke A..",
         date:"06 May 2022",
     }
]

var article=JSON.parse(localStorage.getItem("article")) || [];

document.querySelector("#container").addEventListener("click",function(){
    window.location.href="index.html";
})

articleData.map(function (el){
    console.log("inside function");
    var box1=document.createElement("div");
    box1.setAttribute("id","container");

    var box2=document.createElement("div");
    box2.setAttribute("class","items");

    var box3=document.createElement("div");
    box3.setAttribute("id","img");
    

    var box4=document.createElement("div");
    box4.setAttribute("class","info");

    var box5=document.createElement("div");
    box5.setAttribute("id","para4");

    var img=document.createElement("img");
    img.src=el.imgUrl;
    img.setAttribute("class","img")
    img.addEventListener("click", function(){
        disc(el)
    })

    var name=document.createElement("p");
     name.innerText=el.name;
     name.setAttribute("id","para1")

     var para1=document.createElement("p");
     para1.innerText=el.para1;
     para1.setAttribute("id","para2")

     var para2=document.createElement("p");
     para2.innerText=el.para2;
     para2.setAttribute("id","para3")

    var button=document.createElement("button");
    button.innerText="View Video";
    button.setAttribute("class","button");

    var date=document.createElement("p");
    date.innerText=el.date;
    date.setAttribute("id","subpara")


     
    
     
     box3.append(img)
     box5.append(button, date);
     box4.append(name,para1,para2,box5);
     box2.append(box3,box4);
     document.querySelector("#container").append(box2);

})



function disc(el){
    Discription.push(el);
    localStorage.setItem("discription",JSON.stringify(Discription))
    window.location.href="index.html"
}
