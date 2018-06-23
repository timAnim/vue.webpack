var tpl =
`<aside>
    <content>
        <li class='ht-l'></li>
        <li  v-for='card in cards'
            class = 'align-indent ht-l'>
            <div>{{ card.name }}</div>
        </li>
    </content>
</aside>`
module.exports = {
    name: 'ta-aside',
    template: tpl,
    data() {
        return {
            title: "webpack vue",
            cards:[]
        }
    },
    methods:{
        initData(){
            
        }
    },
    mounted(){
        axios.get('api/userinfo.json').then(res=>{
            this.cards = res.data.address
        })
    }
}