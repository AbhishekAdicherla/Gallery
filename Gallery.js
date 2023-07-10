var img=document.images;
console.log(img)
for(i=0;i<10;i++)
{
    img[i].src=`${i}.jpg`
    img[i].alt="Photo not Found"
}
function bigImageWindow(urlOFImg)
{
    document.getElementById("bigImage").style.display="flex"
    document.getElementById("Image").style.backgroundImage=`url(${urlOFImg})`
}
function closeWindow()
{
    document.getElementById("bigImage").style.display="none"
}