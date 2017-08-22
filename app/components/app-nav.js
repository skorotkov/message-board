import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),

  init() {
    this._super(...arguments);
    this.set('loggedIn', this.get('session').isAuthenticated);
  },

  actions: {
    login() {
      this.get('session').authenticate('authenticator:torii', 'github');
    },
    logout() {
      this.get('session').invalidate();
    }
  }
});
