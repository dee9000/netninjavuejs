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
        }
    }
})

app.mount('#app')