<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Methods',
  data () {
    return {}
  }
})
</script>

<style lang="scss">
  .methods {}
</style>

<template>
  <div class="main methods">
    <pre>
      <code class="language-javascript">
        // Example Code
        var example = new Tokenizer({
          url: '', // Optional - Only pass if using a different domain than your on
          apikey: 'key here',
          container: document.querySelector('#div container'),

          // Callback to identify when iframe has been loaded
          onLoad: () => {
            console.log('iframe loaded')
          },

          // Callback to identify when a valid cc has been inputed
          validCard: (card: object) => {
            console.log(card)
            // card.isValid // Boolean
            // card.bin // Object of bin data

            // If you need to check if surchargable
            // Pass state and card bin data
            var isSurchargable = example.isSurchargable(state, card.bin)
            console.log(isSurchargable)
          },

          // Callback after payment was submitted
          submission: (resp) => {
            console.log(resp)
          }
        })

        // Set expiration date on card payment
        example.setExpDate('09/12')

        // Submit payment
        example.submit()

        // Submit payment with 3DS Enabled (CREDIT CARD ONLY)
        example.submit(true, 100)
      </code>
    </pre>
  </div>
</template>
