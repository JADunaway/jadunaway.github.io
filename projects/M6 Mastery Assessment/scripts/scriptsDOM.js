// changing body paragraph using a querySelector to a inspriration statement
document.querySelector("p").innerHTML = "We don't know where we are going, or where we might just belong. All" +
" we know is memories of those things far and beyond. It's sad to look back and wonder just why things had to go." +
" Was it for our happiness? Will we ever know?"

// changing images though DOM manipulation 
document.querySelector("#firstImage").src = "images/Cycling_unsplash.jpg";
document.querySelector("#secondImage").src = "images/MyBoys.jpg";
document.querySelector("#thirdImage").src = "images/ChocolateCake_unsplash.jpg";

// changing the titles through DOM manipulation using querySelectorALL
var titleNodeList = document.querySelectorAll(".content-title");
titleNodeList[0].innerHTML = "Cycling the Country Side";
titleNodeList[1].innerHTML = "The Reason I Keep Going";
titleNodeList[2].innerHTML = "The Joy of Baking";

// changing the paragraphs to why the pictures mean something to me using DOM manipulation using querySelector
document.querySelector("#firstText").innerHTML = "I miss riding the country side miles within. I saw places and" +
" met individuals I would have never have seen if I was driving." + " It helped clear my mind and gave me a sense of fulfillment"
document.querySelector("#secondText").innerHTML = "My boys are my everything. They are my blessing! They are what" +
" drives me to keep going and not to give up."
document.querySelector("#thirdText").innerHTML = "Baking is what I enjoy. My bread is phenomenal and my chocolate" +
" cake is like no other. Its a stress reliever, its relaxing, and more importanlty my family gets to enjoy."

// changing the header color to a different background color using EventListners and Functions on the buttons
document.querySelector("#ColorChanging").addEventListener("click", function() {
    colorChanger("#833B3B");
});
document.querySelector("#ColorChanged").addEventListener("click", function() {
    colorChanger("#B7D1BB");
});
document.querySelector("#ColorChange").addEventListener("click", function() {
    colorChanger("#858DA0");
});

// writing helper function to change color
function colorChanger(color) {
    document.querySelector(".headings").style.background = color;
}