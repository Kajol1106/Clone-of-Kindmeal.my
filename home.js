let image=document.getElementById("img1scroll");
let images=[
    'https://www.kindmeal.my/photos/deal/6/626-3611-m.jpg',
    'https://www.kindmeal.my/photos/deal/4/498-2202-m.jpg',
    'https://www.kindmeal.my/photos/deal/6/680-4384-m.jpg',
    'https://www.kindmeal.my/photos/deal/6/683-4718-m.jpg',
    'https://www.kindmeal.my/photos/deal/4/457-2109-m.jpg',
    'https://www.kindmeal.my/photos/deal/7/709-4950-m.jpg'
]

let image2=document.getElementById("img2scroll");
let images2=[
    'https://www.kindmeal.my/photos/shop/5/500-3545-m.jpg',
    'https://www.kindmeal.my/photos/shop/5/564-4223-m.jpg',
    'https://www.kindmeal.my/photos/shop/2/212-2494-m.jpg',
    'https://www.kindmeal.my/photos/shop/4/432-2809-m.jpg',
    'https://www.kindmeal.my/photos/shop/5/553-4115-m.jpg',
    'https://www.kindmeal.my/photos/shop/5/560-4160-m.jpg',
]

let heading=document.getElementById("imageh3");
let headings=[
    'Creative Home-Style Dining',
    'Authentic Sarawak Flavors',
    'Creative Home-Style Dining',
    'Authentic Sarawak Flavors',
    'Creative Home-Style Dining',
    'Authentic Sarawak Flavors',
]

let discount=document.getElementById("discount");
let discounts=[
    '20%','15%','30%','25%','40%','50%',
]

// for random images and h3 tag text
setInterval(function(){             
    let random=Math.floor(Math.random()*6);
    image.src=images[random];

    let randomh3=Math.floor(Math.random()*6);
    heading.innerText=headings[randomh3];

    let randomimg2=Math.floor(Math.random()*6);
    image2.src=images2[randomimg2];

    let dis=Math.floor(Math.random()*6);
    discount.innerText=discounts[dis];
    
},2000);

