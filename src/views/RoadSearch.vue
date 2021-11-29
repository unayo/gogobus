<template>
<div class="container py-5">
  <div class="d-flex flex-wrap justify-content-between mb-4">
    <h3 class="text-primary">Road Search | 路線搜尋</h3>
    <div class="search-width position-relative">
      <input type="text" class="form-control text-center" placeholder="快速搜尋" aria-label="search stop" aria-describedby="search-stop">
      <button class="search-btn btn pe-4" type="button" id="search-stop">
        <img class="search-icon" src="../assets/images/icon-search.svg" alt="search icon">
      </button>
    </div>
  </div>
  <div class="row">
    <div class="col-12 col-md-4">
      <div class="going-box shadow-sm bg-white rounded-1 p-4 mb-4">
        <h5 class="my-3">Where are you going?</h5>
        <select
          @change="getCityBus"
          v-model="selectCity"
          class="form-select" aria-label="Select city">
          <option selected>選擇 縣市</option>
          <template v-for="item in city" :key="item.en">
            <option :value="item.en">{{ item.name }}</option>
          </template>
        </select>
        <svg width="100%" height="2px" class="my-4">
          <line x1="0" y1="0" x2="100%" y2="0" stroke-width="3" stroke-dasharray="14 6" style="stroke: #B6B6B6;"/>
        </svg>
        <select
          v-model="selectRoad"
          class="form-select" aria-label="Select road">
          <option selected value="">選擇 路線</option>
          <template v-for="(item, index) in road" :key="index">
            <option :value="item">
              [ {{ item.RouteName.Zh_tw }} ] {{ item.DepartureStopNameZh }} - {{ item.DestinationStopNameZh }}
              </option>
          </template>
        </select>
        <div class="text-center">
          <button
            @click="getEstimated()"
            class="searchBtn my-4 btn btn-primary" type="button">
            搜尋
          </button>
        </div>
      </div>
      <div class="bg-white rounded-1 shadow-sm overflow-hidden">
        <!-- 無資訊 -->
        <div
          :class="showTime? '' : 'd-none' "
          class="position-relative">
          <div class="time position-absolute text-white">
            <h5>您還沒輸入路線資訊喔！</h5>
            <p style="font-size: 4.6rem">{{ hour }} : {{ minutes }}</p>
          </div>
          <img class="w-100" src="../assets/images/info.svg" alt="show time">
        </div>
        <!-- 有資訊 -->
        <div :class="showTime? 'd-none' : '' ">
          <ul class="list-btn list-group flex-row">
            <li
              @click="isDirection = true"
              class="list-group-item list-group-item-action border-0 text-center">
              <h5 class="m-0">去程 {{ destinationTitle }}</h5>
            </li>
            <li
              @click="isDirection = false"
              class="list-group-item list-group-item-action border-0 text-center">
              <h5 class="m-0">返程 {{ departureTitle }}</h5>
            </li>
          </ul>
          <div class="distance-menu">
            <table class="table table-striped table-hover">
              <tbody>
                <template v-for="item in busDestination" :key="item.StopUID">
                  <tr>
                    <td
                      v-if="isDirection === true"
                      class="px-4 py-3">
                      <p>{{ item.StopName.Zh_tw }} : {{ item.Direction }}</p>
                    </td>
                  </tr>
                </template>
                <template v-for="item in busDeparture" :key="item.StopUID">
                  <tr>
                    <td
                      v-if="isDirection === false"
                      class="px-4 py-3">
                      <p>{{ item.StopName.Zh_tw }}  : {{ item.Direction }}</p>
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-8"></div>
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
  .distance-menu {
    height: 316px;
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
  // customer
  .going-box {
    .searchBtn {
      min-width: 247px;
    }
  }
  .time {
    top: 76px;
    left: 50%;
    transform: translateX(-50%);
    width: 300px;
    text-align: center;
  }
</style>

<script>
import JsSHA from 'jssha'

export default {
  data () {
    return {
      // 選擇縣市
      selectCity: 'Taichung',
      // 選擇縣市之後， getCityBus 出現所有公車路線
      road: [],
      // select 選擇的站點
      selectRoad: [],
      // 往返
      destinationTitle: '',
      departureTitle: '',
      // 搜尋後，預估到站資料
      busDestination: [],
      busDeparture: [],
      // 是否去程 Direction = 0
      isDirection: true,
      // time
      hour: 0,
      minutes: 0,
      showTime: true,
      city: [
        {
          name: '臺中市',
          en: 'Taichung'
        },
        {
          name: '新竹市',
          en: 'Hsinchu'
        },
        {
          name: '苗栗縣',
          en: 'MiaoliCounty'
        },
        {
          name: '新北市',
          en: 'NewTaipei'
        },
        {
          name: '屏東縣',
          en: 'PingtungCounty'
        },
        {
          name: '金門縣',
          en: 'KinmenCounty'
        },
        {
          name: '桃園市',
          en: 'Taoyuan'
        },
        {
          name: '臺北市',
          en: 'Taipei'
        },
        {
          name: '高雄市',
          en: 'Kaohsiung'
        },
        {
          name: '臺南市',
          en: 'Tainan'
        },
        {
          name: '嘉義市',
          en: 'Chiayi'
        }
      ]
    }
  },
  methods: {
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
    // 取得指定站牌(item)公車路線資料
    getCityBus () {
      // 重整沒輸入路線資訊時間
      this.getToday()
      // 時間卡打開
      this.showTime = true
      const urlData = `https://ptx.transportdata.tw/MOTC/v2/Bus/Route/City/${this.selectCity}?$format=JSON`
      this.$http.get(urlData,
        {
          headers: this.apiID()
        })
        .then((res) => {
          console.log('ok 指定縣市的公車', res.data)
          this.road = res.data
          this.selectRoad = ''
        })
        .catch(error => {
          console.log('error 指定縣市的公車', error.response)
        })
    },
    // 取得指定[縣市],[路線名稱]的公車預估到站資料<批次
    getEstimated () {
      // 時間卡關掉
      this.showTime = false
      this.destinationTitle = this.selectRoad.DestinationStopNameZh
      this.departureTitle = this.selectRoad.DepartureStopNameZh
      this.busDestination = []
      this.busDeparture = []
      const urlEstimated = `https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/${this.selectCity}/${this.selectRoad.RouteName.Zh_tw}?$format=JSON`
      this.$http.get(urlEstimated,
        {
          headers: this.apiID()
        })
        .then((res) => {
          // console.log('ok 預估到站', this.selectRoad.RouteName.Zh_tw, res.data)
          res.data.forEach((direction) => {
            if (direction.RouteName.Zh_tw === this.selectRoad.RouteName.Zh_tw) {
              if (direction.Direction === 0) {
                // 去程
                this.busDestination.push(direction)
                console.log('趣', this.busDestination)
              } else if (direction.Direction === 1) {
                this.busDeparture.push(direction)
                console.log('回', this.busDeparture)
              }
            }
          })
        })
        .catch(error => {
          console.log('error 預估到站', error.response)
        })
    },
    getToday () {
      const today = new Date()
      this.hour = today.getHours()
      this.minutes = today.getMinutes()
      if (this.hour.toString().length === 1) {
        this.hour = '0' + this.hour
      }
      if (this.minutes.toString().length === 1) {
        this.minutes = '0' + this.minutes
      }
    }
  },
  watch: {
    selectCity: {
      handler (n) {
        console.log('new', n)
      },
      deep: true
    }
  },
  created () {
    this.getCityBus()
    this.getToday()
  }
}
</script>
