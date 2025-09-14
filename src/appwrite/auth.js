// src/appwrite/auth.js
import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

class AuthService {
  client;
  account;

  constructor() {
    this.client = new Client()
      .setEndpoint(conf.appwriteUrl) //  Your Appwrite endpoint
      .setProject(conf.appwriteProjectId); //  Your Project ID

    this.account = new Account(this.client);
  }

  //  Create a new account (signup)
  async createAccount({ email, password, name }) {
    try {
      const user = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      // Auto login after signup
      if (user) {
        await this.login({ email, password }); //  create session
        const currentUser = await this.getCurrentUser(); //   get user info
        return currentUser; // return logged-in user
      }

      return user;
    } catch (error) {
      console.error("Appwrite service :: createAccount :: error", error);
      throw error;
    }
  }
 
  // Login with email + password
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession({
        email,
        password,
      });
    } catch (error) {
      console.error("Appwrite service :: login :: error", error);
      throw error;
    }
  }

  //  Get current user (if logged in)
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.error("Appwrite service :: getCurrentUser :: error", error);
      return null; // return null instead of throwing
    }
  }

  //  Logout user (end all sessions)
  async logout() {
    try {
      await this.account.deleteSessions(); // delete all sessions
    } catch (error) {
      console.error("Appwrite service :: logout :: error", error);
      throw error;
    }
  }
}

const authService = new AuthService();
export default authService;
