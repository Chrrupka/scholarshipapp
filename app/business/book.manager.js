import BookDAO from '../DAO/bookDAO';

function create(context) {

  async function getAll() {
    return await BookDAO.getAll();
  }

  async function createBook(payload) {
    return await BookDAO.createBook(payload);
  }

  async function updateBook(id, payload) {
    return await BookDAO.updateBook(id, payload);
  }

  async function removeBookById(id) {
    return await BookDAO.removeById(id);
  }

  return {
    getAll: getAll,
    createBook: createBook,
    updateBook: updateBook,
    removeBookById: removeBookById
  };
}

export default {
  create: create
}


