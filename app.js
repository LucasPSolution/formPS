let $button =document.querySelector('#test')

$button.addEventListener('click',function(e){

letanswer =confirm('¿Estás seguro/a de eliminar el usuario?');

if(answer)

{



}else{

e.preventDefault();

}

})