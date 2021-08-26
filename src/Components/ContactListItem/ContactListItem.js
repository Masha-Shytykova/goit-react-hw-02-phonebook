import s from './ContactListItem.module.css';

function ContactListItem({ id, name, number, onDeleteContact }) {
  return (
    <li className={s.list__item}>
      {name}: {number}
      <button
        className={s.list__btn}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
}

export default ContactListItem;
