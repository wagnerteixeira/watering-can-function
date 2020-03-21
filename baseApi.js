"use strict";

const admin = require("firebase-admin");

admin.initializeApp();

let firestore = admin.firestore();

exports.doCreate = (collection, data) =>
  firestore.collection(collection).add({ ...data });

exports.doCreateById = (collection, id, data) =>
  firestore
    .collection(collection)
    .doc(id)
    .set({ ...data });

exports.doGetById = (collection, id) =>
  firestore
    .collection(collection)
    .doc(id)
    .get();

exports.doGetCollectionRef = collection => firestore.collection(collection);

exports.doGet = collection => firestore.collection(collection).get();

exports.doGetOrderBy = (collection, field) =>
  firestore
    .collection(collection)
    .orderBy(field)
    .get();

exports.doDelete = (collection, id) =>
  firestore
    .collection(collection)
    .doc(id)
    .delete();

exports.doUpdate = (collection, data) =>
  firestore
    .collection(collection)
    .doc(data.id)
    .set(data.data);
