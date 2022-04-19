const list = document.querySelector('#lista');

Sortable.create(list,{
    animation: 150,
    chosenClass: "selected",
    ghostClass: "ghost"
});