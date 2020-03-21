"use strict";

const baseApi = require("./baseApi");

module.exports = collection => {
  const createDoc = doc => {
    return new Promise((resolve, reject) => {
      baseApi
        .doCreate(collection, doc)
        .then(doc => resolve({ id: doc.id, ...doc }))
        .catch(error => reject(error));
    });
  };

  const createDocById = (doc, id) => {
    return new Promise((resolve, reject) => {
      baseApi
        .doCreateById(collection, id, doc)
        .then(doc => resolve({ id: doc.id, ...doc }))
        .catch(error => reject(error));
    });
  };

  const deleteDoc = id => baseApi.doDelete(collection, id);

  const updateDoc = data => baseApi.doUpdate(collection, data);

  const getDocs = () => {
    return new Promise((resolve, reject) => {
      baseApi
        .doGet(collection)
        .then(querySnapshot =>
          resolve(
            querySnapshot.docs.map(doc => {
              return { data: doc.data(), id: doc.id };
            })
          )
        )
        .catch(error => reject(error));
    });
  };

  const getDocById = id => {
    return new Promise((resolve, reject) => {
      baseApi
        .doGetById(collection, id)
        .then(doc => {
          if (!doc.exists) {
            reject(`Document ${id} not exists.`);
          } else {
            resolve(doc.data());
          }
        })
        .catch(error => reject(error));
    });
  };

  const getDocsOrderBy = field => {
    return new Promise((resolve, reject) => {
      baseApi
        .doGetOrderBy(collection, field)
        .then(querySnapshot =>
          resolve(
            querySnapshot.docs.map(doc => {
              return { data: doc.data(), id: doc.id };
            })
          )
        )
        .catch(error => reject(error));
    });
  };

  return {
    createDoc,
    createDocById,
    getDocById,
    deleteDoc,
    updateDoc,
    getDocs,
    getDocsOrderBy
  };
};
