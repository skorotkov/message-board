import DS from 'ember-data';

export default DS.Model.extend({
  subject: DS.attr(),
  body: DS.attr(),
  author: DS.attr()
});
