var tpl =
`<content>
    <section>
        <ul class="sd-card pd-m">
            <dl v-for = 'item in goods'>
                <span>{{ item.name }}</span>
                <div class='clip' v-for = 'img in item.imgurl'>
                    <img :src='img'/>
                </div>
            </dl>
        </ul>
    </section>
</content>`
module.exports = {
    name: 'ta-aside',
    template: tpl,
    data() {
        return {
            msg: "webpack vue",
            goods:[]
        }
    },
    methods:{
        initData(){
            
        }
    },
    mounted(){
        axios.get('api/goodsList.json')
        .then(res=>{
            this.goods = res.data.list
            console.log(res.data)
        })
    }
}