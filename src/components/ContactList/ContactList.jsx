import { ContactItem } from 'components/ContactItem/ContactItem';
import React from 'react';
import PropTypes from 'prop-types';
import { ContactLi, ContactUl } from './ContactList.styled';

export const ContactList = ({ contacts, onDeletedContact }) => (
  <ContactUl>
    {contacts.map(({ id, name, number }) => (
      <ContactLi key={id}>
        <ContactItem
          id={id}
          contact={name}
          number={number}
          onDeletedContact={onDeletedContact}
        />
      </ContactLi>
    ))}
  </ContactUl>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ).isRequired,
};
