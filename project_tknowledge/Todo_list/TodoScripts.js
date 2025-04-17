document.addEventListener('DOMContentLoaded', () => {
    const validation = function (){
        let status = document.querySelector('#status');
        if (!task_input.value && !date_input.value) {
            status.textContent ='Please fill out the form.';
            status.hidden = false;
            return false;
        }

        if (task_input.value || date_input.value) {
            if (!task_input.value) {
                status.textContent = 'Please fill out the task input field.'
                status.hidden = false;
                return false;
            } else if (!date_input.value) {
                status.textContent = 'Please fill out the date input field.'
                status.hidden = false;
                return false;
            }
        }
        status.hidden = true;
        return true;
    } // function
    const deleteItem = function (id) {
        myArr = myArr.filter((item)=> item.task_id !==id);
        // filter the array based on items that have DIFFERENT ids from the argument id.
        renderList();
    }
    const renderList = function(){
        console.log(myArr);
        document.getElementById('list').innerHTML = '';
        myArr.forEach((item)=>{
            console.log(item.task_id);
            const div = document.createElement('div');
            div.className = 'task-list';
            const div2 = document.createElement("div");
            div2.className = 'date-list';
            const button = document.createElement('button');
            button.className = 'button-delete';
            button.addEventListener('click', () => deleteItem(item.task_id));
            button.textContent = 'Delete !';
            div.innerHTML = item.task;
            div2.innerHTML = item.date;
            document.getElementById('list').append(div,div2,button);
        });
    }
    const reset = function(fullReset = false){
        document.querySelector('form').reset();

        if (fullReset===true){
            document.getElementById('list').innerHTML = '';
        }
    }
    let myArr = [];
    let increment = 0;
    const task_input = document.getElementById('task');
    const date_input = document.getElementById('date');
    const button = document.querySelector('#button');
    button.addEventListener('click', (event) => {
        // validation
        // creating objects
        event.preventDefault();
        if (validation()){
            const newItem = {
                task_id: increment++,
                task: task_input.value,
                date: date_input.value,
            };
            myArr.push(newItem);
            renderList();
            reset();
        }
    });
})


