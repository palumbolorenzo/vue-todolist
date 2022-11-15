/*

Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.

*/

new Vue (
    {
        el: '#app',
        data: {
            todos: [
                'fare i compiti',
                'fare la spesa',
                'fare il bucato'
            ],
            newTodo: '',
        },
        methods: {
            addTodo() {
                this.todos.push(this.newTodo);
                this.newTodo = '';
            },
            deleteTodo(index){
                this.todos.splice(index, 1);
            }
        }
    }
);

