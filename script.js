/* =========================================================
   GPS RUMAH
   SCRIPT.JS
   ========================================================= */


/* =========================================================
   HELPER
   ========================================================= */

function getElement(id) {
    return document.getElementById(id);
}


/* =========================================================
   FLIP CARD
   ========================================================= */

function flipCard(card) {

    if (!card) {
        return;
    }

    card.classList.toggle("flipped");
}


/*
   Klik pada flip card.
   Tetapi elemen seperti type-card, tombol dan link
   tidak akan menyebabkan flip.
*/

document.querySelectorAll(".flip-card").forEach(function(card) {

    card.addEventListener("click", function(event) {

        const interactiveElement =
            event.target.closest(
                ".type-card, .back-button, a, button"
            );

        if (interactiveElement) {
            return;
        }

        flipCard(card);

    });

});


/* =========================================================
   TOMBOL KEMBALI DARI FLIP
   ========================================================= */

document.querySelectorAll(".back-button").forEach(function(button) {

    button.addEventListener("click", function(event) {

        event.stopPropagation();

        const card =
            button.closest(".flip-card");

        if (card) {
            card.classList.remove("flipped");
        }

    });

});


/* =========================================================
   DATA DETAIL TIPE RUMAH
   ========================================================= */

const houseDetails = {

    /* =====================================================
       NOBLE COVE
       ===================================================== */

    "Noble Cove|Tipe 108": {

        land: "108 m²",

        building: "92 m²",

        bedroom: "3 kamar",

        bathroom: "2 kamar",

        carport: "2 mobil",

        floor: "2 lantai",

        price: "± Rp2,2 M",

        rooms: [
            "Ruang tamu",
            "Ruang keluarga",
            "Ruang makan",
            "Dapur",
            "3 kamar tidur",
            "2 kamar mandi",
            "Carport 2 mobil"
        ],

        description:
            "Hunian premium dua lantai dengan desain modern, ruang yang nyaman dan lingkungan eksklusif di kawasan Noble Cove Batam Centre.",

        advantages: [
            "Lokasi strategis di Batam Centre.",
            "Konsep hunian premium.",
            "Lingkungan tepi laut.",
            "High ceiling sekitar 3,7 meter.",
            "Akses kawasan yang strategis."
        ],

        facilities: [
            "Endless Park.",
            "Jogging track.",
            "Carport 2 mobil.",
            "Lingkungan hijau.",
            "Kawasan eksklusif."
        ],

        maps:
            "https://maps.app.goo.gl/mu1WLpxYpB73Ws8p9"

    },


    "Noble Cove|Tipe 120": {

        land: "120 m²",

        building: "±120 m²",

        bedroom: "3 kamar",

        bathroom: "3 kamar",

        carport: "2 mobil",

        floor: "2 lantai",

        price: "Hubungi Marketing",

        rooms: [
            "Ruang tamu",
            "Ruang keluarga",
            "Ruang makan",
            "Dapur",
            "3 kamar tidur",
            "3 kamar mandi",
            "Carport 2 mobil"
        ],

        description:
            "Hunian premium dua lantai dengan ruang yang luas dan konsep modern.",

        advantages: [
            "Lokasi strategis.",
            "Lingkungan premium.",
            "Dekat pusat aktivitas Batam Centre."
        ],

        facilities: [
            "Endless Park.",
            "Jogging track.",
            "Area hijau.",
            "Carport."
        ],

        maps:
            "https://maps.app.goo.gl/mu1WLpxYpB73Ws8p9"

    },


    "Noble Cove|Tipe 150A": {

        land: "150 m²",

        building: "±150 m²",

        bedroom: "3 kamar",

        bathroom: "3 kamar",

        carport: "2 mobil",

        floor: "2 lantai",

        price: "Hubungi Marketing",

        rooms: [
            "Ruang tamu",
            "Ruang keluarga",
            "Ruang makan",
            "Dapur",
            "3 kamar tidur",
            "3 kamar mandi",
            "Carport 2 mobil"
        ],

        description:
            "Hunian premium dengan ruang lebih luas dan desain modern.",

        advantages: [
            "Lokasi strategis.",
            "Konsep eksklusif.",
            "Lingkungan hijau."
        ],

        facilities: [
            "Endless Park.",
            "Jogging track.",
            "Area hijau."
        ],

        maps:
            "https://maps.app.goo.gl/mu1WLpxYpB73Ws8p9"

    },


    "Noble Cove|Tipe 180": {

        land: "180 m²",

        building: "±180 m²",

        bedroom: "3 kamar",

        bathroom: "3 kamar",

        carport: "2 mobil",

        floor: "2 lantai",

        price: "Hubungi Marketing",

        rooms: [
            "Ruang tamu",
            "Ruang keluarga",
            "Ruang makan",
            "Dapur",
            "3 kamar tidur",
            "3 kamar mandi",
            "Carport"
        ],

        description:
            "Hunian premium dengan ukuran bangunan lebih luas untuk kebutuhan keluarga.",

        advantages: [
            "Kawasan premium.",
            "Lokasi strategis.",
            "Lingkungan eksklusif."
        ],

        facilities: [
            "Endless Park.",
            "Jogging track.",
            "Area hijau."
        ],

        maps:
            "https://maps.app.goo.gl/mu1WLpxYpB73Ws8p9"

    },


    "Noble Cove|Tipe 215": {

        land: "215 m²",

        building: "±215 m²",

        bedroom: "4 kamar",

        bathroom: "4 kamar",

        carport: "2 mobil",

        floor: "2 lantai",

        price: "Hubungi Marketing",

        rooms: [
            "Ruang tamu",
            "Ruang keluarga",
            "Ruang makan",
            "Dapur",
            "4 kamar tidur",
            "4 kamar mandi",
            "Carport"
        ],

        description:
            "Hunian premium berukuran besar untuk keluarga yang membutuhkan ruang lebih luas.",

        advantages: [
            "Kawasan eksklusif.",
            "Lokasi strategis.",
            "Ruang lebih luas."
        ],

        facilities: [
            "Endless Park.",
            "Jogging track.",
            "Lingkungan hijau."
        ],

        maps:
            "https://maps.app.goo.gl/mu1WLpxYpB73Ws8p9"

    },


    "Noble Cove|Tipe 218": {

        land: "218 m²",

        building: "±218 m²",

        bedroom: "4 kamar",

        bathroom: "4 kamar",

        carport: "2 mobil",

        floor: "2 lantai",

        price: "Hubungi Marketing",

        rooms: [
            "Ruang tamu",
            "Ruang keluarga",
            "Ruang makan",
            "Dapur",
            "4 kamar tidur",
            "4 kamar mandi",
            "Carport"
        ],

        description:
            "Hunian premium dengan ukuran besar dan konsep eksklusif.",

        advantages: [
            "Lingkungan premium.",
            "Lokasi strategis.",
            "Ruang hunian luas."
        ],

        facilities: [
            "Endless Park.",
            "Jogging track.",
            "Area hijau."
        ],

        maps:
            "https://maps.app.goo.gl/mu1WLpxYpB73Ws8p9"

    },


    /* =====================================================
       THE HOME
       ===================================================== */

    "The Home Southlink|Tipe 100": {

        land: "±102 m²",

        building: "±100 m²",

        bedroom: "3+1 kamar",

        bathroom: "3 kamar",

        carport: "1 mobil",

        floor: "1 lantai",

        price: "Hubungi Marketing",

        rooms: [
            "Ruang tamu",
            "Ruang keluarga",
            "Ruang makan",
            "Dapur",
            "3+1 kamar tidur",
            "3 kamar mandi",
            "Carport"
        ],

        description:
            "Hunian eksklusif di kawasan Southlinks Country Club dengan lingkungan alami dan nyaman.",

        advantages: [
            "Berada di kawasan lapangan golf.",
            "Two-layer gate.",
            "Sistem kartu akses.",
            "Lingkungan alami dan tenang."
        ],

        facilities: [
            "Clubhouse.",
            "2 kolam renang.",
            "Gym.",
            "Minimarket.",
            "Private Community Backyard."
        ],

        maps:
            "https://maps.app.goo.gl/4wnjJeJohAVa1Z1t6"

    },


    "The Home Southlink|Tipe 102": {

        land: "±102 m²",

        building: "±102 m²",

        bedroom: "3 kamar",

        bathroom: "2 kamar",

        carport: "1 mobil",

        floor: "2 lantai",

        price: "Hubungi Marketing",

        rooms: [
            "Ruang tamu",
            "Ruang keluarga",
            "Ruang makan",
            "Dapur",
            "3 kamar tidur",
            "2 kamar mandi",
            "Carport"
        ],

        description:
            "Hunian dua lantai dengan desain modern dan lingkungan eksklusif.",

        advantages: [
            "Dekat fasilitas kota.",
            "Kawasan lapangan golf.",
            "Keamanan kawasan."
        ],

        facilities: [
            "Clubhouse.",
            "Kolam renang.",
            "Gym.",
            "Minimarket."
        ],

        maps:
            "https://maps.app.goo.gl/4wnjJeJohAVa1Z1t6"

    },


    "The Home Southlink|Tipe 110": {

        land: "±110 m²",

        building: "±110 m²",

        bedroom: "3 kamar",

        bathroom: "2 kamar",

        carport: "1 mobil",

        floor: "2 lantai",

        price: "Hubungi Marketing",

        rooms: [
            "Ruang tamu",
            "Ruang keluarga",
            "Ruang makan",
            "Dapur",
            "3 kamar tidur",
            "2 kamar mandi",
            "Carport"
        ],

        description:
            "Hunian modern dua lantai di kawasan Southlinks Country Club.",

        advantages: [
            "Lingkungan alami.",
            "Dekat lapangan golf.",
            "Akses kawasan eksklusif."
        ],

        facilities: [
            "Clubhouse.",
            "Kolam renang.",
            "Gym.",
            "Minimarket."
        ],

        maps:
            "https://maps.app.goo.gl/4wnjJeJohAVa1Z1t6"

    },


    "The Home Southlink|Tipe 178": {

        land: "±178 m²",

        building: "±178 m²",

        bedroom: "3 kamar",

        bathroom: "3 kamar",

        carport: "1 mobil",

        floor: "2 lantai",

        price: "Hubungi Marketing",

        rooms: [
            "Ruang tamu",
            "Ruang keluarga",
            "Ruang makan",
            "Dapur",
            "3 kamar tidur",
            "3 kamar mandi",
            "Carport"
        ],

        description:
            "Hunian premium dengan ruang yang lebih luas dan desain modern.",

        advantages: [
            "Lingkungan eksklusif.",
            "Dekat fasilitas kota.",
            "Berada di kawasan golf."
        ],

        facilities: [
            "Clubhouse.",
            "Kolam renang.",
            "Gym.",
            "Private Community Backyard."
        ],

        maps:
            "https://maps.app.goo.gl/4wnjJeJohAVa1Z1t6"

    },


    /* =====================================================
       WONDERLAND
       ===================================================== */

    "Wonderland Nongsa|Tipe 38": {

        land: "±97 m²",

        building: "Tipe 38",

        bedroom: "2 kamar",

        bathroom: "1 kamar",

        carport: "1 mobil",

        floor: "1 lantai",

        price: "Hubungi Marketing",

        rooms: [
            "Ruang tamu",
            "Ruang keluarga",
            "Dapur",
            "2 kamar tidur",
            "1 kamar mandi",
            "Carport"
        ],

        description:
            "Hunian dengan konsep For Your Wonderful Life di kawasan Batu Besar, Nongsa.",

        advantages: [
            "Dekat Bandara Hang Nadim.",
            "Dekat Turi Beach.",
            "Dekat Montigo Resort.",
            "Dekat pusat perbelanjaan."
        ],

        facilities: [
            "Basketball court.",
            "Playground.",
            "Gazebo.",
            "Pos security.",
            "Area penghijauan."
        ],

        maps:
            "https://maps.app.goo.gl/hdHAEJb6hK2GpGJS9"

    },


    "Wonderland Nongsa|Tipe 42": {

        land: "Hubungi Marketing",

        building: "Tipe 42",

        bedroom: "Hubungi Marketing",

        bathroom: "Hubungi Marketing",

        carport: "Hubungi Marketing",

        floor: "Hubungi Marketing",

        price: "Hubungi Marketing",

        rooms: [
            "Ruang tamu",
            "Ruang keluarga",
            "Dapur",
            "Ruangan keluarga",
            "Kamar tidur sesuai tipe",
            "Kamar mandi sesuai tipe"
        ],

        description:
            "Pilihan tipe hunian Wonderland Nongsa dengan konsep lingkungan hijau.",

        advantages: [
            "Lokasi Nongsa.",
            "Dekat berbagai fasilitas.",
            "Konsep penghijauan."
        ],

        facilities: [
            "Playground.",
            "Lapangan basket.",
            "Gazebo.",
            "Security."
        ],

        maps:
            "https://maps.app.goo.gl/hdHAEJb6hK2GpGJS9"

    },


    "Wonderland Nongsa|Tipe 50": {

        land: "Hubungi Marketing",

        building: "Tipe 50",

        bedroom: "Hubungi Marketing",

        bathroom: "Hubungi Marketing",

        carport: "Hubungi Marketing",

        floor: "Hubungi Marketing",

        price: "Hubungi Marketing",

        rooms: [
            "Ruang tamu",
            "Ruang keluarga",
            "Dapur",
            "Kamar tidur sesuai tipe",
            "Kamar mandi sesuai tipe"
        ],

        description:
            "Pilihan hunian yang berada di kawasan strategis Nongsa.",

        advantages: [
            "Dekat Bandara Hang Nadim.",
            "Dekat kawasan wisata.",
            "Lingkungan hijau."
        ],

        facilities: [
            "Playground.",
            "Gazebo.",
            "Security."
        ],

        maps:
            "https://maps.app.goo.gl/hdHAEJb6hK2GpGJS9"

    },


    "Wonderland Nongsa|Tipe 60": {

        land: "Hubungi Marketing",

        building: "Tipe 60",

        bedroom: "Hubungi Marketing",

        bathroom: "Hubungi Marketing",

        carport: "Hubungi Marketing",

        floor: "Hubungi Marketing",

        price: "Hubungi Marketing",

        rooms: [
            "Ruang tamu",
            "Ruang keluarga",
            "Dapur",
            "Kamar tidur sesuai tipe",
            "Kamar mandi sesuai tipe"
        ],

        description:
            "Pilihan hunian dengan ukuran lebih besar di kawasan Wonderland Nongsa.",

        advantages: [
            "Lokasi strategis.",
            "Dekat fasilitas umum.",
            "Lingkungan hijau."
        ],

        facilities: [
            "Playground.",
            "Lapangan basket.",
            "Gazebo.",
            "Security."
        ],

        maps:
            "https://maps.app.goo.gl/hdHAEJb6hK2GpGJS9"

    },


    /* =====================================================
       KEZIA
       ===================================================== */

    "Kezia Residence|Tipe 105": {

        land: "Mulai ±108 m²",

        building: "Tipe 105",

        bedroom: "3 kamar",

        bathroom: "3 kamar",

        carport: "1 mobil",

        floor: "2 lantai",

        price: "± Rp800 Juta - Rp3,5 M",

        rooms: [
            "Ruang tamu",
            "Ruang keluarga",
            "Ruang makan",
            "Dapur",
            "3 kamar tidur",
            "3 kamar mandi",
            "Carport"
        ],

        description:
            "Hunian premium dengan ruang luas di kawasan Baloi Indah, Lubuk Baja.",

        advantages: [
            "Lokasi strategis.",
            "Dekat Nagoya.",
            "Dekat pusat Kota Batam.",
            "Kawasan aktivitas bisnis."
        ],

        facilities: [
            "ROW lingkungan sekitar 12 meter.",
            "Pilihan unit hook.",
            "Lingkungan eksklusif."
        ],

        maps:
            "https://maps.app.goo.gl/o6145ZJZR38YCDxr9"

    },


    /* =====================================================
       ABC
       ===================================================== */

    "Aji Business Center|Tipe 61": {

        land: "±108 m²",

        building: "±68,5 m²",

        bedroom: "-",

        bathroom: "2 kamar",

        carport: "Area parkir",

        floor: "2 lantai",

        price: "± Rp880 Juta - Rp1,6 M",

        rooms: [
            "Ruang usaha",
            "Ruang depan",
            "Area usaha",
            "2 kamar mandi",
            "Area parkir"
        ],

        description:
            "Ruko komersial yang cocok untuk kebutuhan usaha di kawasan Batu Aji.",

        advantages: [
            "Berada di jalan utama.",
            "Kawasan padat penduduk.",
            "Cocok untuk bisnis.",
            "Akses jalan besar."
        ],

        facilities: [
            "Area siap usaha.",
            "2 kamar mandi.",
            "Area parkir.",
            "Lokasi komersial."
        ],

        maps:
            "https://maps.app.goo.gl/X6oZquKi7qxq6EBo7"

    },


    "Aji Business Center|Tipe 70": {

        land: "Hubungi Marketing",

        building: "Tipe 70",

        bedroom: "-",

        bathroom: "2 kamar",

        carport: "Area parkir",

        floor: "2 lantai",

        price: "± Rp880 Juta - Rp1,6 M",

        rooms: [
            "Ruang usaha",
            "Ruang depan",
            "Area usaha",
            "2 kamar mandi",
            "Area parkir"
        ],

        description:
            "Ruko dengan ukuran lebih luas untuk kegiatan usaha dan investasi.",

        advantages: [
            "Lokasi strategis Batu Aji.",
            "Jalan utama.",
            "Kawasan padat penduduk."
        ],

        facilities: [
            "Area siap usaha.",
            "2 kamar mandi.",
            "Area parkir."
        ],

        maps:
            "https://maps.app.goo.gl/X6oZquKi7qxq6EBo7"

    }

};


