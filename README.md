# Image EXIF Data Updater

This Node.js script utilizes the exiftool library to update EXIF data in PNG images. In this example, it's used to add metadata to images related to a beauty salon in Richmond, VA.

## Prerequisites

Before running the script, ensure that you have Node.js installed on your machine. You can download it from [https://nodejs.org/](https://nodejs.org/).

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/SwapnilSanghvi/bulk-image-metadata-edit.git
   ```

   ```bash
   cd bulk-image-metadata-edit
   ```

2. Clone the repository to your local machine:

   ```bash
   npm install
   ```

   ```bash
    npm install exiftool-vendored
   ```

## Usage

1. Open the script file (update-exif.js) and modify the imagePath variable to point to the directory containing your PNG images
2. Define the new EXIF information in the newExifData object, including Title, Description, GPSLatitude, and GPSLongitude.
3. Run the script using the following command:

```bash
 node app.js
```

This will update the EXIF data of the images in the specified directory with the provided information.

## Notes

- Ensure that you have write permissions for the images in the specified directory.
- Review the script and customize the EXIF data as needed for your use case.

## Troubleshooting

If you encounter any issues or errors, refer to the error messages displayed in the console for guidance. Ensure that the exiftool library is correctly installed and accessible.
git a
