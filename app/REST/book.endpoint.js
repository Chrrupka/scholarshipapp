import applicationException from '../service/applicationException';
import business from '../business/business.container';
import validator from './requestValidator';

const bookEndpoint = {
  register(server) {
    server.route({
      method: 'GET',
      path: '/api/books',
      options: {
        description: 'Get all books',
        tags: ['api'],
        validate: {},
        auth: false
      },
      handler: async (request, h) => {
        try {
          return await business.getBookManager(request).getAll();
        } catch (error) {
          return applicationException.errorHandler(error, h);
        }
      }
    });

    server.route({
      method: 'POST',
      path: '/api/book',
      options: {
        description: 'Create book',
        tags: ['api'],
        validate: {
          payload: validator.createOrUpdateBook.payload
        },
        auth: 'bearer'
      },
      handler: async (request, h) => {
        try {
          return await business.getBookManager(request).createBook(request.payload);
        } catch (error) {
          return applicationException.errorHandler(error, h);
        }
      }
    });

    server.route({
      method: 'PATCH',
      path: '/api/book/{id}',
      options: {
        description: 'Update book',
        tags: ['api'],
        validate: {
            params: validator.createOrUpdateBook.params,
            payload: validator.createOrUpdateBook.payload
        },
        auth: 'bearer'
      },
      handler: async (request, h) => {
        try {
          return await business.getBookManager(request).updateBook(request.params.id, request.payload);
        } catch (error) {
          return applicationException.errorHandler(error, h);
        }
      }
    });

    server.route({
      method: 'DELETE',
      path: '/api/book/{id}',
      options: {
        description: 'Delete book by id',
        tags: ['api'],
        validate: {
          params: validator.removeBook.params
        },
        auth: 'bearer'
      },
      handler: async (request, h) => {
        try {
          return await business.getBookManager(request).removeBookById(request.params.id);
        } catch (error) {
          return applicationException.errorHandler(error, h);
        }
      }
    });

  },
  tag: {
    name: 'book',
    description: 'When somebody wants to get books'
  }
};

export default bookEndpoint;
