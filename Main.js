function loadjson(file,callback){
    var xhr=new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
        if (xhr.readyState===4 && xhr.status=="200"){
            callback(xhr.responseText);            
        }
    };
    xhr.send(null);
}
loadjson("data.json",function(text){
    var data=JSON.parse(text);
    console.log(data);
    display(data.cards)
})
function display(mb){
    var deck=document.querySelector(".card-deck")
    deck.classList.add("text-center")
    console.log(deck)
    for(var i in mb){
        // console.log(mb[i].name)
        var carddiv=document.createElement("div")
        carddiv.classList.add("card")
        var cardimage=document.createElement("img")
        // console.log(cardimage)
        cardimage.src=mb[i].image;
        carddiv.appendChild(cardimage)
        deck.appendChild(carddiv)
        // console.log(cardimage)
        // Name Area
        var cardname=document.createElement("h3")
        cardname.textContent="Model:"+mb[i].name;
        carddiv.appendChild(cardname)
        // Rate Area
        var cardrate=document.createElement("h3")
        cardrate.textContent="Price:"+mb[i].rate
        carddiv.appendChild(cardrate)
        // Offer Area
        var cardoffer=document.createElement("h3")
        cardoffer.textContent="Discount:"+mb[i].offer
        carddiv.appendChild(cardoffer)
        // Button Area
        var cardbutton=document.createElement("button")
        cardbutton.classList.add("btn-info")
        cardbutton.textContent=mb[i].button
        carddiv.appendChild(cardbutton)
    }   
}