const imagemin = require("imagemin");
const imageminWebp = require("imagemin-webp");

// imagemin(["./images/*.{jpg,png}"], "build/images", {
//   use: [imageminWebp({ quality: 50 })]
// }).then(() => {
//   console.log("Images optimized");
// });

(async () => {
  const files = await imagemin(["images/*.{jpg,png}"], {
    destination: "images/build",
    plugins: [
      imageminWebp({
        quality: 100
      })
    ]
  });

  console.log(files);
  //=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
})();
