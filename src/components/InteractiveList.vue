<template>
<div class="p-5">
  <h4>Add list item, then delete or change them</h4>
  <ul class="list-group">
    <li class="list-group-item active">
      <div class="input-group">
        <input v-model="text" type="text" class="form-control" placeholder="some text">
        <div class="input-group-append">
          <button @click="addItem" class="btn btn-dark" type="button">Add</button>
        </div>
      </div>
    </li>
    <li class="list-group-item" v-for="(item, index) in list" v-bind:key="item.id">
      <div class="d-flex align-items-center justify-content-between">
        <input type="text" class="w-75 p-1 border-1 border-opacity-10 border-primary" :value="item.text" @input="event => textToEdit[index] = event.target.value">
        <div>
          <button @click="editItem(index)" class="m-1 btn btn-info" type="button">Edit</button>
          <button @click="deleteItem(index)" class="m-1 btn btn-danger" type="button">Delete</button>
        </div>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: "InteractiveList",
  data() {
    return {
      list: [],
      id: 0,
      text: null,
      textToEdit: []
    }
  },
  methods: {
    addItem: function (){
      if (!this.text)
        return

      this.list.push({text: this.text, id: this.id++})
    },
    deleteItem: function (index){
      this.list.splice(index, 1)
    },
    editItem: function (index){
      if (this.textToEdit[index]) {
        this.list[index].text = this.textToEdit[index]
        this.textToEdit = []
      }
    }
  }
}
</script>

<style scoped>

</style>