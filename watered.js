"use strict";

const baseService = require("./baseService");

const treesService = baseService("trees");

/**
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */

module.exports = async (req, res) => {
  if (!req.body.treeId) 
    return res.send({ result: false, message: "Invalid parameters" });

  if (!req.body.watered)
    return res.send({ result: false, message: "Invalid parameters" });
    
  try {
    const tree = await treesService.getDocById(req.body.treeId);
    const newTree = {...tree, watering: false };
    const res = await treesService.updateDoc(newTree);
    return res.send({
      result: true,
      message: ""
    });
  } catch (error) {
    return res.send({ result: false, message: new String(error) });
  }
};
