<script lang="ts">
import Vue from 'vue';
import { FormBuilder, FormDirector } from './FormBuilder.ts';
export default Vue.extend({
  props: ['form'],
  render(h) {
    const director = new FormDirector();
    const builder = new FormBuilder(h);
    director[this.form](builder);
    return builder.createForm();
  }
});
</script>
