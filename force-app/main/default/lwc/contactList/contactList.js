import { LightningElement, wire, api } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';

export default class ContactList extends LightningElement {
    @api recordId;

    @wire(getContactList, {recordId:'$recordId'}) contacts;
}