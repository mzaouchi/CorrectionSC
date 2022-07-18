var btnsP = document.querySelectorAll('.btnPlus')
var btnsM = document.querySelectorAll('.btnMoins')
var btnsD = document.querySelectorAll('.fa-trash')
var btnsH = document.querySelectorAll('.fa-heart')

for(let i = 0; i <btnsP.length;i++){
    btnsP[i].addEventListener('click',function(){
        btnsP[i].previousElementSibling.innerHTML++
        calculSomme()        
    })
}


for(let i = 0; i < btnsM.length;i++){
    btnsM[i].addEventListener('click',function(){
        if(btnsM[i].nextElementSibling.innerHTML>0){
            btnsM[i].nextElementSibling.innerHTML--
            calculSomme()
        }
    })
}

for(let i = 0; i<btnsD.length;i++){
    btnsD[i].addEventListener('click',function(){
        btnsD[i].parentElement.remove()
        calculSomme()
    })
}

for(let i = 0; i<btnsH.length;i++){
    btnsH[i].addEventListener('click',function(){
        btnsH[i].classList.toggle('heart')
    })
}

function calculSomme(){
    var priceS = document.querySelectorAll('.price')
    var qteS = document.querySelectorAll('.qte')
    var sommeT = document.querySelector('#somme')
    var som = 0
    for(let i = 0; i < priceS.length;i++){
        som = som+ priceS[i].innerHTML * qteS[i].innerHTML
    }
    sommeT.innerHTML = som
}


