export const createTodo = async (todo) => {
    try {
        const response = await fetch('api/todos/create', {
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
        const res = await fetch('api/todos');
        const data = await res.json();
        return data;
    } catch (error) {
        return { error };
    }
};
  
export const removeTodo = async (id) => {
    try {
        await fetch(`/api/todos/${id}`, {
        method: 'DELETE',
        });
        return 'deleted';
    } catch (error) {
        return { error };
    }
};
  