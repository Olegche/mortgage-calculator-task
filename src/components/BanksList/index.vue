<template>
  <div>
    <div class="container">
      <bank-item
        v-for="item in getBankListData"
        :key="item._id"
        :_id="item._id"
        :BankName="item.BankName"
        :InterestRate="item.InterestRate"
        :MaximumLoan="item.MaximumLoan"
        :MinimumDownPayment="item.MinimumDownPayment"
        :LoanTerm="item.LoanTerm"
        
      />
    </div>
  </div>
</template>

<script>
import BankItem from "./BankItem";
import { mapGetters } from "vuex";
export default {
  name: "BanksList",
  components: {
    BankItem,
  },

  computed: {
    ...mapGetters(["getBankListData"]),
  },
};
</script>

<style lang="css" scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>