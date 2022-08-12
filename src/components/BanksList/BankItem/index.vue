<template>
  <div>
    <div class="wrap">
      <p class="tittleName"> BankName:  {{ BankName }}  </p>
      <p >InterestRate: {{ InterestRate }}</p>
      <p >MaximumLoan: {{ MaximumLoan }}</p>
      <p >MinimumDownPayment: {{ MinimumDownPayment }}</p>
      <p >LoanTerm: {{ LoanTerm }}</p>
      <!-- <p>{{_id}}</p> -->
      <button class="editBtn" @click="onEdit">Edit</button>
      <button class="deleteBtn" @click="onDelete">Delete</button>
    </div>
  </div>
</template>

<script>
import {  mapActions} from "vuex";
export default {
  name: "BankItem",

  props: {
    _id: {
      type: [String, Number],
      require,
      
    
    },

    BankName: {
      type: String,
      default: "BankExampleName",
    },

    InterestRate: {
      type: [String, Number],
      default: "0.2",
    },

    MaximumLoan: {
      type: [String, Number],
      default: "10000000",
    },

    MinimumDownPayment: {
      type: [String, Number],
      default: "20000",
    },

    LoanTerm: {
      type: [String, Number],
      default: "365",
    },
  },



  methods: {
      ...mapActions(['deleteBankAction']),

     onEdit() {
      this.$router.push({
        name: 'UpdateBank',
        params: { bank_id: this._id },
      })
    },

    onDelete(){
        this.deleteBankAction(this._id)
    }
  },
};
</script>

<style lang="css"   >
.wrap {
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.829);
  margin-bottom: 10px;
  margin-top: 10px;
  text-align: center;
  justify-content: center;
  box-shadow: 0 0 10px rgba(97, 95, 95, 0.797);
  border-radius: 10px;
  width: 250px;
  height: 290px;
  max-width: 100%;
  overflow: hidden;
  position: relative;
}

.editBtn{
    margin: 1px;
    border: 1px solid rgb(186, 218, 28);
    border-radius: 10px;
}

.deleteBtn{
    margin: 1px;
    border: 1px solid rgb(226, 99, 53);
    border-radius: 10px;
}
.tittleName{
    background-color: rgb(86, 177, 115);
    border-radius: 10px;
    color: #ffffff;
}

</style>