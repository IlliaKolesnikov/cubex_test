import * as firebase from 'firebase';
import { DB_CONFIG } from './Config';

firebase.initializeApp(DB_CONFIG);
export const databaseRef = firebase.database().ref();
export const data = databaseRef.child('data');