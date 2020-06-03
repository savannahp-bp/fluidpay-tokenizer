<template>
  <div>
    <pre>
      <code class="language-javascript">
        // Example Code
        var example = new Tokenizer({
          url: '', // optional - used only when on a different domain
          apikey: '',
          container: document.querySelector('.container'),
          submission: (response) => {
            console.log(response)
          }
        })

        // Submission
        example.submit('1.00')

        // 3D-Secure requires an amount parameter of type string
        // if no amount is passed 3D-Secure will not be triggered

      </code>
    </pre>
  <div class="playground example">
    <div class="line-item">
      <fieldset class="fieldset">
        <img class="image" :src="img">
        <label class="label">Item</label>
        <input class="input" type="text" v-model="amount">
      </fieldset>
    </div>
    <fieldset class="fieldset">
      <label class="total">Total: ${{amount}}</label>
    </fieldset>
    <div class="payment" ref="example"></div>
    <button type="button" class="button" @click="example.submit(amount)">Checkout</button>
     <pre>Response: {{response}}</pre>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Tokenizer from '@/tokenizer'
import { testapikey } from '@/docs/helpers/testkeys.ts'
export default Vue.extend({
  name: 'threeds',
  data () {
    return {
      example: {} as any,
      img: 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-5_large.png?format=jpg&quality=90&v=1530129458',
      amount: '0.00',
      response: '{}'
    }
  },
  mounted () {
    this.example = new Tokenizer({
      apikey: testapikey,
      container: this.$refs.example as HTMLDivElement,
      submission: (resp: any) => {
        this.response = resp
      }
    })
  }

})
</script>

<style lang="scss">
  .playground {
    padding:16px;
    background: #fff;
    .line-item{
      padding:16px;
      width:100%;
      display: inline-block;
      border-top: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      .image {
        height:90px;
        box-shadow: 2px 2px 6px 0px #ddd;
        float:left;
      }
      .label {
        display:block;
        height: 90px;
        line-height: 90px;
        float: left;
        padding-left: 16px;
        font-weight: bold;
      }
      .input {
        border: 1px solid #ddd;
        display:block;
        padding: 8px;
        margin-top: 27px;
        float: right;
        padding-left: 16px;
        font-weight: normal;
      }
    }
    .button {
      background: #aaa;
      border-radius: 4px;
      color:#fff;
      margin-top: 8px;
      padding:8px 16px;
      font-weight: bold;
      &:hover{
        background:#999;
        cursor:pointer;
      }
    }
    pre {
      background:#eee;
      padding: 16px;
      margin-top: 16px;
    }
  }
  .total {
    display: block;
    float: right;
    margin:16px;
    font-weight: bold;
  }
</style>
