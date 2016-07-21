<style>
body {
  text-align: center;
}
.uml-img {
  margin-top: 20px;
  margin-bottom: 20px;
  min-width: 50%;
  max-width: 100%
}
</style>

<template>
<div class="window">
  <div class="window-content">
    <div class="pane-group">
      <div class="pane sidebar">
        <textarea class="form-control" rows="100" v-model="uml" lazy></textarea>
      </div>
      <div class="pane uml-view">
        <img class="uml-img" :src="'http://www.plantuml.com/plantuml/png/' + encodedUml">
        <br/>
      </div>
    </div>
  </div>
  <footer class="toolbar toolbar-footer">
    <div class="toolbar-actions">
      <button @click="saveURL" class="btn btn-primary pull-right">复制图片地址</button>
    </div>
  </footer>
</div>
</template>

<script>
import plantumlEncoder from 'plantuml-encoder'
import { clipboard } from 'electron'

export default {
  data () {
    return {
      uml: 'A -> B: Hello'
    }
  },
  computed: {
    encodedUml () {
      return plantumlEncoder.encode(this.uml)
    }
  },
  methods: {
    saveURL () {
      try {
        clipboard.writeText('http://www.plantuml.com/plantuml/png/' + this.encodedUml)
        /* eslint-disable no-new */
        new Notification('复制UML图片地址成功')
      } catch (error) {
        /* eslint-disable no-new */
        new Notification('复制UML图片地址失败')
      }
    }
  }
}
</script>
