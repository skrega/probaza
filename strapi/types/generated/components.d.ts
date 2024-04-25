import type { Schema, Attribute } from '@strapi/strapi';

export interface OwnerContactsOwnerContacts extends Schema.Component {
  collectionName: 'components_owner_contacts_owner_contacts';
  info: {
    displayName: 'ownerContacts';
  };
  attributes: {
    fullName: Attribute.String;
    phone: Attribute.String;
    email: Attribute.Email;
    comments: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'owner-contacts.owner-contacts': OwnerContactsOwnerContacts;
    }
  }
}
