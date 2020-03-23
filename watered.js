"use strict";

const baseService = require("./baseService");

const treesService = baseService("trees");

/**
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */

module.exports = async (req, res) => {

  const { treeId, watered } = req.body;

  if (!treeId)
    return res.send({ result: false, message: "Invalid parameters" });

  if (!watered)
    return res.send({ result: false, message: "Invalid parameters" });

  try {
    if (watered) {
      const tree = await treesService.getDocById(treeId);
      const newTree = { ...tree, watering: false };
      await treesService.updateDoc(treeId, newTree);
      return res.send({
        result: true,
        message: ""
      });
    } else {
      return res.send({ result: false, message: "Not watered" });
    }
  } catch (error) {
    return res.send({ result: false, message: new String(error) });
  }
};
