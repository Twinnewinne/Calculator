document.getElementById('add-task').addEventListener('click',function(){
    
    let taskInput = document.getElementById('new-task');
    let taskText = taskInput.value .trim();

    if (taskText != ''){
        let tasklist = document.getElementById('tasks');
        let newTask = document.createElement('li');

        let taskcontent = document.createElement('span');
        taskcontent.textContent = taskText;
        newTask.appendChild(taskcontent);

        let deletebutton = document.getElementById('button');
        deletebutton.textContent = 'delete';

        deletebutton.addEventListener('click',function(){
            tasklist.removeChild(newTask);
        });

        newTask.appendChild(deletebutton);

        tasklist.appendChild(newTask);

        taskInput.value='';


    }

});

document.getElementById('new-task').addEventListener('keypress',function(event){

    if (event.key === 'Enter') {
        document.getElementById('add-task').click();
    }
});
