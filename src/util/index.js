const baseURL = 'https://gabriel-bigelow-todos-backend.netlify.app/';

export const createTodo = async (todo) => {
    try {
        const response = await fetch(baseURL + 'api/todos/create', {
            method: 'POST',
            body: todo,
        });
        const jsonResponse = await response.json();
        return jsonResponse;
    } catch (error) {
        return { error };
    }
};

export const getTodos = async () => {
    try {
        const res = await fetch(baseURL + 'api/todos');
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        return { error };
    }
};
  
export const removeTodo = async (id) => {
    try {
        await fetch(baseURL + `/api/todos/${id}`, {
        method: 'DELETE',
        });
        return 'deleted';
    } catch (error) {
        return { error };
    }
};
  