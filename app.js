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


//fourth project
const app4 = Vue.createApp({
    data(){
        return{
            showStuff:true,
            title: '--',
            year:1978,
            genre: 'Adventure',
            actor: 'Christopher reeves',
            x:0,
            y:0
        }
    },
    methods:{
        handleEvent(e, data){
            console.log(e, e.type)
            if(data){
                console.log(data)
            }
        },
        handleMousemove(e){
          this.x = e.offsetX
          this.y = e.offsetY
        },
        toggleItem(){
            this.showStuff = !this.showStuff
        }

    }
})

app4.mount('#app4')

//fifth project
const app5 = Vue.createApp({
    data(){
        return{
            showBooks:true,
            books: [
                {title: 'name of the wind', author: 'patrick rothfuss'},
                {title: 'the way of kinds', author: 'brandon sanderson'},
                {title: 'the final empire', author: 'brandon sanderson'},
            ]
        }
    },
    methods:{
        toggleBooks(){
            this.showBooks = !this.showBooks
        }

    }
})
app5.mount('#app5')

//sixth project


const app6 = Vue.createApp({
    data(){
        return{
            movies:[
                {title:'the goonies', year: 1985},
                {title:'superman', year: 1978},
                {title:'batman', year: 1989},
                {title:'conan', year: 1981}
            ]
        }
    }
})
app6.mount('#app6')
