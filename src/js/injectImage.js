import designLogo from "../assets/images/icons/design-file.png";
import documentsLogo from "../assets/images/icons/documents-file.png";
import musicLogo from "../assets/images/icons/music-file.png";
import imagesLogo from "../assets/images/icons/images-file.png";
import quickAccess1 from "../assets/images/quickAccess/image-1.png";

const design = document.getElementById("top-card-design");
const documents = document.getElementById("top-card-documents");
const music = document.getElementById("top-card-music");
const images = document.getElementById("top-card-images");
const quickAccessImage1 = document.getElementById("quick-access-img-1");

design.setAttribute("src", designLogo);
documents.setAttribute("src", documentsLogo);
music.setAttribute("src", musicLogo);
images.setAttribute("src", imagesLogo);
quickAccessImage1.setAttribute("src", quickAccess1);
