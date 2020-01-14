<script lang="ts">
import Vue from 'vue'
import { Tokenizer } from '@/tokenizer/index.ts'
import testapikey from '@/docs/helpers/testapikey.ts'

export default Vue.extend({
  name: 'Home',
  data () {
    return {
      example: (null as any),
      exampleResponse: '',
      validCard: (null as any)
    }
  },
  mounted () {
    this.example = new Tokenizer({
      apikey: testapikey,
      container: this.$refs.example as HTMLDivElement,
      submission: (resp: any) => { this.exampleResponse = resp },
      validCard: (card: any) => {
        this.validCard = card
        // console.log(card.bin.card_type)
        // console.log(this.example.isSurchargable('ia', card.bin))
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
          url: '', // Optional - Only pass if using a different domain than your on
          apikey: 'key here',
          container: document.querySelector('#div container'),
          submission: (resp) => {
            console.log(resp)
          }
        })

        // Example submission
        function submit() {
          example.submit() // Use submission callback to deal with response
        }

        // Example submission with 3DS enabled
        function submit() {
          example.submit(
            true, // 3DS enabled?
            100 // Amount(in cents)
          )
        }
      </code>
    </pre>

    <pre>
      <code class="language-html">
        // Example Html
        &lt;div id="container"&gt;&lt;&#47;div&gt;
        &lt;button onclick="submit()"&gt;Submit&lt;&#47;button&gt;
      </code>
    </pre>
    <pre>
      <code class="language-html">
        // Example Html with 3DS Enabled (CREDIT CARD ONLY)
        &lt;div id="container"&gt;&lt;&#47;div&gt;
        &lt;button onclick="submit(true, 100)"&gt;Submit&lt;&#47;button&gt;
      </code>
    </pre>

    <div class="section example">
      <div ref="example"></div>
      <button @click="example.submit(true, 100)">Pay</button>
      <pre>{{exampleResponse}}</pre>
    </div>
  </div>
</template>
