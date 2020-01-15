<template>
  <div class="data-table">
    <table class="table">
      <thead>
        <tr>
          <th v-for="column in columnsclient" :key="column" class="table-head">{{column}}</th>
        </tr>
      </thead>
      <tbody>
        <tr class v-if="tableDataclient.length == 0">
          <td class="lead text-center" :colspan="columnsclient.length + 1">No data found.</td>
        </tr>



        <tr v-for="data in tableDataclient" :key="data.id" class="m-datatable__row" v-else>
          <td v-for="value in data" :key="value.id">{{value}}</td>
          <td>
            <!-- <button v-on:click="modifier($event)">modifier</button> -->
           <button v-on:click="modifier(data)" title="Modifier le client">modifier</button>

          </td>
          <td>
            <button v-on:click="fndelete(data.id)" title="Supprimer le client">X</button>
          </td>
        </tr>




      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "DataTableclient",
  props: {
    fetchUrlclient: { type: String, required: true },
    columnsclient: { type: Array, required: true }
  },
  data() {
    return {
      tableDataclient: {},

    };
  },
  created() {
    return this.fetchData(this.fetchUrlclient);
  },
  methods: {
    fetchData(url) {
      this.axios
        .get(url)
        .then(res => {
          this.tableDataclient = res.data;
          console.log(this.tableDataclient);
        })
        .catch(err => {
          console.log("error" + err);
        });
    },
    fndelete: function(id) {
      var url = this.fetchUrlclient.split("/");
      var lastSegment = url.pop() || url.pop();
      console.log(url.pop());
      url = this.fetchUrlclient.replace(lastSegment, "delete/" + id);
      console.log(url);

      this.axios
        .delete(url)
        .then(response => {
          alert(response.data);
          this.fetchData(this.fetchUrlclient);
          console.log(response.data);
        })
        .catch(err => {
          console.log("error" + err);
        });
    },
    // modifier: function(e) {
    //   console.log(e.target.parentElement.parentElement.children);

    //   let donneesFournisseur = e.target.parentElement.parentElement.children;
    //   let donneesFournisseurTable = [];

    //   for (let i = 0; i < donneesFournisseur.length - 5; i++) {
    //     donneesFournisseurTable.push(donneesFournisseur[i].innerText);
    // //   console.log(donneesFournisseurTable);
    //   }

    //   console.log(donneesFournisseurTable);
    modifier:function(data){

    this.$router.push({name:"modifierclient",params:{clientdata:data}})

    }



  }
};
</script>
<style scoped>
table {
  width: 100%;
}
th {
  height: 50px;
  background-color: #ecb144;
  vertical-align: center;
}
td {
  height: 50px;
  vertical-align: center;
}
</style>
