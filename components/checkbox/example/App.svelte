<script>
  import Checkbox from '../src/Checkbox.svelte';
  import { mdiStar, mdiStarOutline } from '@mdi/js';
</script>

<Checkbox />
<Checkbox disabled />
<Checkbox checked />
<Checkbox checked disabled />
<Checkbox indeterminate />
<Checkbox indeterminate disabled />

<Checkbox checkedIcon={mdiStar} uncheckedIcon={mdiStarOutline} />
<Checkbox let:checked let:indeterminate>
  label: {checked} - {indeterminate}
</Checkbox>
<Checkbox checked let:checked let:indeterminate>
  label: {checked} - {indeterminate}
</Checkbox>
<Checkbox let:checked let:indeterminate>
  label: {checked} - {indeterminate}
</Checkbox>
<Checkbox indeterminate let:checked let:indeterminate>
  label: {checked} - {indeterminate}
</Checkbox>
