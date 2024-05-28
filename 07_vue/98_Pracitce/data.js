const app = Vue.createApp({
    data() {
        return {
            newList: '', 
            todolists: [] 
        }
    },
    mounted() {
        
        if (localStorage.getItem('todolists')) {
            this.todolists = JSON.parse(localStorage.getItem('todolists'));
        }
    },
    methods: {
        saveText() {
        
                this.todolists.push(this.newList);
                this.newList = '';
                localStorage.setItem('todolists', JSON.stringify(this.todolists));
            }
        }
    });

app.mount('#app');
