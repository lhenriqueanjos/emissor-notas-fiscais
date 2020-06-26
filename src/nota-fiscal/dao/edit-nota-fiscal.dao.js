// import axios

const axiosGetInitialDataMock = () => (
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        atividadeList: [
          {
            id: '6z6u',
            name: 'Manutenção de computadores',
          },
          {
            id: '3dw4',
            name: 'Treinamento',
          },
          {
            id: '7hf7',
            name: 'Desenvolvimento de sistemas',
          },
        ],
      });
    }, 800);
  })
);

/**
 * O DAO sabe, para cada método, se deve buscar / alterar dados usando
 * um HTTP Client, o LocalStorage, etc
 */
export default {
  getInitialData: async () => {
    const initialData = await axiosGetInitialDataMock();
    return initialData;
  },
};
