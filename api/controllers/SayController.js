/**
 * SayController
 *
 * @description :: Server-side logic for managing Says
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	


  /**
   * `SayController.hi()`
   */
  hi: function (req, res) {
    return res.send("Hi There!");
  },


  /**
   * `SayController.bye()`
   */
  bye: function (req, res) {
    return res.send("Good bye.");
  }
};