/* =========================================================
   MODAL ELEMENT
   ========================================================= */

const propertyModal =
    getElement("propertyModal");

const closeModal =
    getElement("closeModal");

const modalProperty =
    getElement("modalProperty");

const modalType =
    getElement("modalType");

const modalMainImage =
    getElement("modalMainImage");

const modalSiteplan =
    getElement("modalSiteplan");

const houseThumbnail =
    getElement("houseThumbnail");

const siteplanThumbnail =
    getElement("siteplanThumbnail");

const houseSelector =
    getElement("houseSelector");

const siteplanSelector =
    getElement("siteplanSelector");

const prevImage =
    getElement("prevImage");

const nextImage =
    getElement("nextImage");

const zoomIn =
    getElement("zoomIn");

const zoomOut =
    getElement("zoomOut");

const zoomReset =
    getElement("zoomReset");

const zoomText =
    getElement("zoomText");

const zoomViewport =
    getElement("zoomViewport");

const summaryProperty =
    getElement("summaryProperty");

const summaryType =
    getElement("summaryType");

const detailLand =
    getElement("detailLand");

const detailBuilding =
    getElement("detailBuilding");

const detailBedroom =
    getElement("detailBedroom");

const detailBathroom =
    getElement("detailBathroom");

const detailCarport =
    getElement("detailCarport");

