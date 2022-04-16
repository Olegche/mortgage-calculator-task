import Vue from 'vue'
import Vuex from 'vuex'
import { v4 as uuidv4 } from 'uuid';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    BanksListData: [

      {
        _id: '1',
        BankName: 'Bank 1',
        InterestRate:  0.2,
        MaximumLoan: 10000000,
        MinimumDownPayment:  100,
        LoanTerm:  10,

        },

        {
          _id: '2',
          BankName: 'Bank 2',
          InterestRate:  0.21,
          MaximumLoan: 10000001,
          MinimumDownPayment:  1000,
          LoanTerm:  15,
          
          },

          {
            _id: '3',
            BankName: 'Bank 3',
            InterestRate:  0.22,
            MaximumLoan: 10000002,
            MinimumDownPayment:  10000,
            LoanTerm:  30,
            
            },
    
        
        
      

    ]
  },
  mutations: {

    updateBankItem(state, Data) {
      const BankItemIndex = state.BanksListData.findIndex(
        (item) => item._id == Data._id
      )
      state.BanksListData[BankItemIndex] = Data
    },

    addNewBank(state, bank){
      state.BanksListData.push({
        _id: uuidv4(),
        ...bank
      })
    },

    deleteBank(state, _id) {
    state.BanksListData = state.BanksListData.filter(
      (bank) => bank._id !== _id
    )
  },

  },

  

  actions: {
    updateBankItemAction({commit}, bankData){
      commit('updateBankItem', bankData)
    },

    addNewBankAction({commit}, bank){
      commit('addNewBank', bank)
    },

    deleteBankAction({commit}, _id){
      commit('deleteBank', _id)
    }

  },
  getters:{

    getBankListData: (state) => state.BanksListData,

    getBankById: (state) => (_id) => {
      return state.BanksListData.find((item) => item._id == _id)
    },

  },
  modules: {
  }
})
