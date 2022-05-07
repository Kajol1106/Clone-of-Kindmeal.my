//code for receipe Categories dropdown list
var category=document.getElementById("categoryDropdownList");
var categories=['All Categories','Appetizers','Beverages','Breakfast','Breads','Condiments','Desserts','Snacks','Main Dishes','Salads','Side Dishes'];
var categorylist=document.createElement("select");
categorylist.id="categoryDropdownList";
categoryDropdownList.appendChild(categorylist);
//create and append the options
for(var i=0;i<categories.length;i++)
{
    var option=document.createElement("option");
    option.value=categories[i];
    option.text=categories[i];
    categorylist.appendChild(option);
}


// code for Products
var productsData=[
    {img1Url: "https://www.kindmeal.my/photos/member/0/6-s.jpg",
    name1:"₹ 5678",
    img2Url:"https://www.kindmeal.my/photos/recipe/1000/1000009-19416-m.jpg",
    name2:"Vanilla Almond Butter",
    timeImg:"https://www.kindmeal.my/images/icon_time_small.png",
    timeImgText: "15 Mins",
    loveImg: "https://www.kindmeal.my/images/icon_heart_small.png",
    loveImgNum:0,
    comentImg:"https://www.kindmeal.my/images/icon_commentbubble_small.png",
    commentImgNum:0,
    },

    {
    img1Url:"https://www.kindmeal.my/photos/member/14/14169-s.jpg",
    name1:"₹ 5678",
    img2Url: "https://www.kindmeal.my/photos/recipe/1000/1000009-19416-m.jpg",
    name2:"Vegetarian VFC",
    timeImg:"https://www.kindmeal.my/images/icon_time_small.png",
    timeImgText: "15 Mins",
    loveImg: "https://www.kindmeal.my/images/icon_heart_small.png",
    loveImgNum:0,
    comentImg:"https://www.kindmeal.my/images/icon_commentbubble_small.png",
    commentImgNum:0,
    },

    {
    img1Url:"https://www.kindmeal.my/photos/recipe/1000/1000015-19425-m.jpg",
    name1:"₹ 5678",
    img2Url:"https://www.kindmeal.my/photos/recipe/1000/1000015-19425-m.jpg",
    name2:"Coconutbanana Smoothie",
    timeImg:"https://www.kindmeal.my/images/icon_time_small.png",
    timeImgText: "15 Mins",
    loveImg: "https://www.kindmeal.my/images/icon_heart_small.png",
    loveImgNum:0,
    comentImg:"https://www.kindmeal.my/images/icon_commentbubble_small.png",
    commentImgNum:0,
    },
    {
    img1Url:"https://www.kindmeal.my/photos/member/0/6-s.jpg",
    name1:"₹ 5678",
    img2Url:"https://www.kindmeal.my/photos/recipe/116/116077-17984-m.jpg",
    name2:"Ras-Ei-Hanout(Moroccan spice Blend",
    timeImg:"https://www.kindmeal.my/images/icon_time_small.png",
    timeImgText: "15 Mins",
    loveImg: "https://www.kindmeal.my/images/icon_heart_small.png",
    loveImgNum:0,
    comentImg:"https://www.kindmeal.my/images/icon_commentbubble_small.png",
    commentImgNum:0,
    },
    {
    img1Url:"https://www.kindmeal.my/photos/member/14/14169-s.jpg",
    name1: "₹ 5678",
    img2Url:"https://www.kindmeal.my/photos/recipe/1000/1000011-19418-m.jpg",
    name2:"Nasi Lemak",
    timeImg:"https://www.kindmeal.my/images/icon_time_small.png",
    timeImgText: "15 Mins",
    loveImg: "https://www.kindmeal.my/images/icon_heart_small.png",
    loveImgNum:0,
    comentImg:"https://www.kindmeal.my/images/icon_commentbubble_small.png",
    commentImgNum:0,
    },
    {
    img1Url:"https://www.kindmeal.my/photos/member/35/35085-s.jpg",
    name1: "₹ 5678",
    img2Url:"https://www.kindmeal.my/photos/recipe/1039/1039459-58887-m.jpg",
    name2:"Stir-fried Broccoli Rice",
    timeImg:"https://www.kindmeal.my/images/icon_time_small.png",
    timeImgText: "15 Mins",
    loveImg: "https://www.kindmeal.my/images/icon_heart_small.png",
    loveImgNum:0,
    comentImg:"https://www.kindmeal.my/images/icon_commentbubble_small.png",
    commentImgNum:0,
    },
    {
    img1Url:"https://www.kindmeal.my/photos/member/38/38334-s.jpg",
    name1: "₹ 5678",
    img2Url:"https://www.kindmeal.my/photos/recipe/1039/1039453-58877-m.jpg",
    name2:"Veg Fried Noodles",
    timeImg:"https://www.kindmeal.my/images/icon_time_small.png",
    timeImgText: "15 Mins",
    loveImg: "https://www.kindmeal.my/images/icon_heart_small.png",
    loveImgNum:0,
    comentImg:"https://www.kindmeal.my/images/icon_commentbubble_small.png",
    commentImgNum:0,
    },
    {
    img1Url:"https://www.kindmeal.my/photos/member/40/40177-s.jpg",
    name1: "₹ 5678",
    img2Url:"https://www.kindmeal.my/photos/recipe/1039/1039464-58895-m.jpg",
    name2:"10  Healthy Lunch Ideas for Weight Loss",
    timeImg:"https://www.kindmeal.my/images/icon_time_small.png",
    timeImgText: "15 Mins",
    loveImg: "https://www.kindmeal.my/images/icon_heart_small.png",
    loveImgNum:0,
    comentImg:"https://www.kindmeal.my/images/icon_commentbubble_small.png",
    commentImgNum:0,
    },
    {img1Url: "https://www.kindmeal.my/photos/member/0/6-s.jpg",
    name1:"₹ 5678",
    img2Url:"https://www.kindmeal.my/photos/recipe/1000/1000009-19416-m.jpg",
    name2:"Vanilla Almond Butter",
    timeImg:"https://www.kindmeal.my/images/icon_time_small.png",
    timeImgText: "15 Mins",
    loveImg: "https://www.kindmeal.my/images/icon_heart_small.png",
    loveImgNum:0,
    comentImg:"https://www.kindmeal.my/images/icon_commentbubble_small.png",
    commentImgNum:0,
    },
    {
        img1Url:"https://www.kindmeal.my/photos/member/14/14169-s.jpg",
        name1:"₹ 5678",
        img2Url: "https://www.kindmeal.my/photos/recipe/1000/1000009-19416-m.jpg",
        name2:"Vegetarian VFC",
        timeImg:"https://www.kindmeal.my/images/icon_time_small.png",
        timeImgText: "15 Mins",
        loveImg: "https://www.kindmeal.my/images/icon_heart_small.png",
        loveImgNum:0,
        comentImg:"https://www.kindmeal.my/images/icon_commentbubble_small.png",
        commentImgNum:0,
        },
        {
            img1Url:"https://www.kindmeal.my/photos/recipe/1000/1000015-19425-m.jpg",
            name1:"₹ 5678",
            img2Url:"https://www.kindmeal.my/photos/recipe/1000/1000015-19425-m.jpg",
            name2:"Coconutbanana Smoothie",
            timeImg:"https://www.kindmeal.my/images/icon_time_small.png",
            timeImgText: "15 Mins",
            loveImg: "https://www.kindmeal.my/images/icon_heart_small.png",
            loveImgNum:0,
            comentImg:"https://www.kindmeal.my/images/icon_commentbubble_small.png",
            commentImgNum:0,
            },
            {
                img1Url:"https://www.kindmeal.my/photos/member/14/14169-s.jpg",
                name1: "₹ 5678",
                img2Url:"https://www.kindmeal.my/photos/recipe/1000/1000011-19418-m.jpg",
                name2:"Nasi Lemak",
                timeImg:"https://www.kindmeal.my/images/icon_time_small.png",
                timeImgText: "15 Mins",
                loveImg: "https://www.kindmeal.my/images/icon_heart_small.png",
                loveImgNum:0,
                comentImg:"https://www.kindmeal.my/images/icon_commentbubble_small.png",
                commentImgNum:0,
                },
    
   ]

