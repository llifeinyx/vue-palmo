export default {
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