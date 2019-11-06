
<template>
<tr class="bleu">
  <td><input type="text" class="form-control" v-model="input.produit" ref="modif" placeholder="Article"></td>
  <td><input type="text" class="form-control" v-model="input.quantite" placeholder="Quantité"></td>
  <td><input type="text" class="form-control" v-model="input.prix" placeholder="Prix"></td>
  <td colspan="3"><button class="btn btn-primary btn-block" @click="ajouter()">Ajouter</button></td>
</tr>
</template>

<script>
export default {
  props: ['produit'],
  computed: {
    input: function() {
      return this.produit;
    }
  },
  created() {
    console.log(this.produit);
  },
  // $emit envoyer un msg au parent
  methods: {
    ajouter: function() {
      this.$emit('add', this.input);
    }
  }
}
</script>
  <style >
.bleu {
  background-color: lightblue !important;
}
</style>
