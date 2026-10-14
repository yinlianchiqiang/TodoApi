// Get todo item
async function loadTodos() {
    const response = await fetch('/api/Todo');
    if (!response.ok) {
        alert('取得待辦事項失敗');
        return;
    }

    const todos = await response.json();
    //根據filter的值，篩選出符合條件的待辦事項
    const filter = document.getElementById('filter').value;
    const filteredTodos = todos.filter(todo => {
        if (filter === 'active') {
            return !todo.isComplete;
        }
        if (filter === 'completed') {
            return todo.isComplete;
        }  
        return true;
    });
    

    const todoList = document.getElementById('todoList');

    todoList.innerHTML = ''
    //將篩選後的待辦事項加入到todoList中t中
    filteredTodos.forEach(todo => {
        const li = document.createElement('li');
        //new checkbox 狀態會隨著資料庫更新
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.isComplete;
        //如果checkbox狀態改變，會呼叫updateTodo函式更新資料庫
        checkbox.addEventListener('change', () => {
            updateTodo(todo.id, checkbox.checked);
        });

        const title = document.createElement('span');
        title.textContent = todo.title;
        if (todo.isComplete) {
            title.classList.add('completed');
        }

        //new edit button
        const editButton = document.createElement('button');
        editButton.textContent = '編輯';
        //如果edit button被點擊，會呼叫editTodo函式編輯資料庫中的待辦事項
        editButton.addEventListener('click', () => {
            editTodo(todo.id, title);
        });

        //new delete button 
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '刪除';
        //如果delete button被點擊，會呼叫deleteTodo函式刪除資料庫中的待辦事項
        deleteButton.addEventListener('click', () => {
            deleteTodo(todo.id);
        });
        //將checkbox、title、delete button加入li中
        li.appendChild(checkbox);
        li.appendChild(title);
        li.appendChild(editButton);
        li.appendChild(deleteButton);

        todoList.appendChild(li);
    });
}

// Add new todo item
async function addTodo() {
    const text = document.getElementById('todoTitle').value;
    if (text.trim() === '') {
        alert('請輸入待辦事項');
        return;
    }
    const response = await fetch('/api/Todo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Title: text,
            IsComplete: false
        })
    });

    if (response.ok) {
        text.value = '';
        await loadTodos();
    }
    else {
        alert('新增待辦事項失敗');
        return;
    }
}

//update todo item
async function updateTodo(id, state) {
    const response = await fetch(`/api/Todo/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            IsComplete: state
        })
    });
    if (response.ok) {
        await loadTodos();
    } else {
        alert('更新待辦事項失敗');
    }
    await loadTodos();
}

//edit todo item
async function editTodo(id, titleElement) {
    const newTitle = prompt('請輸入新的標題名稱', titleElement);

    if (newTitle === null) {
        return;
    }
    if (newTitle.trim() === '') {
        return;
    }
    const response = await fetch(`/api/Todo/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Title: newTitle
        })
    });
    if (response.ok) {
        await loadTodos();
    } else {
        alert('更新待辦事項失敗');
        return;
    }
}
//delete todo item
async function deleteTodo(id) {
    const response = await fetch(`/api/Todo/${id}`, {
        method: 'DELETE'
    });
    if (response.ok) {
        await loadTodos();
    }
    else {
        alert('刪除待辦事項失敗');
        return;
    }
}

loadTodos();