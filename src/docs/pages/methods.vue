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
          validCard: (valid: boolean) => {
            console.log(valid)
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
      </code>
    </pre>
  </div>
</template>
