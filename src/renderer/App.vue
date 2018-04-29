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
        <textarea class="form-control" rows="100" v-model.lazy="uml" ></textarea>
      </div>
      <div class="pane uml-view">
        <img class="uml-img" :src="'http://www.plantuml.com/plantuml/png/' + encodedUml">
        <br/>
      </div>
    </div>
  </div>
  <footer class="toolbar toolbar-footer">
    <div class="toolbar-actions pull-left">
      <button @click="saveCode" class="btn btn-primary pull-right">复制代码</button>
    </div>
    <div class="toolbar-actions">
      <button @click="saveURL" class="btn btn-primary pull-right">复制图片地址</button>
    </div>
  </footer>
</div>
</template>

<script>
import plantumlEncoder from 'plantuml-encoder'

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
    notify (title, body) {
      /* eslint-disable no-new */
      const options = { silent: true }
      new Notification(title, body ? { body, ...options } : options)
      /* eslint-enable no-new */
    },
    saveURL () {
      try {
        const url = 'http://www.plantuml.com/plantuml/png/' + this.encodedUml
        this.$electron.clipboard.writeText(url)
        this.notify('复制UML图片地址成功', url)
      } catch (error) {
        this.notify('复制UML图片地址失败')
      }
    },
    saveCode () {
      try {
        const uml = '@startuml\n' + this.uml + '\n@enduml'
        this.$electron.clipboard.writeText(uml)
        this.notify('复制代码成功', uml)
      } catch (error) {
        this.notify('复制代码失败')
      }
    }
  }
}
</script>
