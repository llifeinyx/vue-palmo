<template>
  <div>

    <div class="row">
      <div class="col">
        <h2>List of examples</h2>
        <h4>(clickable)</h4>
        <ol>
          <li @click="showCurrentComponent(1)">vue interactive list</li>
        </ol>
      </div>
      <div class="col">
        <component v-bind:is="currentComponent"/>
      </div>
    </div>

  </div>
</template>

<script>

import InteractiveList from "@/components/InteractiveList";
import Yolo from "@/components/Yolo";


export default {
  name: "ExampleList",
  data() {
    return {
      currentComponent: Yolo
    }
  },
  methods: {
    showCurrentComponent: function (componentId){
      if (componentId === 1)
        this.currentComponent = InteractiveList
    }
  }
}
</script>

<style scoped>

</style>