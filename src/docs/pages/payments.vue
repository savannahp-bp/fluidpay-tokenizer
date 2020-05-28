<script lang="ts">
import Vue from 'vue'
import Tokenizer from '@/tokenizer'
import { testapikey } from '@/docs/helpers/testkeys.ts'

export default Vue.extend({
  name: 'Payments',
  data () {
    return {
      example: (null as any),
      exampleResponse: ''
    }
  },
  mounted () {
    this.example = new Tokenizer({
      apikey: testapikey,
      container: this.$refs.example as HTMLDivElement,
      onPaymentChange: (type: string) => {
        // console.log(type)
      },
      submission: (resp: any) => {
        this.exampleResponse = resp
      },
      settings: {
        payment: {
          showTitle: true,
          types: ['card', 'ach', 'plaid'],
          ach: {
            sec_code: 'web'
          }
        }
      }
    })
  }
})
</script>

<style lang="scss">
  .home {
    .example {
      button {
        cursor: pointer;
        width: 100%;
        height: 30px;
        font-weight: bold;
        border: solid 1px #dcdee2;
        border-radius: 4px;
        background-color: #ffffff;
        padding: 5px 8px 5px 8px;
      }
    }
  }
</style>

<template>
  <div class="main home">
    <pre>
      <code class="language-javascript">
        // Example Code
        var example = new Tokenizer({
          apikey: 'key here',
          container: document.querySelector('#div container'),
          submission: (resp) => {
            console.log(resp)
          },
          settings: {
            payment: {
              types: ['card', 'ach', 'plaid'], // Default ['card']
              ach: {
                sec_code: 'web' // Default web - web, ccd, ppd, tel
              }
            }
          }
        })
      </code>
    </pre>

    <div class="section example">
      <div ref="example"></div>
      <button @click="example.submit()">Pay</button>
      <pre>{{exampleResponse}}</pre>
    </div>
  </div>
</template>
