"use strict";

const baseService = require("./baseService");

const treesService = baseService("trees");

/**
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */

module.exports = async (req, res) => {
  const { treeId } = req.body;

  if (!treeId) {
    return res.send({ watering: "false", message: "Invalid parameters" });
  }
  try {
    const tree = await treesService.getDocById(treeId);
    const newTree = { ...tree, lastCheckCanWater: new Date() };      
    await treesService.updateDoc(treeId, newTree);   
    return res.send({
      watering: tree.watering,
      message: "Check successful"
    });
  } catch (error) {
    return res.send({ watering: "false", message: new String(error) });
  }
};
