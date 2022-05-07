//code for Month dropdown list
var month=document.getElementById("month");
var months=['Month','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var monthlist=document.createElement("select");
monthlist.id="month";
month.appendChild(monthlist);
//create and append the options
for(var i=0;i<months.length;i++)
{
    var option=document.createElement("option");
    option.value=months[i];
    option.text=months[i];
    monthlist.appendChild(option);
}


//code for days dropdown list
var day=document.getElementById("day");
var days=['Day','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20',
'21','22','23','24','25','26','27','28','29','30','31'];
var dayslist=document.createElement("select");
dayslist.id="day";
day.appendChild(dayslist);
//create and append the options
for(var i=0;i<days.length;i++)
{
    var option=document.createElement("option");
    option.value=days[i];
    option.text=days[i];
    dayslist.appendChild(option);
}

//code for year dropdown list
var year=document.getElementById("Year");
var years=['Years','1990','1991','1992','1993','1994','1995','1997','1998','1999','2000','2001','2002','2003','2004',
'2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020',
'2021','2022'];
var yearlist=document.createElement("select");
yearlist.id="year";
day.appendChild(yearlist);
//create and append the options
for(var i=0;i<years.length;i++)
{
    var option=document.createElement("option");
    option.value=years[i];
    option.text=years[i];
    yearlist.appendChild(option);
}

//code for country dropdown 
var country=document.getElementById("country");
var countries=[
    "Countries","Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", 
    "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", 
    "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia",
    "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", 
    "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", 
    "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", 
    "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", 
    "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", 
    "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", 
    "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", 
    "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", 
    "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", 
    "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", 
    "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", 
    "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", 
    "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", 
    "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", 
    "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", 
    "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", 
    "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", 
    "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", 
    "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", 
    "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", 
    "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", 
    "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion",
    "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", 
    "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", 
    "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", 
    "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", 
    "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", 
    "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", 
    "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", 
    "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", 
    "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", 
    "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", 
    "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", 
    "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"];
var countrylist=document.createElement("select");
countrylist.id="country";
country.appendChild(countrylist);
    //create and append the options
    for(var i=0;i<countries.length;i++)
    {
        var option=document.createElement("option");
        option.value=countries[i];
        option.text=countries[i];
        countrylist.appendChild(option);
    }

//code for state dropdown list
var state=document.getElementById("state");
var states=["States","Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana",
"Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya",
"Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttarakhand",
"Uttar Pradesh","West Bengal","Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli","Daman and Diu",
"Delhi","Lakshadweep","Puducherry"];
var statelist=document.createElement("select");
statelist.id="state";
state.appendChild(statelist);
    //create and append the options
    for(var i=0;i<states.length;i++)
    {
        var option=document.createElement("option");
        option.value=states[i];
        option.text=states[i];
        statelist.appendChild(option);
    }

//signup form 
document.querySelector("form").addEventListener("submit", myfunction);
var signData = JSON.parse(localStorage.getItem("userDetail")) || [];

document.querySelector("#navbar").addEventListener("click",function(){
    window.location.href="index.html"
})
function myfunction() {
    event.preventDefault();
    // console.log("submit") working
    var Email = document.querySelector("#email").value;
    var Pass = document.querySelector("#password").value;
    if (check(signData, Email)) {
        alert("Email is alrady register")
    }else if(Email ==""&&Pass == ""){
        alert("Invalid Credential")
    }
     else {
        var obj = {
            email: Email,
            pass: Pass
        }
        signData.push(obj);
        localStorage.setItem("userDetail", JSON.stringify(signData));
        document.querySelector("#email").value = "";
        document.querySelector("#password").value = ""
        alert("Your Account has been created")
        window.location.href = "login.html"
    }


}
function check(data, target) {
    if(data.length==0){
        return false;
    }
    for (var i = 0; i < data.length; i++) {
        if (data[i].email == target) {
            return true;
        }
    }
    return false;
}