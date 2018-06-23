var tpl = 
`<main>
    <ta-aside/>
    <article>
        <ta-header/>
        <ta-content/>
    </article>
</main>`

module.exports={
    el:'#app',
    template:tpl,
    data(){
        return{
        }
    }
}