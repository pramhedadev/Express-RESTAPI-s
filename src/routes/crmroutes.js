import {
  addNewContact,
  getContact,
  getContactWithID,
  updateContact,
  deleteContact
} from "../controllers/crmcontrollers";

const routes = app => {
  app
    .route("/contact")
    .get((req, res, next) => {
      //middleware
      console.log(`Request from ${req.originalUrl}`);
      console.log(`Request type : ${req.method}`);
      next();
    }, getContact)
    // post endpoint
    .post(addNewContact);
  app
    .route("/contact/:ContactID")
    // this is to get specific contact
    .get(getContactWithID)
    //updating specific contact
    .put(updateContact)
    // deleting a specific contact
    .delete(deleteContact);
};

export default routes;
