var arr = [
    {
        dp: "https://cdn11.bigcommerce.com/s-8smrzb0w7f/images/stencil/1280x1280/products/63085/93892/61eheyGRRNL._SX466___03326.1637945292.jpg?c=1?imbypass=on.jpg",
        story:"https://images.bbtmedia.com/sites/default/files/styles/extra_large__600x600_/public/art_originals/0053_SB%2010-6-12.jpg?itok=ZXSiKpa0"
    },
    {
        dp:"https://www.drikpanchang.com/images/events/iskcon/xiskcon_shrila_prabhupada.jpg.pagespeed.ic.C9x2EPPLAI.jpg",
        story:"https://images.bbtmedia.com/sites/default/files/styles/extra_large__600x600_/public/art_originals/0068_Srila%20Bhaktisiddhanta.jpg?itok=NqO6cJdW"
    },
    {
        dp:"https://pbs.twimg.com/media/EedxsohUcAYR4r7.jpg",        
        story:"https://images.bbtmedia.com/sites/default/files/styles/extra_large__600x600_/public/art_originals/0053_SB%2010-4-3.jpg?itok=5NjOTtRh"
    },
    {
        dp:"https://64.media.tumblr.com/9992463955fafc20fad6262b79df3408/4707b6d9aaf83094-18/s1280x1920/cda0c386102218a8be50c08b1ec7e19fd680db52.jpg",
        story:"https://images.bbtmedia.com/sites/default/files/styles/extra_large__600x600_/public/art_originals/0050_SB%207-2-4.jpg?itok=Bhl3evMq"
    },
    {
        dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx8759yCuFFD88i2_NRzX-2sRAk8_6cKSejj94XiVZzg25Okw_F14qIOGf3I1kPk24YPs&usqp=CAU.jpg",
        story:"https://images.bbtmedia.com/sites/default/files/styles/extra_large__600x600_/public/art_originals/0026_Adi%203-5.jpg?itok=Mq7HDbEP"
    }
]
var clutter = " "
var full = document.querySelector("#full-screen")
var stat = document.querySelector("#stories")
    arr.forEach(function(elem, idx){
clutter += `<div class = status>
      <img id = "${idx}"src = "${elem.dp}">             
</div> `

    })
stat.innerHTML = clutter;

stories.addEventListener("click", function(dets){

    document.querySelector("#full-screen").style.display = "block";
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`;
setTimeout(function(){
    full.style.display = "none";
},3000)

})


