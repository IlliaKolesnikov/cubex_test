import * as firebase from 'firebase';
import { DB_CONFIG } from './Config';

firebase.initializeApp(DB_CONFIG);

const databaseRef = firebase.database().ref();
export const speed = databaseRef.child('speed');