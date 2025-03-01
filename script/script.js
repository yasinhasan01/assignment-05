//for btn-1
document.getElementById('btn-1').addEventListener('click', function () {
    alert('Board updated successfully');
    let taskCount = parseInt(document.getElementById('task').innerText) || 0;
    let taskncount = parseInt(document.getElementById('task2').innerText) || 0;
    if (taskCount === 1) {
        alert('congrates!!! You have completed all the current  task');
    }
    taskCount = taskCount - 1;
    taskncount = taskncount + 1;
    document.getElementById('task').innerText = taskCount;
    document.getElementById('task2').innerText = taskncount;
    const currentTime = new Date().toLocaleTimeString();
    const taskDone = document.createElement('p');
    taskDone.innerText = `You have completed the task: Fix Mobile Button Issue at  ${currentTime}`;
    taskDone.classList.add('taskd')
    const taskContainer = document.getElementById('task-container'); 
    if (taskContainer) {
        taskContainer.appendChild(taskDone);
    } else {
        console.error('task-container not found');
    }
    let button = document.getElementById('btn-1');
    button.disabled = true;
    button.style.backgroundColor = 'gray';
    button.style.cursor = 'not-allowed';
});

//for btn-2
document.getElementById('btn-2').addEventListener('click', function () {
    alert('Board updated successfully');

    let taskCount = parseInt(document.getElementById('task').innerText) || 0;
    let taskncount = parseInt(document.getElementById('task2').innerText) || 0;

    if (taskCount === 1) {
        alert('congrates!!! You have completed all the current  task');
    }

    taskCount = taskCount - 1;
    taskncount = taskncount + 1;
    document.getElementById('task').innerText = taskCount;
    document.getElementById('task2').innerText = taskncount;
    const currentTime = new Date().toLocaleTimeString();

    const taskDone = document.createElement('p');
    taskDone.innerText = `You have completed the task Add Dark Mode at  ${currentTime}`;
    taskDone.classList.add('taskd')
    const taskContainer = document.getElementById('task-container'); 
    if (taskContainer) {
        taskContainer.appendChild(taskDone);
    } else {
        console.error('task-container not found');
    }
    let button = document.getElementById('btn-2');
    button.disabled = true;
    button.style.backgroundColor = 'gray';
    button.style.cursor = 'not-allowed';
});

//for btn-3
document.getElementById('btn-3').addEventListener('click', function () {
    alert('Board updated successfully');
    let taskCount = parseInt(document.getElementById('task').innerText) || 0;
    let taskncount = parseInt(document.getElementById('task2').innerText) || 0;

    if (taskCount === 1) {
        alert('congrates!!! You have completed all the current  task');
    }
    taskCount = taskCount - 1;
    taskncount = taskncount + 1;
    document.getElementById('task').innerText = taskCount;
    document.getElementById('task2').innerText = taskncount;
    const currentTime = new Date().toLocaleTimeString();
    const taskDone = document.createElement('p');
    taskDone.innerText = `You have completed the task Optimize  Home page  at  ${currentTime}`;
    taskDone.classList.add('taskd')
    const taskContainer = document.getElementById('task-container'); // Fixed spelling
    if (taskContainer) {
        taskContainer.appendChild(taskDone);
    } else {
        console.error('task-container not found');
    }
    let button = document.getElementById('btn-3');
    button.disabled = true;
    button.style.backgroundColor = 'gray';
    button.style.cursor = 'not-allowed';
});

//for btn-4
document.getElementById('btn-4').addEventListener('click', function () {
    alert('Board updated successfully');
    let taskCount = parseInt(document.getElementById('task').innerText) || 0;
    let taskncount = parseInt(document.getElementById('task2').innerText) || 0;
    if (taskCount === 1) {
        alert('congrates!!! You have completed all the current  task');
    }
    taskCount = taskCount - 1;
    taskncount = taskncount + 1;
    document.getElementById('task').innerText = taskCount;
    document.getElementById('task2').innerText = taskncount;
    const currentTime = new Date().toLocaleTimeString();
    const taskDone = document.createElement('p');
    taskDone.innerText = `You have completed the task Add new emoji 🤲 at  ${currentTime}`;
    taskDone.classList.add('taskd')
    const taskContainer = document.getElementById('task-container'); 
    if (taskContainer) {
        taskContainer.appendChild(taskDone);
    } else {
        console.error('task-container not found');
    }
    let button = document.getElementById('btn-4');
    button.disabled = true;
    button.style.backgroundColor = 'gray';
    button.style.cursor = 'not-allowed';
});

//for btn-5
document.getElementById('btn-5').addEventListener('click', function () {
    alert('Board updated successfully');
    let taskCount = parseInt(document.getElementById('task').innerText) || 0;
    let taskncount = parseInt(document.getElementById('task2').innerText) || 0;
    if (taskCount === 1) {
        alert('congrates!!! You have completed all the current  task');
    }
    taskCount = taskCount - 1;
    taskncount = taskncount + 1;
    document.getElementById('task').innerText = taskCount;
    document.getElementById('task2').innerText = taskncount;
    const currentTime = new Date().toLocaleTimeString();
    const taskDone = document.createElement('p');
    taskDone.innerText = `You have completed the task Integrate OpenAI API  at  ${currentTime}`;
    taskDone.classList.add('taskd')
    const taskContainer = document.getElementById('task-container'); 
    if (taskContainer) {
        taskContainer.appendChild(taskDone);
    } else {
        console.error('task-container not found');
    }
    let button = document.getElementById('btn-5');
    button.disabled = true;
    button.style.backgroundColor = 'gray';
    button.style.cursor = 'not-allowed';
});

//for btn-6
document.getElementById('btn-6').addEventListener('click', function () {
    alert('Board updated successfully');

    let taskCount = parseInt(document.getElementById('task').innerText) || 0;
    let taskncount = parseInt(document.getElementById('task2').innerText) || 0;

    if (taskCount === 1) {
        alert('congrates!!! You have completed all the current  task');
    }

    taskCount = taskCount - 1;
    taskncount = taskncount + 1;

    document.getElementById('task').innerText = taskCount;
    document.getElementById('task2').innerText = taskncount;

    // Get the current time
    const currentTime = new Date().toLocaleTimeString();

   
    const taskDone = document.createElement('p');
    taskDone.innerText = `You have completed the task Improve Job searching  at  ${currentTime}`;
    taskDone.classList.add('taskd')
    const taskContainer = document.getElementById('task-container'); 
    if (taskContainer) {
        taskContainer.appendChild(taskDone);
    } else {
        console.error('task-container not found');
    }

   
    let button = document.getElementById('btn-6');
    button.disabled = true;
    button.style.backgroundColor = 'gray';
    button.style.cursor = 'not-allowed';
});

function setTodayDate() {
    const today = new Date();
    const options = {  month: 'short', day: '2-digit', year: 'numeric' };

    document.getElementById('day').innerText = today.toLocaleDateString('en-US', { weekday: 'short' }) + ',';
    document.getElementById('full-date').innerText = today.toLocaleDateString('en-US', options).replace('br' , '');
}

setTodayDate();
document.getElementById('deleteButton').addEventListener('click', function() {
    var content = document.getElementById('task-container');
    content.innerHTML = ' ';
});
document.getElementById('newPage').addEventListener('click', function() {
    
    window.location.href = './blog.html'; 
});
document.getElementById('back').addEventListener('click', function() {
   
    window.location.href = './index.html'; 
});
function randomColor() {
    let random = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = random;
}
