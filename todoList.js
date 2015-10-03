var Joi = require('joi'),
    Boom = require('boom'),
    thinky = rootRequire('server/util/thinky'),
    TodoList = rootRequire('model'). TodoList, 
    Errors = thinky.Errors,
    r = thinky.r;

    //Create the API for saving the to-do list. 