const detailFloor =
    getElement("detailFloor");

const detailPrice =
    getElement("detailPrice");

const modalDescription =
    getElement("modalDescription");

const roomList =
    getElement("roomList");

const advantageList =
    getElement("advantageList");

const facilityList =
    getElement("facilityList");

const detailMaps =
    getElement("detailMaps");

const detailWhatsApp =
    getElement("detailWhatsApp");


/* =========================================================
   VARIABEL GALERI
   ========================================================= */

let currentHouseImage = "";

let currentSiteplanImage = "";

let currentImageIndex = 0;


/* =========================================================
   VARIABEL ZOOM
   ========================================================= */

let zoomLevel = 1;

const MIN_ZOOM = 0.7;

const MAX_ZOOM = 4;

const ZOOM_STEP = 0.25;


/* =========================================================
   VARIABEL DRAG
   ========================================================= */

let isDragging = false;

let startX = 0;

let startY = 0;

let positionX = 0;

let positionY = 0;

let startPositionX = 0;

let startPositionY = 0;


/* =========================================================
   UPDATE TRANSFORM
   ========================================================= */

function updateImageTransform() {

    modalMainImage.style.transform =
        `translate(
            ${positionX}px,
            ${positionY}px
        )
        scale(${zoomLevel})`;

    zoomText.textContent =
        Math.round(
            zoomLevel * 100
        ) + "%";
}


