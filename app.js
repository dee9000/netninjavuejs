//first project
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
        changePublisher(publisher){
            //this.publisher = 'penguin'
            this.publisher = publisher
        },
        changeTitle(title){
            //this.title = 'Nemesis of the dark'
            this.title = title
        },
        changeAuthor(author){
            //this.author = "Thomas Kale"
            this.author = author
        }
    }
})

app.mount('#app')


//second project
const app2 = Vue.createApp({
    data(){
        return{
        title: '---',
        year:1985,
        genre: 'Adventure',
        actor: '--'
        }
    },
    methods:{
        changeTitle(title){
            this.title = title
        },
        changeActor(actor){
            this.actor = actor
        }
    }
})

app2.mount('#app2')



//third project
const app3 = Vue.createApp({
    data(){
        return{
        showStuff:true,
        title: '--',
        year:1978,
        genre: 'Adventure',
        actor: 'Christopher reeves'
        }
    },
    methods:{
        changeTitle(title){
            this.title = title
        },
        toggleButton(){
            this.showStuff = !this.showStuff
        }

    }
})
app3.mount('#app3')



const app4 = Vue.createApp({
    data(){
        return{
            showStuff:true,
            title: '--',
            year:1978,
            genre: 'Adventure',
            actor: 'Christopher reeves'
              }
    },
    methods:{
        handleEvent(){
            console.log('event')
        },
        toggleItem(){
            this.showStuff = !this.showStuff
        }

    }
})

app4.mount('#app4')