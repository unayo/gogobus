<template>
  <div class="hello">
    <table class="table table-striped table-hover">
      <tbody>
        <template v-for="item in getInfo.api" :key="item.StopUID">
          <tr>
          <td class="px-4 py-3">
            <h5 class="text-primary">{{ item.StationName.Zh_tw }}</h5>
            <p>方位角： {{ item.Bearing }}</p>
            <template v-for="item in getInfo.busApi" :key="item.RouteUID">
              <small>
                {{ item.RouteID }}、
              </small>
            </template>
          </td>
        </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  props: {
    getInfo: {
      // api
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped lang="scss">
</style>
