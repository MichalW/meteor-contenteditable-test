TestCollection = new Mongo.Collection('test');

TestCollection.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    autoform: {
      afFieldInput: {
        type: "contenteditable"
      }
    }
  }
}));

if (Meteor.isServer){
  Meteor.startup(function () {
    if (!TestCollection.find().count()) {
      TestCollection.insert({title: 'Test'});
    }
  });
}


if (Meteor.isClient) {
  Template.hello.helpers({
    testObject: function () {
      return TestCollection.findOne();
    }
  });
}