/* =========================================================
   RESET ZOOM
   ========================================================= */

function resetZoom() {

    zoomLevel = 1;

    positionX = 0;

    positionY = 0;

    updateImageTransform();

}


/* =========================================================
   ZOOM IN
   ========================================================= */

function zoomInImage() {

    zoomLevel += ZOOM_STEP;

    if (zoomLevel > MAX_ZOOM) {
        zoomLevel = MAX_ZOOM;
    }

    updateImageTransform();
}


/* =========================================================
   ZOOM OUT
   ========================================================= */

function zoomOutImage() {

    zoomLevel -= ZOOM_STEP;

    if (zoomLevel < MIN_ZOOM) {
        zoomLevel = MIN_ZOOM;
    }

    updateImageTransform();
}


/* =========================================================
   UPDATE GALERI
   ========================================================= */

function updateGallery() {

    if (currentImageIndex === 0) {

        modalMainImage.src =
            currentHouseImage;

        houseSelector.classList.add("active");

        siteplanSelector.classList.remove("active");

    } else {

        modalMainImage.src =
            currentSiteplanImage;

        siteplanSelector.classList.add("active");

        houseSelector.classList.remove("active");

    }

    resetZoom();

}


/* =========================================================
   TAMPILKAN DETAIL
   ========================================================= */

