<template>
<div class="container py-5">
  <div class="d-flex flex-wrap justify-content-between mb-4">
    <h3 class="text-primary">Bus Stop | 附近站牌</h3>
    <div class="search-width position-relative">
      <input type="text" class="form-control text-center" placeholder="快速搜尋" aria-label="search stop" aria-describedby="search-stop">
      <button class="search-btn btn pe-4" type="button" id="search-stop">
        <img class="search-icon" src="../assets/images/icon-search.svg" alt="search icon">
      </button>
    </div>
  </div>
  <div class="bg-white p-5 rounded-1 shadow-sm">
    <h5>附近的站牌</h5>
    <ul class="list-btn list-group flex-row">
      <li
        @click="change(300)"
        :class="distanceBtn? 'active' : ''"
        class="list-group-item list-group-item-action border-0 text-center">
        <h5 class="m-0">300 m</h5>
      </li>
      <li
        @click="change(500)"
        :class="distanceBtn? '' : 'active'"
        class="list-group-item list-group-item-action border-0 text-center">
        <h5 class="m-0">500 m</h5>
      </li>
    </ul>
    <div class="distance">
      <NearBy
        :getInfo="toApi">
      </NearBy>
    </div>
  </div>
</div>
</template>

<style lang="scss">
  // search bar
  body {
    background-color: #F5F6FF;
  }
  .search-width {
    width: 311px;
  }
  .form-control {
    padding-right: 65px;
  }
  .search-btn {
    position: absolute;
    right: 0;
    top: 0;
    .search-icon {
      filter: brightness(0.7);
    }
  }
  // 分隔選單
  .list-btn {
    border-radius: 1rem 1rem 0 0;
    overflow: hidden;
  }
  .distance {
    background-color: #ECEEFF;
    height: 60vh;
    overflow: scroll;
  }
  .list-group-item {
    border-radius: 1rem 1rem 0 0;
    background-color: #BFCDFF;
    color: white;
    width: 50%;
    &:first-child {
      border-radius: 1rem 0 0 0;
    }
    &:last-child {
      border-radius: 0 1rem 0 0;
    }
  }
</style>

<script>
import JsSHA from 'jssha'
import NearBy from '@/components/NearbyStop.vue'

export default {
  components: {
    NearBy
  },
  data () {
    return {
      nowLocation: {
        latitude: 25.047675,
        longitude: 121.517055
      },
      toApi: {
        api: [],
        busApi: []
      },
      distanceData: 300,
      distanceBtn: true
    }
  },
  methods: {
    // 取得當下位置
    getGeo () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          console.log(position.coords.latitude)
          console.log(position.coords.longitude)
          // 重新定位
          this.nowLocation.latitude = position.coords.latitude
          this.nowLocation.longitude = position.coords.longitude
          // 取得定位後，串接 api
          this.getApi()
        },
        error => {
          console.log(error.message)
        })
      } else {
        console.log('Your browser does not support geolocation API')
      }
    },
    apiID () {
      // API 驗證
      const AppID = process.env.VUE_APP_ID
      const AppKey = process.env.VUE_APP_KEY
      const GMTString = new Date().toGMTString()
      const ShaObj = new JsSHA('SHA-1', 'TEXT')
      ShaObj.setHMACKey(AppKey, 'TEXT')
      ShaObj.update('x-date: ' + GMTString)
      const HMAC = ShaObj.getHMAC('B64')
      const Authorization = `hmac username="${AppID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`
      return { Authorization: Authorization, 'X-Date': GMTString }
    },
    // 取得指定[位置,範圍]的全臺公車站牌資料
    getApi () {
      const urlData = `https://ptx.transportdata.tw/MOTC/v2/Bus/Station/NearBy?$top=30&$spatialFilter=nearby(${this.nowLocation.latitude}, ${this.nowLocation.longitude}, ${this.distanceData})&$format=JSON`
      this.$http.get(urlData,
        {
          headers: this.apiID()
        })
        .then((res) => {
          this.toApi.api = res.data
          console.log('ok取得指定[位置,範圍]的全臺公車站牌資料', this.api)
          // bus api
          this.getBus()
        })
        .catch(error => {
          console.log('error', error.response)
        })
    },
    // 取得指定站牌(item)公車路線資料
    getBus () {
      // 找到 getInfo 的 StationID
      this.toApi.api.forEach((item) => {
        const urlData = `https://ptx.transportdata.tw/MOTC/v2/Bus/Route/City/Taichung/PassThrough/Station/${item.StationID}?$top=30&$format=JSON`
        this.$http.get(urlData,
          {
            headers: this.apiID()
          })
          .then((res) => {
            console.log('ok 公車路線', res.data)
            this.toApi.busApi = res.data
          })
          .catch(error => {
            console.log('error 公車路線', error.response)
          })
      })
    },
    // 更改距離
    change (distance) {
      this.distanceData = distance
      this.getApi()
      // 切換按鈕 style: active
      if (this.distanceData === 300) {
        this.distanceBtn = true
      } else {
        this.distanceBtn = false
      }
    }
  },
  created () {
    this.getGeo()
  }
}
</script>
