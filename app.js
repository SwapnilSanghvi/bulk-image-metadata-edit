const exiftool = require("exiftool-vendored").exiftool;

// The "./" at the beginning of the path indicates that the directory is relative to the current working directory of the script or application.
// Define the path to your PNG images
const imagePath = "./img/";

// Define the new EXIF information
const newExifData = {
  Title: "Enter Title",
  Description: "Enter Description",
  GPSLatitude: "Lat",
  GPSLongitude: "Long",
};

// Run the exiftool command to update the EXIF data
exiftool
  .write(imagePath, newExifData)
  .then(() => {
    console.log("EXIF data updated successfully.");
  })
  .catch((error) => {
    console.error("Error updating EXIF data:", error);
  })
  .finally(() => {
    // Close exiftool
    exiftool.end();
  });