function showPropertyDetail(card) {

    const property =
        card.dataset.property;

    const type =
        card.dataset.type;

    const image =
        card.dataset.image;

    const siteplan =
        card.dataset.siteplan;


    currentHouseImage =
        image;

    currentSiteplanImage =
        siteplan;


    const key =
        `${property}|${type}`;


    const detail =
        houseDetails[key];


    modalProperty.textContent =
        property;

    modalType.textContent =
        type;


    summaryProperty.textContent =
        property;

    summaryType.textContent =
        type;


    if (detail) {

        detailLand.textContent =
            detail.land;

        detailBuilding.textContent =
            detail.building;

        detailBedroom.textContent =
            detail.bedroom;

        detailBathroom.textContent =
            detail.bathroom;

        detailCarport.textContent =
            detail.carport;

        detailFloor.textContent =
            detail.floor;

        detailPrice.textContent =
            detail.price;

        modalDescription.textContent =
            detail.description;


        roomList.innerHTML =
            detail.rooms
                .map(function(room) {
                    return `<li>${escapeHTML(room)}</li>`;
                })
                .join("");


        advantageList.innerHTML =
            detail.advantages
                .map(function(item) {
                    return `<li>${escapeHTML(item)}</li>`;
                })
                .join("");


        facilityList.innerHTML =
            detail.facilities
                .map(function(item) {
                    return `<li>${escapeHTML(item)}</li>`;
                })
                .join("");


        detailMaps.href =
            detail.maps;


    } else {

        detailLand.textContent =
            "-";

        detailBuilding.textContent =
            "-";

        detailBedroom.textContent =
            "-";

        detailBathroom.textContent =
            "-";

        detailCarport.textContent =
            "-";

        detailFloor.textContent =
            "-";

        detailPrice.textContent =
            "Hubungi Marketing";

        modalDescription.textContent =
            "Informasi detail tipe rumah dapat ditanyakan kepada marketing GPS Rumah.";

        roomList.innerHTML =
            "<li>Hubungi Marketing untuk detail ruangan.</li>";

        advantageList.innerHTML =
            "<li>Hubungi Marketing untuk informasi lengkap.</li>";

        facilityList.innerHTML =
            "<li>Hubungi Marketing untuk informasi fasilitas.</li>";

        detailMaps.href =
            "#";
    }


    detailWhatsApp.href =
        "https://wa.me/6282392155171?text=" +
        encodeURIComponent(
            `Halo Marketing GPS Rumah, saya tertarik dengan ${property} ${type}.`
        );


    houseThumbnail.src =
        image;

    siteplanThumbnail.src =
        siteplan;

    modalSiteplan.src =
        siteplan;


    currentImageIndex = 0;


    updateGallery();


    propertyModal.classList.add("active");

    propertyModal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   KLIK KARTU TIPE
   ========================================================= */

document.querySelectorAll(".type-card")
    .forEach(function(card) {

        card.addEventListener(
            "click",
            function(event) {

                event.preventDefault();

                event.stopPropagation();

                showPropertyDetail(card);

            }
        );

    });


/* =========================================================
   SELECTOR GAMBAR RUMAH
   ========================================================= */

houseSelector.addEventListener(
    "click",
    function(event) {

        event.stopPropagation();

        currentImageIndex = 0;

        updateGallery();

    }
);


/* =========================================================
   SELECTOR SITEPLAN
   ========================================================= */

siteplanSelector.addEventListener(
    "click",
    function(event) {

        event.stopPropagation();

        currentImageIndex = 1;

        updateGallery();

    }
);


/* =========================================================
   TOMBOL NEXT
   ========================================================= */

nextImage.addEventListener(
    "click",
    function(event) {

        event.stopPropagation();

        currentImageIndex++;

        if (currentImageIndex > 1) {
            currentImageIndex = 0;
        }

        updateGallery();

    }
);


/* =========================================================
   TOMBOL PREVIOUS
   ========================================================= */

prevImage.addEventListener(
    "click",
    function(event) {

        event.stopPropagation();

        currentImageIndex--;

        if (currentImageIndex < 0) {
            currentImageIndex = 1;
        }

        updateGallery();

    }
);


/* =========================================================
   ZOOM BUTTON
   ========================================================= */

zoomIn.addEventListener(
    "click",
    function(event) {

        event.stopPropagation();

        zoomInImage();

    }
);


zoomOut.addEventListener(
    "click",
    function(event) {

        event.stopPropagation();

        zoomOutImage();

    }
);


zoomReset.addEventListener(
    "click",
    function(event) {

        event.stopPropagation();

        resetZoom();

    }
);


/* =========================================================
   ZOOM DENGAN MOUSE WHEEL
   ========================================================= */

zoomViewport.addEventListener(
    "wheel",
    function(event) {

        event.preventDefault();

        if (event.deltaY < 0) {

            zoomInImage();

        } else {

            zoomOutImage();

        }

    },
    {
        passive: false
    }
);


/* =========================================================
   DRAG DENGAN MOUSE
   ========================================================= */

zoomViewport.addEventListener(
    "mousedown",
    function(event) {

        if (zoomLevel <= 1) {
            return;
        }

        isDragging = true;

        zoomViewport.classList.add(
            "dragging"
        );

        startX =
            event.clientX;

        startY =
            event.clientY;

        startPositionX =
            positionX;

        startPositionY =
            positionY;

    }
);


window.addEventListener(
    "mousemove",
    function(event) {

        if (!isDragging) {
            return;
        }

        positionX =
            startPositionX +
            (
                event.clientX -
                startX
            );

        positionY =
            startPositionY +
            (
                event.clientY -
                startY
            );

        updateImageTransform();

    }
);


window.addEventListener(
    "mouseup",
    function() {

        isDragging = false;

        zoomViewport.classList.remove(
            "dragging"
        );

    }
);


/* =========================================================
   TOUCH / HP
   ========================================================= */

zoomViewport.addEventListener(
    "touchstart",
    function(event) {

        if (zoomLevel <= 1) {
            return;
        }

        const touch =
            event.touches[0];

        isDragging = true;

        startX =
            touch.clientX;

        startY =
            touch.clientY;

        startPositionX =
            positionX;

        startPositionY =
            positionY;

    },
    {
        passive: true
    }
);


zoomViewport.addEventListener(
    "touchmove",
    function(event) {

        if (!isDragging) {
            return;
        }

        const touch =
            event.touches[0];

        positionX =
            startPositionX +
            (
                touch.clientX -
                startX
            );

        positionY =
            startPositionY +
            (
                touch.clientY -
                startY
            );

        updateImageTransform();

    },
    {
        passive: true
    }
);


zoomViewport.addEventListener(
    "touchend",
    function() {

        isDragging = false;

    }
);


/* =========================================================
   TUTUP MODAL
   ========================================================= */

function closePropertyModal() {

    propertyModal.classList.remove(
        "active"
    );

    propertyModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow =
        "";

    resetZoom();

}


closeModal.addEventListener(
    "click",
    function() {

        closePropertyModal();

    }
);


/* =========================================================
   KLIK AREA GELAP
   ========================================================= */

propertyModal.addEventListener(
    "click",
    function(event) {

        if (
            event.target ===
            propertyModal
        ) {

            closePropertyModal();

        }

    }
);


/* =========================================================
   ESC
   ========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape" &&
            propertyModal.classList.contains(
                "active"
            )
        ) {

            closePropertyModal();

        }

    }
);


/* =========================================================
   KEAMANAN HTML
   ========================================================= */

function escapeHTML(value) {

    return String(value)
        .replaceAll(
            "&",
            "&amp;"
        )
        .replaceAll(
            "<",
            "&lt;"
        )
        .replaceAll(
            ">",
            "&gt;"
        )
        .replaceAll(
            '"',
            "&quot;"
        )
        .replaceAll(
            "'",
            "&#039;"
        );

}


/* =========================================================
   FORMAT RUPIAH
   ========================================================= */

function formatRupiah(number) {

    return new Intl.NumberFormat(
        "id-ID",
        {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0
        }
    ).format(number);

}


/* =========================================================
   SIMULASI KPR
   ========================================================= */

const kprForm =
    getElement("kprForm");


kprForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const harga =
            Number(
                getElement("harga").value
            );


        const penghasilan =
            Number(
                getElement("penghasilan").value
            );


        const dpPersen =
            Number(
                getElement("dp").value
            );


        const bungaTahunan =
            Number(
                getElement("bunga").value
            );


        const tenorTahun =
            Number(
                getElement("tenor").value
            );


        if (
            harga <= 0 ||
            penghasilan <= 0 ||
            dpPersen < 0 ||
            dpPersen >= 100 ||
            bungaTahunan < 0 ||
            tenorTahun <= 0
        ) {

            alert(
                "Mohon periksa kembali data KPR."
            );

            return;

        }


        const uangMuka =
            harga *
            (dpPersen / 100);


        const plafon =
            harga -
            uangMuka;


        const bungaBulanan =
            (bungaTahunan / 100) /
            12;


        const jumlahBulan =
            tenorTahun *
            12;


        let cicilan;


        if (
            bungaBulanan === 0
        ) {

            cicilan =
                plafon /
                jumlahBulan;

        } else {

            const faktor =
                Math.pow(
                    1 + bungaBulanan,
                    jumlahBulan
                );


            cicilan =
                plafon *
                bungaBulanan *
                faktor /
                (faktor - 1);

        }


        const persentasePenghasilan =
            (
                cicilan /
                penghasilan
            ) *
            100;


        let status;


        if (
            persentasePenghasilan <= 30
        ) {

            status =
                "Estimasi cicilan berada pada tingkat ≤ 30% dari penghasilan. Secara sederhana masih relatif aman, tetapi keputusan kredit tetap bergantung pada penilaian bank.";

        } else if (
            persentasePenghasilan <= 40
        ) {

            status =
                "Estimasi cicilan berada di kisaran 31–40% dari penghasilan. Pertimbangkan kembali kemampuan pembayaran bulanan.";

        } else {

            status =
                "Estimasi cicilan lebih dari 40% penghasilan. Sebaiknya pertimbangkan DP lebih besar, tenor berbeda, atau properti dengan harga lebih rendah.";

        }


        getElement(
            "resultHarga"
        ).textContent =
            formatRupiah(harga);


        getElement(
            "resultDP"
        ).textContent =
            formatRupiah(uangMuka);


        getElement(
            "resultPlafon"
        ).textContent =
            formatRupiah(plafon);


        getElement(
            "resultCicilan"
        ).textContent =
            formatRupiah(cicilan);


        getElement(
            "kprStatus"
        ).textContent =
            status;

    }
);


