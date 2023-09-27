function generate(){
    document.querySelector("#img").innerHTML = ""
    const input = document.querySelector("#input").value;
    show_image(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`, 150, 150, "generated qr")
    document.getElementById("gen_text").innerHTML = "QR Code Generated Successfully!" 
}

//event fires when button is clicked
document.querySelector("#gen_btn").addEventListener("click", ()=>{ 
    generate();
})

//event fires enter button is pressed
document.querySelector("#input").addEventListener('keydown', (e)=>{
    if(e.keyCode === 13){
        generate();
    }
})

function show_image(src, width, height, alt) {
    var img = document.createElement("img"); //create an image element
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    
    // This next line will just add it to the given tag
    document.querySelector("#img").appendChild(img);
    // document.body.appendChild(img);
    }