<template>
    <li>{{listItem.name}}</li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ListOfArray extends Vue {
  @Prop() private listItem!: {string: any};
}

</script>