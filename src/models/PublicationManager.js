import Publication from "./Publication.js";

import minimongo from "minimongo";

class PublicationManager {
  /**
   * Basic function for creating some starting data
   */
  initializeData() {}

  /**
   * Collects and joins all the titles from the publications
   * @return {[type]} [description]
   */
  getAllTitles() {
    let allPubs = "";

    for (let pub of this.state.publications) {
      allPubs += pub.title + " - ";
    }

    return allPubs;
  }

  addPublication(pubObj, doneCBK) {
    console.log("creating publication", pubObj);

    let db = new minimongo.IndexedDb(
      {
        namespace: "pubManagerDB",
      },
      function () {
        console.log("DB Created");

        db.addCollection("publications", function () {
          db.publications.upsert(
            pubObj,
            function (res) {
              console.log("Publication Inserted", res);

              doneCBK(res);
            }
          );
        });
      }
    );

  }

  getPublications(doneCBK) {
    let res;

    let db = new minimongo.IndexedDb(
      {
        namespace: "pubManagerDB",
      },
      function () {
        console.log("DB Created");

        db.addCollection("publications", function () {
          db.publications.find({}).fetch(function (publications, err) {
            res = publications;
            console.log("List of publications", publications);

            doneCBK(publications);
          });
        });
      }
    );
    return res;

    // return [
    //   new Publication("The Martian", "John"),
    //   new Publication("The lord of the rings", "John"),
    //   new Publication("Is this clear?.com", "John"),
    // ];
  }
}

// // new Publication("War and Peace", "John"),
//   testDB() {
//     // Require minimongo

//     console.log("testing DB");
//     const IndexedDb = minimongo.IndexedDb;
//     // Create IndexedDb
//     let db = new IndexedDb(
//       { namespace: "mydb" },
//       function () {
//         // Add a collection to the database
//         db.addCollection("animals", function () {
//           let doc = { species: "dog", name: "Bingo" };

//           // Always use upsert for both inserts and modifies
//           db.animals.upsert(doc, function () {
//             // Success:

//             // Query dog (with no query options beyond a selector)
//             db.animals.findOne({ species: "dog" }, {}, function (res) {
//               console.log("Dog's name is: " + res.name);
//             });
//           });
//         });
//       },
//       function () {
//         alert("some error!");
//       }
//     );
//   }

export default PublicationManager;
