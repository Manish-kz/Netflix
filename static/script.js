const trending = [
    
    "https://upload.wikimedia.org/wikipedia/en/thumb/2/24/All_of_Us_Are_Dead.jpeg/250px-All_of_Us_Are_Dead.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShDqNO371cf2Rh_XIyJXh09-Prftm2bBCUcQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3s7vHrMbDulmlxfUYiLhzXZ2ffVHoTvMO6g&s"
];

const container = document.getElementById("trending");

trending.forEach(movie => {
    const img = document.createElement("img");
    img.src = movie;
    img.className = "poster";
    container.appendChild(img);
});
