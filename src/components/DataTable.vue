<template>
    <div class="data-table">
        <table class="table">
            <thead>
                <tr>
                    <th v-for="column in columns" :key="column"
                    class="table-head">
                    {{column}}

                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="" v-if="tableData.length == 0">
                    <td class="lead text-center" :colspan="columnsFournissseur.length + 1">No data found.</td>
                </tr>
                <tr v-for="data in tableData" :key="data.id" v-else>
                    <td v-for="value in data" :key="value.id">{{value}}</td>
                    <td><button v-on:click="modifier(data.id)">modifier</button></td>
                    <td><button v-on:click="fndelete(data.id)">delete</button></td>
                </tr>

            </tbody>
        </table>
    </div>
</template>

<script>

export default {
    name:'DataTable',
    //props transmises par le parent qui est dans admin  produitAdmin
    props:{
        fetchUrl:{type:String,required:true},
        columns:{type:Array,required:true},
    },
    data(){
        return{
            tableData:{}
        }
    },
    created(){
        return this.fetchData(this.fetchUrl)
    },
    methods:{
        fetchData(url){
            this.axios.get(url)
            .then(res=>{
                this.tableData=res.data
                console.log(this.tableData)
            })
             .catch(err =>{
                        console.log("error" + err)
                    });
        },
        fndelete: function(id){
            var url = this.fetchUrl.split('/');
            var lastSegment = url.pop() || url.pop();
            console.log(url.pop());
            url = this.fetchUrl.replace(lastSegment,"delete/"+id);
           console.log(url);

           this.axios.delete(url).then((response)=>{
               alert(response.data)
               this.fetchData(this.fetchUrl);
               console.log(response.data);
           })
            .catch(err =>{
                        console.log("error" + err)
                    });

        }
        // ,
        // modifier:function (data.id){

        // },
    },

}
</script>
<style scoped>

table{
    width : 100%

}
.table{
    width: 100%;
}
th{
    height: 50px;
    background-color: #ecb144;
}
td{
    height: 50px;
    vertical-align: center;
}



</style>
