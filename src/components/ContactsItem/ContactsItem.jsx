import css from './ContactsItem.module.css';
const ContactsItem = ({contact, del}) =>{
	return(
		<ul className={css.contactsItem} >
			<li>{contact.name}:</li>
	 		<li className={css.telephone}>{contact.phone}</li>
	 		<li><button type="button" className={css.deleteButton} onClick={del}>Delete</button></li>
	 	</ul>
	)
}
export default ContactsItem;