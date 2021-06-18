<script lang="ts">
import Vue from 'vue'
import Tokenizer from '@/tokenizer'
import { testapikey } from '@/docs/helpers/testkeys'
export default Vue.extend({
  name: 'threeds',
  data () {
    return {
      example: {} as any,
      amount: '1.00',
      response: '{}'
    }
  },
  mounted () {
    this.example = new Tokenizer({
      apikey: testapikey,
      paaySandbox: true,
      container: this.$refs.example as HTMLDivElement,
      submission: (resp: any) => {
        const btn = document.getElementById('submit') as HTMLButtonElement
        btn.disabled = false
        this.response = resp
      }
    })
  },
  methods: {
    submit (amount:string) {
      const btn = document.getElementById('submit') as HTMLButtonElement
      btn.disabled = true
      this.example.submit(amount)
    }
  }

})
</script>

<style lang="scss">
.threeds {
  .playground {
    padding: 16px;
    background: #fff;

    .line-item {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 16px 0px 16px 0px;
      width: 100%;
      border-top: 1px solid #ddd;
      border-bottom: 1px solid #ddd;

      .label {
        align-self: center;
        padding-left: 16px;
        font-weight: bold;
      }

      .input {
        border: 1px solid #ddd;
        padding: 8px;
        border-radius: 4px;
      }
    }

    .button {
      background: #aaa;
      border-radius: 4px;
      color: #fff;
      margin-top: 8px;
      padding: 8px 16px;
      font-weight: bold;

      &:hover{
        background: #999;
        cursor: pointer;
      }

      &:disabled {
        opacity: 0.25;
      }
    }

    pre {
      background: #eee;
      padding: 16px;
      margin-top: 16px;
    }
  }

  .total {
    display: block;
    float: right;
    margin: 16px 0px 16px 16px;
    font-weight: bold;
  }
}
</style>

<template>
  <div class="threeds">
    <pre>
      <code class="language-javascript">
        // Tokenizer
        var tokenizer = new Tokenizer({
          // url: Optional - used only when the domain does not match
          apikey: "api_12345",
          paaySandbox: true, // Optional - Set to true for testing purposes.
                             // Dont set anything for production
          container: document.querySelector(".tokenizer-container"),
          submission:(response) => {
            // enable the button after getting a response
            var button = document.querySelector('.tokenizer-button')
            button.disabled = false
            // set the response
            state.response = response
          }
        });
      </code>
    </pre>
    <pre>
      <code class="language-javascript">
        // State
        var state = {
          amount: "1.00",
          response: {}
        }
      </code>
    </pre>
    <pre>
      <code class="language-javascript">
        // Submit
        var submit = function() {
          // prevent duplicate submissions during 3D-Secure validation
          var button = document.querySelector('.tokenizer-button')
          button.disabled = true
          // submit off to the tokenizer with the dollar amount
          tokenizer.submit(state.amount)
        }
      </code>
    </pre>
    <div class="playground example">
      <div class="line-item">
        <label class="label">Item</label>
        <input class="input" type="text" v-model="amount">
      </div>
      <fieldset class="fieldset">
        <label class="total">Total: ${{amount}}</label>
      </fieldset>
      <div class="payment" ref="example"></div>
      <button id="submit" type="button" class="button" @click="submit(amount)">Checkout</button>
      <pre>Response: {{response}}</pre>
    </div>
  </div>
</template>
