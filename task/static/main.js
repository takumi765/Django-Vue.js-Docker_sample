const App = {
    data() {
        return {
            tasks: ['test'],
        }
    },
    /* 通常、Vue は{{}}を使って、データを表示するのですが
    今回 django で{{}}を使ってしまっているので、Vue のデータは[[]]を使って表示します。 */
    compilerOptions: {
        delimiters: ['[[', ']]'],
    },
    //methods は、Vue で使用するメソッドを書く部分です。
    methods: {
        getTasks(){
            fetch(URL, {//取得したい情報を提供している url を書き、
                method: 'get',
                headers: {
                    'Content-Type':  'application/json',
                },
            })
            .then((response) => {//返ってきたレスポンスを 何形式で受け取るか指定し、
                return response.json();
            })
            .then((tasks_list) => {//レスポンスのデータの処理方法を定義します。
                this.tasks = tasks_list;
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
        },
    },
    //created()には Vue のオブジェクトが起動したときに実行される処理を書きます。
    created() {
        this.getTasks();
    },
}


/* Vue.createApp(App).mount('#app')で、html の id=app の要素に、
この Vue のオブジェクトが作られるようになります。 */
Vue.createApp(App).mount('#app');