/* =========================================================
   DATA CUSTOMER
   ========================================================= */

const memberForm =
    getElement("memberForm");

const memberTableBody =
    getElement("memberTableBody");

const clearMembers =
    getElement("clearMembers");


let members =
    JSON.parse(
        localStorage.getItem(
            "gpsRumahMembers"
        )
    ) || [];


/* =========================================================
   SIMPAN CUSTOMER
   ========================================================= */

function saveMembers() {

    localStorage.setItem(
        "gpsRumahMembers",
        JSON.stringify(members)
    );

}


/* =========================================================
   TAMPILKAN CUSTOMER
   ========================================================= */

function renderMembers() {

    memberTableBody.innerHTML = "";


    if (
        members.length === 0
    ) {

        memberTableBody.innerHTML = `
            <tr>
                <td
                    colspan="6"
                    style="text-align:center;"
                >
                    Belum ada data customer.
                </td>
            </tr>
        `;

        return;
    }


    members.forEach(
        function(member, index) {

            const row =
                document.createElement(
                    "tr"
                );


            row.innerHTML = `
                <td>
                    ${index + 1}
                </td>

                <td>
                    ${escapeHTML(
                        member.nama
                    )}
                </td>

                <td>
                    ${escapeHTML(
                        member.email
                    )}
                </td>

                <td>
                    ${escapeHTML(
                        member.telepon
                    )}
                </td>

                <td>
                    ${escapeHTML(
                        member.property
                    )}
                </td>

                <td>
                    <button
                        type="button"
                        class="delete-button"
                        data-index="${index}"
                    >
                        Hapus
                    </button>
                </td>
            `;


            memberTableBody.appendChild(
                row
            );

        }
    );

}


