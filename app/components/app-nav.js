import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  store: Ember.inject.service(),

  init() {
    this._super(...arguments);
    this.set('loggedIn', this.get('session').isAuthenticated);

    if (this.get('loggedIn')) {
      this.get('store').findRecord('github-user', '#').then(model => this.set('userName', model.get('login')));
    }
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
