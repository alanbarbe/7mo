let Tutor = require("./Tutorial.js");

exports.NodeTutorial = function () {
  console.log("Node Tutorial");
  this.pTutor = function () {
    let PTutor = Tutor;
    PTutor.tutorial();
  };
};