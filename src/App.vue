<template>
  <div id="app">
    <h1>{{tittle}}</h1>
    <input v-model='newItem' @keyup.enter="addNew" class="text" placeholder="Add a new plan"><!--
 --><a v-on:click="addNew">+</a>
    <ul>
      <li v-for="item in items"  >
        <p class="detail" @click="toggleFinish(item)" :class="{'finished':item.isFinished}">
          {{item.label}}
        </p>
        <a class="del" @click="del($index,item)">del</a>
      </li>
    </ul>
  </div>
</template>

<script>
import Store from './store.js'

export default {    
  data () {
    return {
      tittle:'My todo list',
      items:Store.fetch(),
      newItem:''     
    }
  },

  watch: {
    'items': {
      handler: function (items) {
        Store.save(items)
      },
      deep: true
    }
  },

  methods:{
    toggleFinish:function (item){
      item.isFinished = !item.isFinished
    },
    addNew:function () {
      this.items.push({label:this.newItem,isFinished:false}); 
      this.newItem='';      
    },
    del:function ($index,item) {
      this.items.splice($index,1);
    }
  }
}



</script>

<style>
.finished{
  text-decoration: line-through;
  color: #D5D0D0;
}


#app{
  width: 70%;
  margin: 30px auto;
}

h1{
  text-align: center;
}

ul{
  list-style: none;
  padding: 0;
  
}

li{
  height: 30px;
  margin-top: 10px;
  position: relative;
  vertical-align: middle;
}
a{
  position: absolute;
  background-color: #5856B3;
  height: 30px;
  line-height: 30px;
  border-radius: 0 5px 5px 0;
  font-size: 30px;
  padding: 0 10px;
  font-weight: 800;
  color: white;
}
a:hover,a:active{
    cursor: pointer;
}

.text{
  height: 24px;
  border-radius:  5px 0 0 5px ;
}

.del{
  width: 3%;
  height: 100%;
  border-radius:0;
  font-size: 14px;
  display: inline-block;
  text-align: center;
  border-radius:  5px;
}

.detail{
  width: 95%;
  box-sizing: border-box;
  display: inline-block;
  height: 100%;
  margin: 0;
  border-bottom: 1px dashed #ccc;
  padding: 5px 10px 5px 5px ;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

</style>
