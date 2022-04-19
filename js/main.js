const list = document.querySelector('#lista');

Sortable.create(list,{
    animation: 150,
    chosenClass: "selected",
    ghostClass: "ghost",
    // dragClass: "drag"

    onEnd: () => {
        console.log('Se incerto un elemento')
    },
    group: "lista-personas",
    store: {
        //Guardamos el ordend e la lista
        set: (sortable)=>{
            const orden = sortable.toArray();
            localStorage.setItem(sortable.options.group.name, orden.join('-'))
        },

        //Obtenemos el orden de la lista
        get: (sortable)=>{
            const orden = localStorage.getItem(sortable.options.group.name)
            return orden ? orden.split('-') : [];
        }
    }
});