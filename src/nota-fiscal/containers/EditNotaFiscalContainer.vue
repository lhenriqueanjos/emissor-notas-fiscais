<template>
  <EditNotaFiscalView
    :atividadeList="atividadeList"
  />
</template>

<script>
import EditNotaFiscalView from '../views/EditNotaFiscalView.vue';
import EditNotaFiscalAdapter from '../adapters/edit-nota-fiscal.adapter';

const editNotaFiscalAdapter = EditNotaFiscalAdapter.getInstance();

export default {
  name: 'EditNotaFiscalContainer',

  components: {
    EditNotaFiscalView,
  },

  async created() {
    const { atividadeList } = await editNotaFiscalAdapter.getInitialData();

    this.atividadeList = atividadeList;
  },

  data() {
    return {
      atividadeList: undefined,
    };
  },
};
</script>
