const addBtn = document.getElementById('add-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');

  const span = document.createElement('span');
  span.className = 'task-text';
  span.textContent = taskText;

  const buttonGroup = document.createElement('div');
  buttonGroup.className = 'button-group';

  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✓';
  completeBtn.className = 'complete-btn';
  completeBtn.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.className = 'edit-btn';
  editBtn.addEventListener('click', () => {
    const newText = prompt('Edit your task:', span.textContent);
    if (newText !== null && newText.trim() !== '') {
      span.textContent = newText.trim();
    }
  });

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'X';
  removeBtn.className = 'remove-btn';
  removeBtn.addEventListener('click', () => {
    li.remove();
  });

  buttonGroup.appendChild(completeBtn);
  buttonGroup.appendChild(editBtn);
  buttonGroup.appendChild(removeBtn);

  li.appendChild(span);
  li.appendChild(buttonGroup);
  taskList.appendChild(li);

  taskInput.value = '';
});
