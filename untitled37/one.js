window.onload=function () {
    var vm=new Vue({
        el:"#divone",
        data:{
            myData:[],
            username:"",
            userage:"",
            nowIndex:-100
        },
        methods:{
            add:function () {
                if(this.username!=''&&this.userage!=''){
                    this.myData.push({name:this.username,age:this.userage});
                }
                this.userage='';
                this.username='';
            },
            deleteMsg:function (n) {
                if (n == -2) {
                    this.myData = '';
                } else {
                    this.myData.splice(n, 1);
                }
            }

        }

    })
}