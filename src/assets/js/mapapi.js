const mapdiv = document.querySelector(".map_api");

function init() {
  const map = new naver.maps.Map(mapdiv, {
    center: new naver.maps.LatLng(35.151268, 129.112054),
    zoom: 17,
  });
  const marker = new naver.maps.Marker({
    position: new naver.maps.LatLng(35.151268, 129.112054),
    map: map,
    title: "Studio_ink",
  });
}

init();
