<template>
  <div>
    <h1>This list was formed from an Array</h1>
    <ul>
      <ListOfArray 
        v-for="item of testArray" 
        :key="item.name"
        v-bind:listItem="item"/>  
        
    </ul>

    <h1>This list was formed from an Object</h1>
    <ul>
      <ListOfObject
        v-for="item of testObject" 
        :key="item.name"
        v-bind:listItem="item"/>  
    </ul>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

import ListOfArray from '../components/ListOfArray.vue';
import ListOfObject from '../components/ListOfObject.vue';

@Component({
  components: {
    ListOfArray,
    ListOfObject,
  }
})
export default class Lists extends Vue {
  testArray = [
        {value: 1, name: "From Array 1"}, 
        {value: 2, name: "From Array 2"}, 
        {value: 3, name: "From Array 3"}, 
        {value: 4, name: "From Array 4"}, 
        {value: 5, name: "From Array 5"}, 
        {value: 6, name: "From Array 6"}, 
        {value: 7, name: "From Array 7"}
      ]
  testObject = {
        arrayOfObjects1: {value: 1, name: "From Object 1"},
        arrayOfObjects2: {value: 2, name: "From Object 2"},
        arrayOfObjects3: {value: 3, name: "From Object 3"},
        arrayOfObjects4: {value: 4, name: "From Object 4"},
        arrayOfObjects5: {value: 5, name: "From Object 5"},
        arrayOfObjects6: {value: 6, name: "From Object 6"},
        arrayOfObjects7: {value: 7, name: "From Object 7"},
      }
}
</script>
