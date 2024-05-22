import React from 'react'
import ContactCard from './ContactCard'



function ContactList({ contacts }: { contacts: any }) {
    return (
        <div className='p-8 flex flex-col gap-4'>
            {
                contacts.map((contact: any) => (
                    <ContactCard
                        key={contact.id}
                        link={contact.id}
                        image={contact.image}
                        name={contact.name}
                        email={contact.email}
                        contact={contact.contact}
                    />
                ))
            }
        </div>
    )
}

export default ContactList