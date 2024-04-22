let proyectos=[];
let tareas = [];


function agregarProyecto() {
    let nombreProyecto = document.getElementById('inputNombreProyecto').value
    let descripcionProyecto = document.getElementById('inputDescripcionProyecto').value
    let repite = false;
    
    proyectos.forEach(proyect => {
        if (nombreProyecto == proyect.Nombre) repite = true;
    });

    if (!repite) 
    {
        let nuevoProyecto = {
            Nombre: nombreProyecto,
            Descripcion: descripcionProyecto,
            ListaTareas: []
        };
        //Mete la tarea en el array
        proyectos.push(nuevoProyecto);

        let select = document.getElementById('select');
        let select2 = document.getElementById('selectProyecto');
        let opcion = document.createElement('option');
        let opcion2 = document.createElement('option');
        opcion.innerHTML = nuevoProyecto.Nombre;
        opcion2.innerHTML = opcion.value

        select.appendChild(opcion);
        select2.appendChild(opcion2);

        document.getElementById('inputNombreProyecto').value = '';
        document.getElementById('inputDescripcionProyecto').value = '';
    }
}

function agregarTarea() {
    let descripcionTarea = document.getElementById('inputDescripcionTarea').value
    let vencimientoTarea = document.getElementById('inputVencimientoTarea').value
    let proyectName = document.getElementById('select').value
    if (descripcionTarea !== '') 
    {
        let nuevaTarea = {
            Descripcion: descripcionTarea,
            Completada: false,
            FechaVencimiento: vencimientoTarea,
            Proyecto: proyectName
        };
        //Mete la tarea en el array
        proyectos.forEach(proyecto => {
            if(proyecto.Nombre == nuevaTarea.Proyecto)
            {
                proyecto.ListaTareas.push(nuevaTarea); 
            }
        });
    
        /*let li = document.createElement('li');
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = nuevaTarea.Completada;
        checkbox.addEventListener('change', function() {
            nuevaTarea.Completada = checkbox.checked;
        });

        let descripcion = document.createElement("p");
        descripcion.innerHTML = nuevaTarea.Descripcion;
        li.appendChild(checkbox);
        li.appendChild(descripcion);
        
        let listaTareas = document.getElementById('listaTareas'+nuevaTarea.Proyecto)
        listaTareas.appendChild(li);*/

        document.getElementById('inputDescripcionTarea').value = '';
        document.getElementById('inputVencimientoTarea').value = '';
    }
}

/*function mostrarTareasProyecto() {
    let nombreProyectoSeleccionado = document.getElementById('selectProyecto').value;
    let proyectoSeleccionado = proyectos.find(proyecto => proyecto.Nombre === nombreProyectoSeleccionado);
    let listaTareas = document.getElementById('listaTareas');
    listaTareas.innerHTML = '';
    proyectoSeleccionado.tareas.forEach(tarea => {
        let li = document.createElement('li');
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = tarea.Completada;
        checkbox.addEventListener('change', function() {
            tarea.Completada = checkbox.checked;
        });

        let descripcion = document.createElement("p");
        descripcion.innerHTML = tarea.Descripcion;
        
        li.appendChild(checkbox);
        li.appendChild(descripcion);
        
        listaTareas.appendChild(li);
    });
}*/


function mostrarTareasProyecto() {
    let nombreProyectoSeleccionado = document.getElementById('selectProyecto').value;
    let proyectoSeleccionado = proyectos.find(proyecto => proyecto.Nombre === nombreProyectoSeleccionado);
    let contenedorTareas = document.getElementById('contenedorTareas');
    contenedorTareas.innerHTML = '';

    if (proyectoSeleccionado) {
        proyectoSeleccionado.ListaTareas.forEach(tarea => {
            let li = document.createElement('li');
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = tarea.Completada;
            checkbox.addEventListener('change', function() {
                tarea.Completada = checkbox.checked;
            });
    
            let descripcion = document.createElement("p");
            descripcion.innerHTML = tarea.Descripcion;
            
            li.appendChild(checkbox);
            li.appendChild(descripcion);
            
            contenedorTareas.appendChild(li);
        });
    } else {
        contenedorTareas.textContent = 'No se encontró el proyecto seleccionado.';
    }
}

function mostrarTareasPorFecha()
{
    let tareasPorFecha = document.getElementById('tareasPorFecha')
    tareasPorFecha.innerHTML = null
    let nombreProyectoSeleccionado = document.getElementById('selectProyecto').value;
    let proyectoSeleccionado = proyectos.find(proyecto => proyecto.Nombre === nombreProyectoSeleccionado);
    let fecha = document.getElementById("tareaFecha").value

    proyectoSeleccionado.ListaTareas.forEach(tarea => {
        if(tarea.FechaVencimiento === fecha)
        {
            let li = document.createElement('li')
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = tarea.Completada;
            checkbox.addEventListener('change', function() {
                tarea.Completada = checkbox.checked;
            });
    
            let descripcion = document.createElement("p");
            descripcion.innerHTML = tarea.Descripcion + ' ' + tarea.FechaVencimiento;
            
            li.appendChild(checkbox);
            li.appendChild(descripcion);
            
            tareasPorFecha.appendChild(li);
        }
    });
}