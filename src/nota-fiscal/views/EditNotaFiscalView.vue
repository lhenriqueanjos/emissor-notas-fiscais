<template>
  <div>
    <h1>Nova Nota Fiscal</h1>

    <div>
      <label for="cnpj">CNPJ</label>

      <input type="text" name="location">
    </div>

    <div>
      <label for="atividade">Atividade</label>

      <select name="atividade" id="atividade">
        <option
          v-for="atividade in atividadeList"
          :value="atividade.id"
          :key="atividade.id">
          {{atividade.name}}
        </option>
      </select>
    </div>

    <div>
      <label for="valor">Valor</label>

      <input type="text" name="valor">
    </div>

    <div>
      <label for="date">Data</label>

      <input type="date" name="date">
    </div>

    <div>
      <button>Emitir</button>
    </div>
  </div>
</template>

<script>
import EditNotaFiscalAdapter from '../adapters/edit-nota-fiscal.adapter';

const editNotaFiscalAdapter = EditNotaFiscalAdapter.getInstance();

export default {
  name: 'EditNotaFiscalView',

  async created() {
    const { atividadeList } = await editNotaFiscalAdapter.getInitialData();

    this.atividadeList = atividadeList;
  },

  data() {
    return {
      atividadeList: undefined,
    };
  },

  methods: {
  },
};
</script>
