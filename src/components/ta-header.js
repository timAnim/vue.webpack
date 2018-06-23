var tpl =
    `<header>
        <section>
            <li class='pd-m-h'>
                <button class='ht-l'><i class='fa fa-bars'></i></button>
                <h1>{{ title }}</h1>
            </li>
        </section>
    </header>`

module.exports = {
    name: 'ta-header',
    template: tpl,
    data() {
        return {
            title: "webpack vue"
        }
    }
}