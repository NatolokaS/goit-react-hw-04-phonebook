import css from './Contacts.module.css'
const Contacts = ({ contacts, onDeleteContact }) => (
  <section> 
    <ul className={css.list}>
      {contacts.map(contact => (
        <li className={css.item} key={contact.id}>
          {contact.name + ' : ' + contact.number}
          {
            <button className={css.btn}
              type="button"
              name="delete"
              onClick={() => onDeleteContact(contact.id)}
            >
              Delete
            </button>
          }
        </li>
      ))}
    </ul>
  </section>
);
  
export default Contacts