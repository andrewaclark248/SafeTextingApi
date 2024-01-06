import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import * as admin from 'firebase-admin';

import serviceAccountKey from "./serviceAccountKey.json"


export interface ServiceAccount {
  projectId?: string;
  clientEmail?: string;
  privateKey?: string;
}

let newType: ServiceAccount = {
  projectId: serviceAccountKey.project_id,
  clientEmail: serviceAccountKey.client_email,
  privateKey: serviceAccountKey.private_key
}

const app = initializeApp({
  credential: cert(newType)
});

const auth = getAuth(app);
export default auth;