var product=JSON.parse(localStorage.getItem("product")) || [];

document.querySelector("#navbar").addEventListener("click",function(){
    window.location.href="index.html";
})

productsData.map(function (el){
    console.log("inside function");
    var box1=document.createElement("div");
    box1.setAttribute("class","div1");

    var box2=document.createElement("div");
    box2.setAttribute("id","top");

    var box3=document.createElement("div");
    box3.setAttribute("id","middle");
    

    var box4=document.createElement("div");
    box4.setAttribute("id","bottom");

    var img1=document.createElement("img");
    img1.src=el.img1Url;
    img1.setAttribute("class","img1")
    img1.addEventListener("click", function(){
        disc(el)
    })
    var name1=document.createElement("p");
     name1.innerText=el.name1;
     name1.setAttribute("class","imgpara")

     var btn=document.createElement("button");
     btn.innerText="Order Now";
     btn.setAttribute("id","button");

    var img2=document.createElement("img");
    img2.src=el.img2Url;
    img2.setAttribute("id","middleimg")
    img2.addEventListener("click", function(){
        disc(el)
    })

    var name2=document.createElement("h3");
    name2.innerText=el.name2;
    name2.setAttribute("id","imgh3")
    
    var img3=document.createElement("img");
     img3.src=el.timeImg;
     img3.setAttribute("class","imgtlc")
     img3.addEventListener("click", function(){
        disc(el)
    })

    var time=document.createElement("p");
    time.innerText=el.timeImgText;
    time.setAttribute("class","imgtlctext1")

    var img4=document.createElement("img");
     img4.src=el.loveImg;
     img4.setAttribute("class","imgtlc")
     img4.addEventListener("click", function(){
        disc(el)
    })

    var lovenumber=document.createElement("p");
    lovenumber.innerText=el.loveImgNum;
    lovenumber.setAttribute("class","imgtlctext")

    var img5=document.createElement("img");
     img5.src=el.comentImg;
     img5.setAttribute("class","imgtlc")
     img3.addEventListener("click", function(){
        disc(el)
    })

    var comment=document.createElement("p");
    comment.innerText=el.commentImgNum;
    comment.setAttribute("class","imgtlctext")

    
    
     box2.append(img1,name1,btn);
     box3.append(img2,name2)
     box4.append(img3,time,img4,lovenumber,img5,comment);
     box1.append(box2,box3,box4);
     document.querySelector("#products").append(box1);

})



function disc(el){
    Discription.push(el);
    localStorage.setItem("discription",JSON.stringify(Discription))
    window.location.href="checkout.html"
}

