'use strict';

DashboardController.$inject = ['GithubStatusService'];
function DashboardController(gh) {
    var _this = this;
    _this.github = '';
}
module.exports = DashboardController;