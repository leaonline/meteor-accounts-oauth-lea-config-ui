import { Template } from 'meteor/templating'

Template.configureLoginServiceDialogForLea.helpers({
  siteUrl: () => Meteor.absoluteUrl(),
})

Template.configureLoginServiceDialogForLea.fields = () => [
  { property: 'appId', label: 'App ID' },
  { property: 'secret', label: 'App Secret' }
]
