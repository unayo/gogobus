<template>
<div class="container py-5">
  <div class="d-flex flex-wrap justify-content-between mb-4">
    <h3 class="text-primary">Latest News | 最新消息</h3>
    <div class="search-width position-relative">
      <input
        v-model="search"
        type="text" class="form-control text-center shadow-sm border border-light" :placeholder="`搜尋 ${selectCity} 關鍵字`" aria-label="search stop" aria-describedby="search-stop">
      <button class="search-btn btn pe-4" type="button" id="search-stop">
        <img class="search-icon" src="../assets/images/icon-search.svg" alt="search icon">
      </button>
    </div>
  </div>
  <div class="bg-white p-5 rounded-1 shadow-sm">
    <div class="col-12 col-md-3">
      <select
        @change="getNews"
        v-model="selectCity"
        class="form-select" aria-label="Select City NEWS">
        <option selected value="">選擇 縣市</option>
        <template v-for="item in city" :key="item.en">
          <option :value="item.en">{{ item.name }}</option>
        </template>
      </select>
    </div>
    <div class="row">
      <h5 class="my-3">{{ selectCity }} 最新消息</h5>
      <div class="distance-news">
        <table class="table table-striped table-hover">
          <tbody>
            <template v-for="item in cityNews" :key="item.NewsID">
              <tr :class="search === '' ? '' : 'd-none' ">
                <td class="px-4 py-3">
                  <a :href="item.NewsURL" target="_blank">
                    <h5 class="text-primary"> {{ item.UpdateTime.substr(0, 10) }}</h5>
                    <p>{{ item.Title }}</p>
                  </a>
                </td>
              </tr>
            </template>
            <!-- 搜尋 -->
            <template v-for="item in filterNews" :key="item.NewsID">
              <tr :class="search === '' ? 'd-none' : '' ">
                <td class="px-4 py-3">
                  <a :href="item.NewsURL" target="_blank">
                    <h5 class="text-primary"> {{ item.UpdateTime.substr(0, 10) }}</h5>
                    <p>{{ item.Title }}</p>
                  </a>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="scss">
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
  .distance-news {
    height: 54vh;
    overflow: scroll;
  }
  // customer
  .table {
    a {
      display:block;
      text-decoration:none;
    }
    p {
      color: #7D7D7D;
    }
  }
</style>

<script>
import JsSHA from 'jssha'

export default {
  data () {
    return {
      selectCity: '',
      cityNews: [],
      // 搜尋
      search: '',
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
    getNews () {
      const url = `https://ptx.transportdata.tw/MOTC/v2/Bus/News/City/${this.selectCity}?$format=JSON`
      console.log(url)
      this.$http.get(url,
        {
          headers: this.apiID()
        })
        .then((res) => {
          this.cityNews = res.data
          console.log('news', this.cityNews)
        })
        .catch(error => {
          console.log('error news', error.response)
        })
    }
  },
  computed: {
    filterNews () {
      return this.cityNews.filter((item) => {
        return item.Title.match(this.search)
      })
    }
  }
}
</script>
