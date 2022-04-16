<template>
  <div>
    <label>
      Bank Name
      <input type="text" placeholder="Bank name"  v-model="BankName" />
    </label>
    <br>

    <label>
      Interest Rate (0.1 means 10%)
      <input type="number" placeholder="0.2" v-model="InterestRate" />
    </label>
    <br>

    <label>
      Maximum Loan
      <input type="number" placeholder="1000000"  v-model="MaximumLoan" />
    </label>
    <br>

    <label>
      Minimum Down Payment
      <input type="number" placeholder="1000"  v-model="MinimumDownPayment" />
    </label>
    <br>

    <label>
      Loan Term (years)
      <input type="number" placeholder="10"  v-model="LoanTerm" />
    </label>
    <br>

    <button @click="onAdd(), jumpToHomePage()">{{ buttonTitle }}</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "SetBankListForm",

  data() {
    return {
      BankName: null,
      InterestRate: null,
      MaximumLoan: null,
      MinimumDownPayment: null,
      LoanTerm: null,
    };
  },

  computed: {
    ...mapGetters(["getBankById"]),

    bankId() {
      if (this.$route.params.bank_id === "new") {
        return null;
      } else {
        return this.$route.params.bank_id;
      }
    },

    buttonTitle() {
      if (this.bankId) {
        return "Save edits";
      } else {
        return "Add new one";
      }
    },
  },

  methods: {
    ...mapActions(["addNewBankAction", "updateBankItemAction"]),

    onAdd() {
      const {
        BankName,
        InterestRate,
        MaximumLoan,
        MinimumDownPayment,
        LoanTerm,
      } = this;

      if (!this.bankId)
        this.addNewBankAction({
          BankName,
          InterestRate,
          MaximumLoan,
          MinimumDownPayment,
          LoanTerm,
        });
      else
        this.updateBankItemAction({
          _id:this.bankId,
          BankName,
          InterestRate,
          MaximumLoan,
          MinimumDownPayment,
          LoanTerm,
        });
    },

    jumpToHomePage(){
        this.$router.push({
        name: 'Home',
        
      })
    }
    
  },

  mounted() {
      console.log('bank id');
      console.log(this.bankId);
    if (this.bankId) {
      const bank = this.getBankById(this.bankId);
    
      this.BankName = bank.BankName;
      this.InterestRate = bank.InterestRate;
      this.MaximumLoan = bank.MaximumLoan;
      this.MinimumDownPayment = bank.MinimumDownPayment;
      this.LoanTerm = bank.LoanTerm;
    }
  },
};
</script>

<style lang="scss" scoped>
</style>