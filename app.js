const app = Vue.createApp({
    //data, functions
    data() {
        return{
            title: 'The final Empire',
            author: 'Brandon sanderson',
            age: 45,
            publisher: 'unicorn books'
        }
    },
    methods:{
        changePublisher(){
            this.publisher = 'penguin'
        },
        changeTitle(){
            this.title = 'Nemesis of the dark'
        },
        changeAuthor(){
            this.author = "Thomas Kale"
        }
    }
})

app.mount('#app')