<template>
  <div>
    <p> Mortgage Calculator</p>

    <label>
      Initial loan
      <input type="number" v-model="InitialLoan" />
    </label>
    <br />
    <label>
      Down payment
      <input type="number" v-model="DownPayment" />
    </label>

    <div>Banks</div>

    <select @change="ShowBankInterestRate" v-model="PickedBank">
      <option v-for="bank in getBankListData" :key="bank.id" :value="bank">
        {{ bank.BankName }}
      </option>
    </select>
    <br />
    <label>
      Bank Interest Rate
      <input type="number" v-model="BankInterestRate" />
    </label>
    <div>
      <button @click="CheckRequest">Check your request to bank</button>
    </div>
    <div>
      {{ Message }}
    </div>

    <div>
      <button @click="GetMonthlyPayment()" v-if="ResultBtnVisible">
        Get Monthly Payment
      </button>
    </div>

    <div v-if="MonthlyPayment && ResultBtnVisible ">
      {{ MonthlyPayment }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Calculator",

  computed: {
    ...mapGetters(["getBankListData"]),
  },

  data() {
    return {
      InitialLoan: null,
      DownPayment: null,
      PickedBank: null,
      MonthlyPayment: null,
      BankInterestRate: null,
      Message: null,
      ResultBtnVisible: false,
    };
  },

  watch: {
    InitialLoan(newValue) {
      if (newValue) {
        this.ResultBtnVisible = false,
        this.MonthlyPayment = null,
         this.Message = null
      }
    },
     DownPayment(newValue) {
      if (newValue) {
        this.ResultBtnVisible = false,
         this.MonthlyPayment = null,
          this.Message = null
      }
    },
     PickedBank(newValue) {
      if (newValue) {
        this.ResultBtnVisible = false,
         this.MonthlyPayment = null,
         this.Message = null
      }
    },
  },

  methods: {
    ShowBankInterestRate() {
      this.BankInterestRate = this.PickedBank.InterestRate;
    },
    GetMonthlyPayment() {
      this.MonthlyPayment = 
        (this.InitialLoan *
          (this.BankInterestRate / 12) *
          Math.pow(
            1 + this.BankInterestRate / 12,
            this.PickedBank.LoanTerm * 12
          )) /
        (Math.pow(
          1 + this.BankInterestRate / 12,
          this.PickedBank.LoanTerm * 12
        ) -
          1); // I hope this formula is correct
    },

    CheckRequest() {
      if (parseInt(this.InitialLoan) > parseInt(this.PickedBank.MaximumLoan)) {
        this.Message = " Initial Loan is bigger then banks maximum loan ";
      } else if (parseInt(this.DownPayment) < parseInt(this.PickedBank.MinimumDownPayment)) {
        this.Message = " Down payment is less then banks minimum down payment";
      } 
      else if ( parseInt(this.DownPayment) > parseInt(this.InitialLoan) ) {
            this.Message = "Down payment is bigger than initial loan "; // fixed issue (Все супер, додай перевірки на down payment в calculator. Оскільки я зараз можу вставити число сильно більше ніж сам кредит і воно всеодно рахує. Дивно. )
      }
        else if ( parseInt(this.DownPayment)  > parseInt(this.PickedBank.MaximumLoan)  ) {
            this.Message = "Down payment is bigger than banks maximum loan "; 
      }
      else  {
        (this.Message = "Ok, now You can get your monthly payment"),
          (this.ResultBtnVisible = true);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>