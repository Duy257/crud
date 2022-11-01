<template>
  <div class="hello">
    <Header></Header>
    <button type="button" class="btn btn-success">Create</button>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
          <th scope="col">update</th>
          <th scope="col">delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in items" v-bind:key="todo.index">
          <td>{{ todo.first }}</td>
          <td>{{ todo.last }}</td>
          <td>{{ todo.handle }}</td>
          <td><button type="button" class="btn btn-success"><a href="/update">Update</a><router-view/></button></td>
          <td><button type="button" class="btn btn-danger" v-on:click="handleDelete(todo.id)">Delete</button></td>
        </tr>
      </tbody>

    </table>

    <h1 align="center">Create</h1>
    <div>
      <form action="">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">First</label>
          <input v-model="first" type="email" class="form-control" id="exampleFormControlInput1" placeholder="first">
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Last</label>
          <input v-model="last" type="email" class="form-control" id="exampleFormControlInput1" placeholder="last">
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Handle</label>
          <input v-model="handle" type="email" class="form-control" id="exampleFormControlInput1" placeholder="handle">
        </div>
        <div class="mb-3">
          <button type="button" class="btn btn-primary" v-on:click="handleCreate({first, last, handle})">Create</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import  Header from "./Header";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    Header
  },
  data () {
    return {
            items: [
      {id: 0, first: 'Learn JavaScript', last: 'alooo', handle: '3455' },
      {id: 1, first: 'Learn Vue', last: 'alooo', handle: '345' },
      {id: 2, first: 'Build something awesome', last: 'alooo', handle: '35' }
    ],
    }
  },
  methods: {
      handleDelete: function(id) {
        let arr = this.items.filter((item) => {
          return item.id !== id
        })
        this.items = arr
      },
      handleCreate: function(props) {
        props.id = Math.random() * 50;
        this.items.push(props )
      },
      handleUpdate: function(props) {
        this.items.push(props )
      },
      handleClick: function() {
        alert('test')
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
<template>
  <div class="hello">
    <Header></Header>
    <button type="button" class="btn btn-success">Create</button>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
          <th scope="col">update</th>
          <th scope="col">delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in items" v-bind:key="todo.index">
          <td>{{ todo.first }}</td>
          <td>{{ todo.last }}</td>
          <td><button type="button" class="btn btn-success"><router-link :to="{path:`/update/${todo.id}`}">Update</router-link></button></td>
          <td><button type="button" class="btn btn-danger" v-on:click="handleDelete(todo.id)">Delete</button></td>
        </tr>
      </tbody>

    </table>

    <h1 align="center">Create</h1>
    <div>
      <form action="">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">First</label>
          <input v-model="first" type="email" class="form-control" id="exampleFormControlInput1" placeholder="first">
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Last</label>
          <input v-model="last" type="email" class="form-control" id="exampleFormControlInput1" placeholder="last">
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Handle</label>
          <input v-model="handle" type="email" class="form-control" id="exampleFormControlInput1" placeholder="handle">
        </div>
        <div class="mb-3">
          <button type="button" class="btn btn-primary" v-on:click="handleCreate({first, last, handle})">Create</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import  Header from "../components/header.vue";


export default {
  name: 'List',
  props: {
    msg: String
  },
  components: {
    Header
  },
  beforeMount() {
    let data = 
    console.log(data);
  },
  data () {
    return {
      items: JSON.parse(localStorage.getItem('product'))
    }
  },
  methods: {
      handleDelete: function(id) {
        let arr = this.items.filter((item) => {
          return item.id !== id
        })
        this.items = arr
      },
      handleCreate: function(props) {
        props.id = Math.random() * 50;
        this.items.push(props)
        localStorage.removeItem('product');
        localStorage.setItem('product', JSON.stringify(this.items));
      },
      handleUpdate: function(props) {
        this.items.push(props )
      },
      handleClick: function() {
        alert('test')
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
