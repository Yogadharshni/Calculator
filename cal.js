var val=document.querySelector('.to_get_val')
function oparand(e){
    val.value += e
}
function result(){
    try
    {
       val.value = eval(val.value);
    }
    catch(error)
    {
       alert("Invalid")
    }
}
function clear_screen(){
    val.value=""
}
function Del(){
    val.value = val.value.slice(0,-1)
}