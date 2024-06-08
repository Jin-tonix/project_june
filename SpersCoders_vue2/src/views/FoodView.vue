<template>
  <div id="map" style="width:100%;height:350px;"></div>
</template>

<script>
export default {
  data() {
    return {
      placeOverlay: null,
      markers: [],
      currCategory: '',
      map: null,
      ps: null,
    };
  },
  mounted() {
    this.initMap();
    this.addCategoryClickEvent();
  },
  methods: {
    initMap() {
      const mapContainer = document.getElementById('map');
      const mapOption = {
        center: new kakao.maps.LatLng(37.566826, 126.9786567),
        level: 5
      };
      this.map = new kakao.maps.Map(mapContainer, mapOption);
      this.ps = new kakao.maps.services.Places(this.map);
      this.placeOverlay = new kakao.maps.CustomOverlay({ zIndex: 1 });
    },
    addCategoryClickEvent() {
      const category = document.getElementById('category');
      const children = category.children;
      for (let i = 0; i < children.length; i++) {
        children[i].onclick = this.onClickCategory;
      }
    },
    goToCategory(event) {
      const id = event.target.id;
      const className = event.target.className;
      this.placeOverlay.setMap(null);
      if (className === 'on') {
        this.currCategory = '';
        this.changeCategoryClass();
        this.removeMarker();
      } else {
        this.currCategory = id;
        this.changeCategoryClass(event.target);
        this.searchPlaces();
      }
    },
    searchPlaces() {
      if (!this.currCategory) return;
      this.placeOverlay.setMap(null);
      this.removeMarker();
      this.ps.categorySearch(this.currCategory, this.placesSearchCB, { useMapBounds: true });
    },
    placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        this.displayPlaces(data);
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        // 검색결과가 없는 경우
      } else if (status === kakao.maps.services.Status.ERROR) {
        // 검색 중 에러 발생
      }
    },
    displayPlaces(places) {
      for (let i = 0; i < places.length; i++) {
        const marker = this.addMarker(new kakao.maps.LatLng(places[i].y, places[i].x));
        marker.addListener('click', () => {
          this.displayPlaceInfo(places[i]);
        });
      }
    },
    addMarker(position) {
      const marker = new kakao.maps.Marker({
        position: position,
        map: this.map
      });
      this.markers.push(marker);
      return marker;
    },
    removeMarker() {
      for (let i = 0; i < this.markers.length; i++) {
        this.markers[i].setMap(null);
      }
      this.markers = [];
    },
    displayPlaceInfo(place) {
      const content = `<div class="placeinfo">
                    <a class="title" href="${place.place_url}" target="_blank" title="${place.place_name}">${place.place_name}</a>`;
      let addressContent = '';
      if (place.road_address_name) {
        addressContent = `<span title="${place.road_address_name}">${place.road_address_name}</span>
                      <span class="jibun" title="${place.address_name}">(지번 : ${place.address_name})</span>`;
      } else {
        addressContent = `<span title="${place.address_name}">${place.address_name}</span>`;
      }
      const telContent = `<span class="tel">${place.phone}</span></div><div class="after"></div>`;
      const contentNode = document.createElement('div');
      contentNode.innerHTML = content + addressContent + telContent;
      this.placeOverlay.setContent(contentNode);
      this.placeOverlay.setPosition(new kakao.maps.LatLng(place.y, place.x));
      this.placeOverlay.setMap(this.map);
    },
    changeCategoryClass(el) {
      const category = document.getElementById('category');
      const children = category.children;
      for (let i = 0; i < children.length; i++) {
        children[i].className = '';
      }
      if (el) {
        el.className = 'on';
      }
    }
  }
};
</script>
