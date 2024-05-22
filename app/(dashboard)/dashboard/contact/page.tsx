import React from 'react'
import ContactList from './_components/ContactList'
import getContacts from '@/lib/getContact'

async function Contact() {

    const contacts = await getContacts()

    return (
        <div className=''>
            <ContactList contacts={contacts} />
        </div>
    )
}

export default Contact