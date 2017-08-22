import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  model() {
    if (this.get('session').isAuthenticated) {
      return this.get('store').findRecord('github-user', '#');
    }
  }
});
