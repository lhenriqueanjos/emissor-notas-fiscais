import editNotaFiscalDao from '../dao/edit-nota-fiscal.dao';

/**
 * Responsável pela lógica de negócio
 */
export default class EditNotaFiscalService {
  // se usar injeção de dependência, quebra a dependência
  static _instance = new EditNotaFiscalService(editNotaFiscalDao);

  static getInstance() {
    return this._instance;
  }

  static resetInstance() {
    this._instance = new EditNotaFiscalService(editNotaFiscalDao);
  }

  constructor(_dao) {
    this._dao = _dao;
  }

  /**
   * Nesse caso, apenas devolve a lista obtida do DAO. Não há
   * regra de negócio a ser aplicada
   */
  async getInitialData() {
    return this._dao.getInitialData();
  }
}
