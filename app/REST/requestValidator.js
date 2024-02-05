import Joi from 'joi';

export default {
  authenticate: {
    payload: {
      login: Joi.string().required(),
      password: Joi.string().required()
    }
  },
  createOrUpdateUser: {
    payload: {
      id: Joi.string(),
      email: Joi.string(),
      password: Joi.string(),
      name: Joi.string(),
      surname: Joi.string(),
      address: Joi.string(),
      postCode: Joi.string(),
      city: Joi.string(),
      phone: Joi.string(),
      isAdmin: Joi.boolean(),
      avatar: Joi.string(),
      role: Joi.string(),
      active: Joi.boolean(),
      policy: Joi.boolean()
    }
  },
  removeById: {
    params: {
      id: Joi.string().required()
    }
  },
  delete: {
    params: {
      id: Joi.string().required()
    }
  },
  getById: {
    params: {
      id: Joi.string().required()
    }
  },
  getByName: {
    params: {
      name: Joi.string().required()
    }
  },
  activation: {
    params: {
      hash: Joi.string().required()
    }
  },

  removeApplication: {
    params: {
      id: Joi.string().required()
    }
  },
  removeAttachment: {
    params: {
      id: Joi.string().required()
    }
  },
  removeDetails: {
    params: {
      id: Joi.string().required()
    }
  },
  removeStudent: {
    params: {
      id: Joi.string().required()
    }
  },
  createOrUpdateDetails: {
    params: {
      id: Joi.string().required()
    },
    payload: {
      specialization: Joi.string().required(),
      education_level: Joi.string().required(),
      study_system: Joi.string().required(),
      bank_account_number: Joi.string().creditCard().required(),
      current_study_year: Joi.number().integer().min(1).required(),
      other_details: Joi.string().allow('')
    }
  },
  createOrUpdateApplication: {
    params: {
      id: Joi.string().required()
    },
    payload: {
      album_id: Joi.string().required(),
      type: Joi.string().required(),
      details_id: Joi.string().required(),
      status: Joi.string().required(),
      attachment_id: Joi.string().required()
    }
  },
  createAttachment: {
    params: {
      id: Joi.string().required()
    },
    payload:{
      file_name: Joi.string().required(),
      file_data: Joi.string().base64().required()
    }
  },
  createOrUpdateStudent: {
    payload:{
      user_id: Joi.string().required(),
      pesel: Joi.string().regex(/^[0-9]{11}$/).length(11).required(),
      email_address: Joi.string().email().required(),
      phone_number: Joi.string().regex(/^[0-9]{9}$/).length(9),
      address: Joi.string().required()
    }
  }

};
