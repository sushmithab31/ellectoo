var addtocart = document.getElementById("addcart")
var backfromcart = document.querySelector(".backcart")
var cartpopup = document.querySelector(".cartpop")

var addtoprf = document.getElementById("addprf")
var backfromprf = document.querySelector(".backprf")
var prfpopup = document.querySelector(".prfpop")

var addtowish = document.getElementById("addwish")
var backfromwish = document.querySelector(".backwish")
var wishpopup = document.querySelector(".wishpop")

function addshow()
{
    cartpopup.style.display= "block"
}
function backcartpop()
{
    cartpopup.style.display= "none"
}

function showprf()
{
    prfpopup.style.display= "block"
}
function backprfpop()
{
    prfpopup.style.display= "none"
}

addtowish.addEventListener("click", function()
{
    wishpopup.style.display="block"

})
backfromwish.addEventListener("click", function()
{
    wishpopup.style.display="none"
    
})
