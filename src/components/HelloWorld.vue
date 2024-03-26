<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <h3 class="text-center"><b>Form</b></h3>
    <hr />

    <div class="text-center">
      <input type="text" class="form-control form-control-sm" v-model="search" placeholder="Search Role" />
      <select class="form-control form-control-sm mt-2" v-model="role">
        <option value="">Select this role</option>
        <option value="CONTROLLER">Controller</option>
        <option value="DUELIST">Duelist</option>
        <option value="INITIATOR">Initiator</option>
        <option value="SENTINEL">Sentinel</option>
      </select>
    </div>
    <div class="container mt-3">
      <div class="row justify-content-center">
        <div v-for="data in filteredDatas" :key="data.id">
          <a href="#" class="text-decoration-none text-dark" v-on:click="ModalView(data.displayName)" data-toggle="modal" id="showmodal" data-target="#exampleModal">
            <div class="card m-3" style="width: 18rem">
              <img v-bind:src="data.fullPortrait" class="card-img-top" style="width: 100%" />
              <div class="card-body" style="height: 260px">
                <h5 class="card-title">{{ data.displayName }}</h5>
                <p class="card-text">{{ data.description }}</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-body" v-for="modaldata in modaldata" :key="modaldata.id">
            <table class="table table-responsive nowrap table-striped">
              <tbody>
                <tr>
                  <td style="width: 50%" rowspan="7" colspan="4"><img v-bind:src="modaldata.displayIcon" class="card-img-top" /></td>
                  <th colspan="3">{{ modaldata.displayName }}</th>
                </tr>
                <tr>
                  <td class="text-justify" colspan="3">{{ modaldata.role }}</td>
                </tr>
                <tr>
                  <td class="text-justify" colspan="3">{{ modaldata.description }}</td>
                </tr>
                <tr>
                  <td class="text-justify align-middle" rowspan="4">Ability</td>
                  <td class="text-justify">{{ modaldata.abilities[0].slot }}</td>
                  <td class="text-justify">{{ modaldata.abilities[0].displayName }}</td>
                </tr>
                <tr>
                  <td class="text-justify">{{ modaldata.abilities[1].slot }}</td>
                  <td class="text-justify">{{ modaldata.abilities[1].displayName }}</td>
                </tr>
                <tr>
                  <td class="text-justify">{{ modaldata.abilities[2].slot }}</td>
                  <td class="text-justify">{{ modaldata.abilities[2].displayName }}</td>
                </tr>
                <tr>
                  <td class="text-justify">{{ modaldata.abilities[3].slot }}</td>
                  <td class="text-justify">{{ modaldata.abilities[3].displayName }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- <select class="custom-select" name="displayName" id="displayName" v-model="dataPost.displayName">
          <option selected>Open this select Display Name</option>
          <option v-for="data in datas" :key="data.id" value="{{ data.displayName }}">{{ data.displayName }}</option>
        </select> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      search: '',
      role: '',
      datas: [],
      modaldata: [],
    };
  },
  mounted() {
    fetch('https://staging.ina17.com/data.json')
      .then((res) => res.json())
      .then((data) => (this.datas = data))
      .catch((err) => console.log(err.message));
  },
  computed: {
    filteredDatas() {
      return this.datas.filter((data) => data.displayName.toUpperCase().includes(this.search.toUpperCase()) && data.role.toUpperCase().includes(this.role.toUpperCase()));
    },
  },
  methods: {
    ModalView: function (id) {
      console.log(id);
      this.$root.$emit('bv::show::modal', 'exampleModal', '#showmodal');
      return (this.modaldata = this.datas.filter((data) => data.displayName.includes(id)));
    },
  },
};
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
  color: black;
}
</style>
