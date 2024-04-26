import $api from "../http";

export default class ApiService {
  static async getProfileData() {
    return $api.get("/profile");
  }
  static async reportIssue(title, description, assignedTo, severity) {
    try {
      return $api.post("/bugs/create", {
        title,
        description,
        assignedTo,
        severity,
      });
    } catch (e) {
      return e;
    }
  }
  static async getWorkers() {
    try {
      return (await $api.get("/users")).data.users;
    } catch (e) {
      return e;
    }
  }
  static async getIssues() {
    try {
      return (await $api.get("/bugs")).data.bugs;
    } catch (e) {
      return 500;
    }
  }
  static async getIssue(issueId) {
    try {
      return (await $api.get("/bugs/" + issueId)).data.bug;
    } catch (e) {
      return e;
    }
  }
}