/* =========================================================
   TAMBAH CUSTOMER
   ========================================================= */

memberForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const nama =
            getElement(
                "namaCustomer"
            ).value.trim();


        const email =
            getElement(
                "emailCustomer"
            ).value.trim();


        const telepon =
            getElement(
                "teleponCustomer"
            ).value.trim();


        const property =
            getElement(
                "propertyCustomer"
            ).value;


        if (
            !nama ||
            !email ||
            !telepon ||
            !property
        ) {

            alert(
                "Mohon lengkapi data customer."
            );

            return;

        }


        members.push({

            nama:
                nama,

            email:
                email,

            telepon:
                telepon,

            property:
                property

        });


        saveMembers();

        renderMembers();

        memberForm.reset();


        alert(
            "Data customer berhasil ditambahkan."
        );

    }
);


/* =========================================================
   HAPUS SATU CUSTOMER
   ========================================================= */

memberTableBody.addEventListener(
    "click",
    function(event) {

        const button =
            event.target.closest(
                ".delete-button"
            );


        if (!button) {
            return;
        }


        const index =
            Number(
                button.dataset.index
            );


        const yakin =
            confirm(
                "Apakah Anda yakin ingin menghapus data ini?"
            );


        if (!yakin) {
            return;
        }


        members.splice(
            index,
            1
        );


        saveMembers();

        renderMembers();

    }
);


/* =========================================================
   HAPUS SEMUA CUSTOMER
   ========================================================= */

clearMembers.addEventListener(
    "click",
    function() {

        if (
            members.length === 0
        ) {

            alert(
                "Belum ada data untuk dihapus."
            );

            return;

        }


        const yakin =
            confirm(
                "Hapus semua data customer?"
            );


        if (!yakin) {
            return;
        }


        members = [];

        saveMembers();

        renderMembers();

    }
);


/* =========================================================
   JALANKAN SAAT HALAMAN DIBUKA
   ========================================================= */

renderMembers();