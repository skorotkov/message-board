import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  sessionInvalidated: function(){
    let currentRoute = this.controllerFor('application').get('currentRouteName');

    if (currentRoute === 'index') {
      //window.location.reload();
    } else {
      this._super();
    }
  }
});
