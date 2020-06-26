import EditNotaFiscalService from '../services/edit-nota-fiscal.service';

/**
 * Responsável pela lógica da aplicação
 */
export default class EditNotaFiscalAdapter {
  static _instance = new EditNotaFiscalAdapter(EditNotaFiscalService.getInstance());

  static getInstance() {
    return this._instance;
  }

  static resetInstance() {
    this._instance = new EditNotaFiscalAdapter(EditNotaFiscalService.getInstance());
  }

  constructor(_service) {
    this._service = _service;
  }

  _initialData = undefined; // dados usados pela tela na inicializacao

  /**
   * Fazer cache dos dados iniciais da tela é uma regra da aplicação, não do negócio
   */
  async getInitialData() {
    if (this._initialData !== undefined) {
      return this._initialData;
    }

    const response = await this._service.getInitialData();

    this._initialData = response;
    return this._initialData;
  }
}
