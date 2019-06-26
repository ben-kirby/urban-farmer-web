import firebase from 'firebase'
import {firebaseConfig} from './firebaseConfig';

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth;
export const db = app.database;